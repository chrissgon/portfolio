<template>
  <div class="w-full flex justify-between items-center relative mt-10">
    <span
      v-text="getCount"
      class="w-full text-center absolute text-slate-500 font-medium -top-10"
    ></span>

    <i
      @click="previous"
      :disabled="isFirst"
      class="bi-chevron-left text-2xl py-10 cursor-pointer"
    ></i>

    <div v-for="i in length" v-show="i === current" class="sm:px-10">
      <slot :name="i"></slot>
    </div>

    <i
      @click="next"
      :disabled="isLast"
      class="bi-chevron-right text-2xl py-10 cursor-pointer"
    ></i>
  </div>
</template>

<script setup lang="ts">
interface Props {
  length: number;
}

const props = defineProps<Props>();

// computed
const getCount = computed<string>(() => {
  return `${current.value}/${props.length}`;
});
const isFirst = computed<boolean>(() => {
  return current.value === 1;
});
const isLast = computed<boolean>(() => {
  return current.value === props.length;
});

// data
const current = ref(1);

// methods
function previous(): void {
  if (isFirst.value) return;
  --current.value;
}
function next(): void {
  if (isLast.value) return;
  ++current.value;
}
</script>

<style scoped></style>
