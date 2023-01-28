<template>
  <span v-text="qualification" class="after:content-['|']"> </span>
</template>

<script setup lang="ts">
// props
interface Props {
  qualifications: string[];
}

const props = defineProps<Props>();

// data
const qualification = ref(props.qualifications[0]);

// methods
async function enter(): Promise<void> {
  props.qualifications.push(
    props.qualifications.shift() || props.qualifications[0]
  );
  await delLetters();
  await sleep(1500);
  await addLetters();
  await sleep(5000);
  enter();
}

async function delLetters(): Promise<void> {
  if (qualification.value === "") return;

  qualification.value = qualification.value.slice(0, -1);
  await sleep(60);
  await delLetters();
}

async function addLetters(): Promise<void> {
  for (const char of props.qualifications[0]) {
    qualification.value += char;
    await sleep(125);
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

enter();
</script>

<style scoped>
span::after {
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: inherit;
  }
}
</style>
