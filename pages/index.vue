<template>
  <main
    class="page relative w-full flex flex-col sm:justify-center items-center"
  >
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
    <!-- <InteractiveText
      label="temp"
    /> -->

    <!-- buttons -->
    <div class="flex flex-col sm:flex-row mt-6">
      <Button class="bg-slate-800 text-white m-2">
        Tour of my life
        <i class="bi-send-fill ml-2"></i>
      </Button>
      <Button class="m-2">My projects</Button>
    </div>

    <!-- alert -->
    <Badge
      class="md:text-sm pointer-events-none select-none rounded-md font-medium normal-case py-2 px-4 mt-8 md:mt-24 bg-slate-100 text-black dark:bg-slate-800 dark:text-white"
    >
      <Badge class="text-base bg-amber-400 px-2 py-1 mr-2">
        <i class="bi-lightbulb-fill dark:text-slate-700"></i>
      </Badge>

      <span v-text="TranslatorStore.getText('indexAlert')"></span>

      <Badge class="relative text-xl bg-transparent text-slate-500">
        ?
        <div
          class="w-3 h-3 absolute top-1 right-1 rounded-full bg-amber-500 animate-ping"
        ></div>
      </Badge>
    </Badge>

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

<style scoped></style>
