import { readonly, ref } from "vue";

const isPageLoading = ref(false);

export function usePageLoadingStore() {
  function startLoading() {
    isPageLoading.value = true;
  }

  function stopLoading() {
    isPageLoading.value = false;
  }

  return {
    isPageLoading: readonly(isPageLoading),
    startLoading,
    stopLoading,
  };
}
