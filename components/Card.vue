<template>
  <div
    class="card flex justify-between w-full lg:w-fit h-fit rounded-3xl border dark:border-slate-700 p-4 overflow-hidden"
  >
    <div class="flex flex-col py-2 pl-4">
      <h4 v-text="props.name" class="text-2xl font-semibold"></h4>
      <p v-text="props.description" class="text-sm"></p>

      <p class="flex flex-wrap">
        <span
          v-for="tag in props.tags"
          v-text="tag"
          class="bg text-xs text-primary-500 rounded-full p-1 px-3 mr-2 mt-5"
        ></span>
      </p>
    </div>

    <a
      :href="props.repo"
      target="_blank"
      class="bg flex items-center rounded-full text-primary-500 ml-5 px-0.5"
    >
      <i class="bi-arrow-right-short text-3xl"></i>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "@/store/ProjectStore";

interface Props {
  props: Project;
}

defineProps<Props>();
</script>

<style scoped>
.dark .card {
  background: rgba(30, 41, 59, 0.5);
}
.card {
  backdrop-filter: blur(15px);
  background: rgba(255, 255, 255, 0.5);
}
.bg {
  background-color: rgba(6, 181, 241, 0.1);
}
</style>
