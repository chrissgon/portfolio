<template>
  <label
    id="english"
    class="flex items-center px-3 py-2 rounded-full select-none text-sm cursor-pointer bg-slate-100 dark:bg-slate-800"
  >
    <input
      v-model="TranslatorStore.english"
      type="checkbox"
      id="english"
      class="hidden"
    />
    <img :src="`/${getImage}.png`" class="h-4" />
    <span v-text="getText" class="mx-2 text-xs font-medium"></span>
    <i class="bi-arrow-left-right text-xs text-slate-500"></i>
  </label>
</template>

<script setup lang="ts">
// store
const TranslatorStore = useTranslatorStore();

// computed
const getImage = computed<string>(() =>
  TranslatorStore.english ? "eua" : "brazil"
);
const getText = computed<string>(() =>
  TranslatorStore.english ? "English" : "Português"
);
</script>

<style scoped></style>
