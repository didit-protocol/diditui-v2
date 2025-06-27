/** @type {import('prettier').Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  // tailwindcss
  tailwindAttributes: ["className", "*ClassName"],
  tailwindFunctions: ["cn", "clsx", "twMerge", "cv"],
  printWidth: 100,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  quoteProps: "consistent",
};

export default config;
