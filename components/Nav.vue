<template>
  <nav
    class="flex flex-wrap justify-center [&>a]:mx-2 [&_button]:text-sm [&_button.active]:bg-slate-100 [&_button.active]:dark:bg-slate-800"
  >
    <NuxtLink to="/">
      <Button :class="{ active: isActive('index') }">
        {{ Translator.getText("navIndexPage") }} 🏠</Button
      >
    </NuxtLink>
    <NuxtLink to="/carrer">
      <Button :class="{ active: isActive('carrer') }">
        {{ Translator.getText("navCarrerPage") }} 💼</Button
      >
    </NuxtLink>
    <NuxtLink to="/projects">
      <Button :class="{ active: isActive('projects') }">
        {{ Translator.getText("navProjectsPage") }} 💻</Button
      >
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
// data
const Translator = useTranslatorStore();

// computed
const getPage = computed(() => {
  return useRoute().name;
});
const isActive = computed(() => (page: string) => getPage.value === page);
</script>

<style scoped></style>
