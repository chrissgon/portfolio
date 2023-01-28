<template>
  <label
    for="mode"
    class="flex items-center px-1 h-8 w-14 rounded-full cursor-pointer border border-slate-300 dark:border-slate-600"
  >
    <input v-model="ModeStore.dark" id="mode" type="checkbox" class="hidden" />

    <img
      :src="`${getImage}mode.svg`"
      :class="{ right: ModeStore.dark }"
      class="rounded-full w-6 h-6 p-1.5 transition-transform bg-sky-100 dark:bg-slate-800 select-none"
    />
  </label>
</template>

<script setup lang="ts">
// store
const ModeStore = useModeStore();

// computed
const getImage = computed<string>(() => 
  ModeStore.dark ? "dark" : "light"
);
</script>

<style scoped>
img.right {
  transform: translateX(22px);
}
</style>
