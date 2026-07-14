import { imprintService, type Imprint } from "@/api/imprint/imprint.service";
import { readonly, ref } from "vue";

const STORAGE_KEY = "strapi-imprint-content";

const imprint = ref<Imprint | null>(null);
const error = ref<string | null>(null);
const isLoading = ref(false);
const isInitialized = ref(false);

let loadingPromise: Promise<void> | null = null;

function getStoredImprint(): Imprint | null {
  const storedValue = sessionStorage.getItem(STORAGE_KEY);

  if (!storedValue) {
    return null;
  }

  try {
    return JSON.parse(storedValue) as Imprint;
  } catch {
    sessionStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

async function loadImprint(): Promise<void> {
  if (isInitialized.value) {
    return;
  }

  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = (async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const storedImprint = getStoredImprint();

      if (storedImprint) {
        imprint.value = storedImprint;
        return;
      }

      const response = await imprintService.getImprint();

      imprint.value = response.data;

      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(response.data));
    } catch (caughtError) {
      error.value =
        caughtError instanceof Error
          ? caughtError.message
          : "Imprint content could not be loaded.";
    } finally {
      isLoading.value = false;
      isInitialized.value = true;
      loadingPromise = null;
    }
  })();

  return loadingPromise;
}

async function refreshImprint(): Promise<void> {
  sessionStorage.removeItem(STORAGE_KEY);

  imprint.value = null;
  error.value = null;
  isInitialized.value = false;
  loadingPromise = null;

  await loadImprint();
}

export function useImprintStore() {
  return {
    imprint: readonly(imprint),
    error: readonly(error),
    isLoading: readonly(isLoading),
    isInitialized: readonly(isInitialized),
    loadImprint,
    refreshImprint,
  };
}
