<template>
  <div
    :class="{ dark: dark }"
    class="[&.dark]:bg-slate-900 [&.dark]:text-white"
  >
    <BackgroundParallax />
    <section
      class="App scrollbar w-full relative overflow-x-hidden px-5 sm:px-10"
    >
      <Header class="pt-10 pb-36" />
      <div class="-mt-28">
        <NuxtPage />
      </div>
      <Social class="my-10 mb-20 lg:mb-10" />
      <NavBar class="lg:hidden" />
    </section>
  </div>
</template>

<script setup lang="ts">
const dark = computed<boolean | null>(() => useModeStore().dark);
</script>

<style scoped></style>
