<template>
  <div v-click-outside="hide" class="relative inline-flex justify-center">
    <Tooltip
      v-if="visible"
      :class="{ isSelected }"
      class="absolute w-fit -mt-12"
    >
      <Badge
        v-for="choice in choices"
        @click="set"
        :class="{ wrong: isWrong(choice) }"
        class="ml-2 [&:first-child]:m-0 [.isSelected_&.wrong]:bg-red-600 [.isSelected_&:not(.wrong)]:bg-green-600"
      >
        <i v-if="isSelected" :class="getIcon(choice)" class="mr-1 -ml-1"></i>
        <span v-text="choice"></span>
      </Badge>
    </Tooltip>

    <span v-if="!isSelected" class="absolute rotate-45 top-2 right-4">👆</span>

    <span
      v-text="text"
      @click="show"
      :class="{ isSelected }"
      class="answer relative text-slate-500 text-center cursor-pointer px-3 font-medium [&.isSelected]:after:!hidden after:content-[''] after:flex after:w-2 after:h-2 after:absolute after:top-1 after:right-2 after:rounded-full after:bg-amber-500 after:animate-ping"
    ></span>
  </div>
</template>

<script setup lang="ts">
// props
interface Props {
  choices: string[];
  right: string;
}

const props = defineProps<Props>();

// computed
const isSelected = computed<boolean>(() => text.value !== "?");
const isWrong = computed(() => (ch: string) => ch !== props.right);
const getIcon = computed(() => (ch: string) => {
  return ch !== props.right ? "bi-x-circle" : "bi-check-circle";
});

// data
const text = ref<string>("?");
const visible = ref<boolean>(false);

// methods
function set(): void {
  text.value = props.right;
}
function show(): void {
  visible.value = true;
}
function hide(): void {
  visible.value = false;
}

// watch
watch(
  () => props.right,
  () => {
    set();
  }
);
</script>

<style scoped>
.isSelected::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: no-drop;
}
</style>
