import ProjectsJSON from "~/assets/projects.json";

export interface Project {
  color: string;
  image?: string;
  id?: string;
  label: string;
  links: string[][];
  order: number;
  url: string;
}

export const useProjectStore = defineStore("ProjectStore", () => {
  // data
  const projects = reactive<Project[]>(ProjectsJSON);
  const filter = ref<string>("");

  // computed
  const filterIsEmpty = computed<boolean>(() => !filter.value.trim());
  const getProjects = computed<Project[]>(() => {
    if (filterIsEmpty.value) {
      return SortAndFormatProjects(projects);
    }
    return SortAndFormatProjects(
      projects.filter(({ label }) => new RegExp(filter.value, "i").test(label))
    );
  });

  // methods
  function formatNumber(n: number): string {
    return `#${String("00" + n).slice(-3)}`;
  }
  function SortAndFormatProjects(project: Project[]): Project[] {
    return project
      .sort((a: Project, b: Project): number => a.order - b.order)
      .map((project: Project) => {
        project.id = formatNumber(project.order);
        return project;
      });
  }

  return { getProjects, filter };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot));
}
