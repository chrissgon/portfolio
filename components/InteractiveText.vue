<template>
  <article>
    <span v-text="texts[0]"></span>
    <Choices :choices="shuffle(choices)" :right="choices[0]" />
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
const texts = computed<any[]>(() =>
  TranslatorStore.getInteractiveText(props.label)
);
const choices = computed<string[]>(() => texts.value[2]);

// methods
function shuffle(arr: any[]): any[] {
  const random = [...arr];
  return random.sort(() => Math.random() - 0.5);
}
</script>

<style scoped></style>
