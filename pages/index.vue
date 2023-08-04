<template>
  <main class="page relative w-full flex flex-col items-center">
    <!-- alert -->
    <Badge
      class="md:text-sm pointer-events-none select-none rounded-md font-medium normal-case py-2 px-4 mb-10 sm:mb-44 bg-slate-100 text-black dark:bg-slate-800 dark:text-white"
    >
      <span class="text-xl"></span>
      <Badge class="text-xl bg-transparent mr-2 !p-0">👋🏻</Badge>

      <span v-text="TranslatorStore.getText('indexAlert')"></span>

      <Badge class="relative text-xl bg-transparent !p-0">
        <span class="rotate-45">👆</span>
      </Badge>
    </Badge>

    <!-- intro -->
    <article class="flex flex-col items-center">
      <div class="relative w-full flex justify-end mt-10 sm:mt-0 max-sm:hidden">
        <Tooltip
          class="flex text-inherit sm:right-32 bottom-5 bg-slate-100 dark:bg-slate-800 [&_img]:cursor-pointer [&_.reactions]:w-6"
        >
          <img
            @click="setReaction(Reaction.Like)"
            src="/like.gif"
            class="reactions mr-3"
          />

          <img
            @click="setReaction(Reaction.Love)"
            src="/love.gif"
            class="reactions mr-3"
          />
          <img
            @click="setReaction(Reaction.Wow)"
            src="/wow.gif"
            class="reactions"
          />
        </Tooltip>
      </div>

      <!-- title -->
      <h1
        :class="{ english: TranslatorStore.english }"
        class="w-full firacode text-3xl text-center md:text-5xl"
      >
        <Tooltip
          :class="{
            like: reaction === Reaction.Like,
            love: reaction === Reaction.Love,
            wow: reaction === Reaction.Wow,
          }"
          class="w-14 flex justify-center rounded-xl -translate-y-16 [&_.reaction]:w-6 [&_.reaction]:hidden bg-slate-100 dark:bg-slate-800 sm:translate-x-32 py-2 max-sm:hidden"
        >
          <img src="/like.gif" class="reaction [.like_&]:flex" />
          <img src="/love.gif" class="reaction [.love_&]:flex" />
          <img src="/wow.gif" class="reaction [.wow_&]:flex" />
        </Tooltip>

        <span v-text="TranslatorStore.getText('indexWelcome')"></span>
        <br />
        <TextTyping
          :qualifications="qualifications"
          class="whitespace-nowrap leading-normal text-primary-500"
        />
      </h1>

      <InteractiveText
        label="indexIntro"
        class="relative text-lg md:text-xl text-center md:max-w-5xl mt-6"
      />

      <!-- buttons -->
      <div class="flex flex-col-reverse items-center sm:flex-row mt-6">
        <NuxtLink to="/projects">
          <Button class="m-2">
            {{ TranslatorStore.getText("navProjectsPage") }} 💻
          </Button>
        </NuxtLink>
        <NuxtLink to="/carrer">
          <Button class="bg-slate-800 text-white m-2">
            {{ TranslatorStore.getText("navCarrerPage") }}
          </Button>
        </NuxtLink>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
enum Reaction {
  Like,
  Love,
  Wow,
}

// store
const TranslatorStore = useTranslatorStore();

// data
const reaction = ref<Reaction>(Reaction.Like);
const qualifications = reactive([
  "Web Developer",
  "Javascript Developer",
  "Golang Developer",
  "Vue Developer",
  "Nuxt Developer",
  "Typescript Developer",
]);

// methods
function setReaction(react: Reaction): void {
  reaction.value = react;
}
</script>

<style scoped>
.intro {
  max-width: -webkit-fill-available;
}

.reaction {
  animation: up 0.4s ease;
}
.reactions {
  transition: 0.2s all;
}
.reactions:hover {
  transform: scale(1.2);
}

@keyframes up {
  from {
    transform: scale(0);
  }
  50% {
    transform: scale(1.3);
  }
  to {
    transform: scale(1);
  }
}
</style>
