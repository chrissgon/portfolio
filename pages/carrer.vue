<template>
  <article class="page relative w-full flex flex-col items-center">
    <!-- alert -->
    <Badge
      class="md:text-sm pointer-events-none select-none rounded-md font-medium normal-case py-2 px-4 mb-12 sm:mb-36 bg-slate-100 text-black dark:bg-slate-800 dark:text-white"
    >
      <span class="text-xl"></span>
      <Badge class="text-xl bg-transparent mr-2 !p-0">👋🏻</Badge>

      <span v-text="TranslatorStore.getText('carrerAlert')"></span>

      <Badge class="relative text-lg ml-2 bg-transparent !p-0"> 📆 </Badge>
    </Badge>

    <!-- timeline -->
    <Timeline :labels="['2016', '2017', '2019', '2020', '2021']">
      <!-- 2016 -->
      <template #2016>
        <h4
          v-text="TranslatorStore.getText('carrer2016Title')"
          class="firacode text-xl sm:text-2xl text-center text-primary-500"
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
      <!-- 2017 -->
      <template #2017>
        <h4
          v-text="TranslatorStore.getText('carrer2017Title')"
          class="firacode text-xl sm:text-2xl text-center text-primary-500"
        ></h4>
        <InteractiveText
          label="carrer2017Info1"
          class="relative text-base sm:text-lg text-center md:max-w-5xl mt-6"
        />
        <InteractiveText
          label="carrer2017Info2"
          class="relative text-base sm:text-lg text-center md:max-w-5xl mt-6"
        />
      </template>
      <!-- 2019 -->
      <template #2019>
        <Slider :length="2">
          <!-- slide 1 -->
          <template #1>
            <h4
              v-text="TranslatorStore.getText('carrer2019Slide1Title')"
              class="firacode text-xl sm:text-2xl text-center text-primary-500"
            ></h4>
            <InteractiveText
              label="carrer2019Slide1Info"
              class="relative text-base sm:text-lg text-center md:max-w-5xl mt-6"
            />
          </template>
          <!-- slide 2 -->
          <template #2>
            <h4
              v-text="TranslatorStore.getText('carrer2019Slide2Title')"
              class="firacode text-xl sm:text-2xl text-center text-primary-500"
            ></h4>
            <InteractiveText
              label="carrer2019Slide2Info"
              class="relative text-base sm:text-lg text-center md:max-w-5xl mt-6"
            />
          </template>
        </Slider>
      </template>
      <!-- 2020 -->
      <template #2020>
        <h4
          v-text="TranslatorStore.getText('carrer2020Title')"
          class="firacode text-xl sm:text-2xl text-center text-primary-500"
        ></h4>

        <span
          v-text="TranslatorStore.getText('carrer2020Info1')"
          class="relative text-base sm:text-lg text-center md:max-w-5xl mt-6"
        ></span>
        <InteractiveText
          label="carrer2020Info2"
          class="relative text-base sm:text-lg text-center md:max-w-5xl mt-6"
        />
      </template>
      <!-- 2021 -->
      <template #2021>
        <Slider :length="2">
          <!-- slide 1 -->
          <template #1>
            <InteractiveText
              label="carrer2021Slide1Title"
              class="firacode text-xl sm:text-2xl text-center text-primary-500"
            />

            <InteractiveText
              label="carrer2021Slide1Info"
              class="relative text-base sm:text-lg text-center md:max-w-5xl mt-6"
            />
          </template>
          <!-- slide 2 -->
          <template #2>
            <h4
              v-text="TranslatorStore.getText('carrer2021Slide2Title')"
              class="firacode text-xl sm:text-2xl text-center text-primary-500"
            ></h4>

            <InteractiveText
              label="carrer2021Slide2Info"
              class="relative text-base sm:text-lg text-center md:max-w-5xl mt-6"
            />
          </template>
        </Slider>
      </template>
    </Timeline>

    <!-- buttons -->
    <!-- <div
      class="flex flex-col-reverse items-center sm:flex-row mt-8 mb-14 sm:mt-14"
    >
      <NuxtLink to="/">
        <Button class="m-2"> Home 🏠 </Button>
      </NuxtLink>
      <NuxtLink to="/projects">
        <Button class="bg-slate-800 text-white m-2">
          {{ TranslatorStore.getText("navProjectsPage") }}
        </Button>
      </NuxtLink>
    </div> -->
  </article>
</template>

<script setup lang="ts">
// store
const TranslatorStore = useTranslatorStore();
</script>

<style scoped></style>
