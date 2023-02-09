<template>
  <article class="page relative w-full flex flex-col items-center">
    <!-- alert -->
    <Badge
      class="md:text-sm pointer-events-none select-none rounded-md font-medium normal-case py-2 px-4 mb-12 sm:mb-24 bg-slate-100 text-black dark:bg-slate-800 dark:text-white"
    >
      <span class="text-xl"></span>
      <Badge class="text-xl bg-transparent mr-2 !p-0">👋🏻</Badge>

      <span v-text="TranslatorStore.getText('carrerAlert')"></span>

      <Badge class="relative text-lg ml-2 bg-transparent !p-0"> 📆 </Badge>
    </Badge>

    <!-- timeline -->
    <Timeline :labels="['2016', '2017', '2019', '2020', '2021']">
      <template #2016>
        <h4
          v-text="TranslatorStore.getText('carrer2016Title')"
          class="firacode text-xl sm:text-2xl text-center"
        ></h4>

        <InteractiveText
          label="carrer2016Info1"
          class="relative text-base sm:text-lg text-center md:max-w-5xl mt-6"
        />
        <InteractiveText
          label="carrer2016Info2"
          class="relative text-base sm:text-lg text-center md:max-w-5xl mt-6"
        />
      </template>
      <template #2017> 2017 </template>
      <template #2019> 2019 </template>
      <template #2020> 2020 </template>
      <template #2021> 2021 </template>
    </Timeline>

    <!-- buttons -->
    <div class="flex flex-col items-center sm:flex-row mt-8 mb-14 sm:mt-14">
      <Button class="m-2">
        <NuxtLink to="/"> Home 🏠 </NuxtLink>
      </Button>
      <Button class="bg-slate-800 text-white m-2">
        <NuxtLink to="/projects">
          {{ TranslatorStore.getText("indexSecondaryButton") }}
        </NuxtLink>
      </Button>
    </div>
  </article>
</template>

<script setup lang="ts">
// store
const TranslatorStore = useTranslatorStore();
</script>

<style scoped></style>
