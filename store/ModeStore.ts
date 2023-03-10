export const useModeStore = defineStore(
  "ModeStore",
  () => {
    const dark = ref(true);

    return { dark };
  },
  { persist: true }
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useModeStore, import.meta.hot));
}
