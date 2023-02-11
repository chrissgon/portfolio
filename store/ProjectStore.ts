import ProjectsJSON from "~/assets/projects.json";

export interface Project {
  description?: string;
  name: string;
  repo: string;
  site: string;
  topics: string[];
}

export const useProjectStore = defineStore("ProjectStore", () => {
  // data
  const projects = reactive<Project[]>(ProjectsJSON);
  const filter = ref<string>("");

  // computed
  const filterIsEmpty = computed<boolean>(() => !filter.value.trim());
  const getProjects = computed<Project[]>(() => {
    if (filterIsEmpty.value) return projects;

    return projects.filter(({ name }) =>
      new RegExp(filter.value, "i").test(name)
    );
  });

  return { getProjects, filter };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot));
}
