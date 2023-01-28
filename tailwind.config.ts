import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  darkMode: "class",
  content: ["app.vue", "components/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#effaff",
          "100": "#dff4ff",
          "200": "#b8ebff",
          "300": "#78ddff",
          "400": "#18c5ff",
          "500": "#06b5f1",
          "600": "#0092ce",
          "700": "#0074a7",
          "800": "#02628a",
          "900": "#085172",
        },
      },
    },
  },
};
