<template>
  <div
    :style="{ background: props.color }"
    class="card w-fit h-24 flex justify-between rounded-2xl p-2 text-white"
  >
    <div class="w-32 sm:w-40 flex flex-col justify-between whitespace-nowrap px-3 py-2">
      <h4 v-text="props.label" class="text-2xl mb-1 font-semibold"></h4>

      <a
        v-for="[icon, url] in props.links"
        :class="icon"
        :href="url"
        target="_blank"
        class="text-2xl"
      >
      </a>
    </div>

    <div class="relative flex w-fit justify-center items-end">
      <img
        v-if="props.image"
        :src="props.image"
        class="absolute h-20 -translate-y-7 z-10"
      />
      <span
        v-text="props.id"
        class="px-1 font-semibold opacity-50 -translate-x-2 text-5xl"
      ></span>
    </div>

    <a
      :href="props.url"
      target="_blank"
      class="flex items-center bg-white rounded-full px-0.5"
    >
      <i
        :style="{ color: props.color }"
        class="bi-arrow-right-short text-2xl"
      ></i>
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
.card {
  max-width: 350px;
}
</style>
