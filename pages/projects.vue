<template>
  <div class="page relative w-full flex flex-col items-center">
    <input
      v-model="ProjectStore.filter"
      class="outline-none border dark:border-slate-700 dark:bg-slate-800 max-w-2xl py-2 px-6 w-full my-10 rounded-full"
      type="text"
      placeholder="🔍 Pesquise"
    />

    <article class="w-full flex justify-center flex-wrap">
      <Card
        v-for="project in ProjectStore.getProjects"
        :props="project"
        class="m-3"
      />
    </article>
  </div>
</template>

<script setup lang="ts">
const ProjectStore = useProjectStore();
</script>

<style scoped></style>
