<template>
  <main class="page relative w-full flex flex-col justify-between items-center">
    <!-- alert -->
    <Badge
      class="md:text-sm pointer-events-none select-none rounded-md font-medium normal-case py-2 px-4 mb-10 bg-slate-100 text-black dark:bg-slate-800 dark:text-white"
    >
      <span class="text-xl"></span>
      <Badge class="text-xl bg-transparent mr-2 !p-0">👋🏻</Badge>

      <span v-text="TranslatorStore.getText('indexAlert')"></span>

      <Badge class="relative text-xl bg-transparent !p-0">
        <span class="rotate-45">👆</span>
      </Badge>
    </Badge>

    <!-- intro -->
    <article class="flex flex-col items-center">
      <!-- title -->
      <h1
        :class="{ english: TranslatorStore.english }"
        class="w-full firacode text-3xl text-center md:text-5xl"
      >
        <span v-text="TranslatorStore.getText('indexWelcome')"></span>
        <br />
        <TextTyping
          :qualifications="qualifications"
          class="whitespace-nowrap leading-normal text-primary-500"
        />
      </h1>

      <InteractiveText
        label="indexIntro"
        class="relative text-lg md:text-xl text-center md:max-w-5xl mt-6"
      />

      <!-- buttons -->
      <div class="flex flex-col items-center sm:flex-row mt-6">
        <Button class="bg-slate-800 text-white m-2">
          {{ TranslatorStore.getText("indexPrimaryButton") }}
        </Button>
        <Button class="m-2">
          {{ TranslatorStore.getText("indexSecondaryButton") }}
        </Button>
      </div>
    </article>

    <Social />
  </main>
</template>

<script setup lang="ts">
// store
const TranslatorStore = useTranslatorStore();

// data
const qualifications = reactive([
  "Web Developer",
  "Javascript Developer",
  "Golang Developer",
  "Vue Developer",
  "Nuxt Developer",
]);
</script>

<style scoped>
.intro {
  max-width: -webkit-fill-available;
}
</style>
