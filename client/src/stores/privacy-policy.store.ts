import {
  privacyPolicyService,
  type PrivacyPolicy,
} from "@/api/privacy-policy/privacy-policy.service";
import { readonly, ref } from "vue";

const STORAGE_KEY = "strapi-privacy-policy-content";

const privacyPolicy = ref<PrivacyPolicy | null>(null);
const error = ref<string | null>(null);
const isLoading = ref(false);
const isInitialized = ref(false);

let loadingPromise: Promise<void> | null = null;

function getStoredPrivacyPolicy(): PrivacyPolicy | null {
  const storedValue = sessionStorage.getItem(STORAGE_KEY);

  if (!storedValue) {
    return null;
  }

  try {
    return JSON.parse(storedValue) as PrivacyPolicy;
  } catch {
    sessionStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

async function loadPrivacyPolicy(): Promise<void> {
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
      const storedPrivacyPolicy = getStoredPrivacyPolicy();

      if (storedPrivacyPolicy) {
        privacyPolicy.value = storedPrivacyPolicy;
        return;
      }

      const response = await privacyPolicyService.getPrivacyPolicy();

      privacyPolicy.value = response.data;

      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(response.data));
    } catch (caughtError) {
      error.value =
        caughtError instanceof Error
          ? caughtError.message
          : "Privacy policy content could not be loaded.";
    } finally {
      isLoading.value = false;
      isInitialized.value = true;
      loadingPromise = null;
    }
  })();

  return loadingPromise;
}

async function refreshPrivacyPolicy(): Promise<void> {
  sessionStorage.removeItem(STORAGE_KEY);

  privacyPolicy.value = null;
  error.value = null;
  isInitialized.value = false;
  loadingPromise = null;

  await loadPrivacyPolicy();
}

export function usePrivacyPolicyStore() {
  return {
    privacyPolicy: readonly(privacyPolicy),
    error: readonly(error),
    isLoading: readonly(isLoading),
    isInitialized: readonly(isInitialized),
    loadPrivacyPolicy,
    refreshPrivacyPolicy,
  };
}
