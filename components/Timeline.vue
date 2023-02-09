<template>
  <div class="w-full flex flex-col items-center">
    <!-- labels -->
    <nav class="relative w-full max-w-5xl flex justify-around sm:px-10">
      <span
        class="line absolute flex w-full top-3 h-1 text-white bg-slate-100 dark:text-slate-900 dark:bg-slate-800"
      ></span>
      <!-- dates -->
      <p
        v-for="label in labels"
        @click="select(label)"
        :class="{ selected: selected === label }"
        class="relative flex flex-col items-center cursor-pointer scale-90 opacity-50 transition-all [&.selected]:scale-100 [&.selected]:opacity-100 mx-2"
      >
        <span class="text-xl">📆</span>
        <span v-text="label"></span>
      </p>
    </nav>

    <!-- slots -->
    <article class="mt-8 sm:mt-16">
      <div
        v-for="label in labels"
        v-show="selected === label"
        class="flex flex-col justify-center items-center"
      >
        <slot :name="label"></slot>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
// props
interface Props {
  labels: string[];
}

const props = defineProps<Props>();

// data
const selected = ref<string>(props.labels[2]);

// methods
function select(label: string): void {
  selected.value = label;
}
</script>

<style scoped>
.line::after,
.line::before {
  content: "";
  box-shadow: 0 0 20px 20px currentColor;
}
.line::before {
  right: 0;
  position: absolute;
}
</style>
