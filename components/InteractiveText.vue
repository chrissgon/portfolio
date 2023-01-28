<template>
  <article>
    <span v-text="texts[0]"></span>
    <Choices :choices="shuffle(choices)" :right="texts[2][0]" />
    <span v-text="texts[1]"></span>
  </article>
</template>

<script setup lang="ts">
// props
interface Props {
  label: string;
}
const props = defineProps<Props>();

// store
const TranslatorStore = useTranslatorStore();

// data
const texts = TranslatorStore.getInteractiveText(props.label);
const choices = [...texts[2]];

// methods
function shuffle(arr: any[]): any[] {
  return arr.sort(() => Math.random() - 0.5);
}
</script>

<style scoped></style>
