import translator from "~/assets/translator.json";

interface Texts {
  [index: string]: any;
}

export const useTranslatorStore = defineStore(
  "TranslatorStore",
  () => {
    // data
    const english = ref<boolean>(true);
    const texts = reactive<Texts>(translator);

    function getText(label: string): string {
      return texts[label][english.value ? 0 : 1];
    }

    function getInteractiveText(label: string): any[] {
      const interactive: string[] = getText(label).split("_");
      interactive[2] = texts[label][2];
      return interactive;
    }

    return { english, getText, getInteractiveText };
  },
  { persist: true }
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTranslatorStore, import.meta.hot));
}
