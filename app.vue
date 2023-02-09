<template>
  <div
    :class="{ dark: dark }"
    class="[&.dark]:bg-slate-900 [&.dark]:text-white"
  >
    <!-- <BackgroundParallax /> -->
    <section
      class="App scrollbar w-full relative overflow-x-hidden px-5 sm:px-10"
    >
      <Header class="pt-10 pb-36" />
      <div class="-mt-28">
        <NuxtPage />
      </div>
      <Social />
    </section>
  </div>
</template>

<script setup lang="ts">
const dark = computed<boolean | null>(() => useModeStore().dark);
</script>

<style scoped></style>
