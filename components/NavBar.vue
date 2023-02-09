<template>
  <nav
    class="w-full h-16 fixed bottom-0 left-0 flex justify-center items-center pb-5 [&_.item.active]:bg-slate-100 [&_.item.active]:dark:bg-slate-800 bg-white dark:bg-slate-900"
  >
    <NuxtLink to="/">
      <p :class="{ active: isActive('index') }" class="item">
        🏠 <span class="text-xs">{{ Translator.getText("navIndexPage") }}</span>
      </p>
    </NuxtLink>
    <NuxtLink to="/carrer">
      <p :class="{ active: isActive('carrer') }" class="item">
        💼
        <span class="text-xs">{{ Translator.getText("navCarrerPage") }}</span>
      </p>
    </NuxtLink>
    <NuxtLink to="/projects">
      <p :class="{ active: isActive('projects') }" class="item">
        💻
        <span class="text-xs">{{ Translator.getText("navProjectsPage") }}</span>
      </p>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
// store
const Translator = useTranslatorStore();

// computed
const getPage = computed(() => {
  return useRoute().name;
});
const isActive = computed(() => (page: string) => getPage.value === page);
</script>

<style scoped>
nav {
  box-shadow: 0 0 20px 20px white;
}

.dark nav {
  box-shadow: 0 0 20px 20px rgb(15 23 42);
}

.item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  filter: saturate(0);
  opacity: 0.5;
  border-radius: 100px;
  margin: 0 10px;
}

.item.active {
  filter: saturate(1);
  opacity: 1;
}

.item.active > span {
  display: inline;
}

.item > span {
  display: none;
  margin-left: 0.25rem;
}
</style>
