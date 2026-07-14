import { globalService, type Global } from "@/api/global/global.service";
import { readonly, ref } from "vue";

const STORAGE_KEY = "strapi-global-content";

const global = ref<Global | null>(null);
const error = ref<string | null>(null);
const isLoading = ref(false);
const isInitialized = ref(false);

let initializationPromise: Promise<void> | null = null;

function getStoredGlobal(): Global | null {
  const storedValue = sessionStorage.getItem(STORAGE_KEY);

  if (!storedValue) {
    return null;
  }

  try {
    return JSON.parse(storedValue) as Global;
  } catch {
    sessionStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

async function loadGlobal(): Promise<void> {
  if (isInitialized.value) {
    return;
  }

  if (initializationPromise) {
    return initializationPromise;
  }

  initializationPromise = (async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const storedGlobal = getStoredGlobal();

      if (storedGlobal) {
        global.value = storedGlobal;
        return;
      }

      const response = await globalService.getGlobal();

      global.value = response.data;

      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(response.data));
    } catch (caughtError) {
      error.value =
        caughtError instanceof Error
          ? caughtError.message
          : "Global content could not be loaded.";
    } finally {
      isLoading.value = false;
      isInitialized.value = true;
    }
  })();

  return initializationPromise;
}

async function refreshGlobal(): Promise<void> {
  sessionStorage.removeItem(STORAGE_KEY);

  global.value = null;
  error.value = null;
  isInitialized.value = false;
  initializationPromise = null;

  await loadGlobal();
}

export function useGlobalStore() {
  return {
    global: readonly(global),
    error: readonly(error),
    isLoading: readonly(isLoading),
    isInitialized: readonly(isInitialized),
    loadGlobal,
    refreshGlobal,
  };
}
