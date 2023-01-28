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
      const answers = texts[label][2].map((answer: string) => {
        const parts = answer.split("|");
        return english.value ? parts[0] : parts[1];
      });
      interactive[2] = answers;
      return interactive;
    }

    return { english, getText, getInteractiveText };
  },
  { persist: true }
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTranslatorStore, import.meta.hot));
}
