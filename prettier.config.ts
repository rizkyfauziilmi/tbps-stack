import type { Options } from "prettier";

const config: Options = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: [require("prettier-plugin-tailwindcss")],
};

export default config;
