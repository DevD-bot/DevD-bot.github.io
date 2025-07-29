module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/no-unescaped-entities": "off"
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
  settings: {
    tailwindcss: {
      // Configuration par défaut, vous pouvez personnaliser selon vos besoins
      callees: ["classnames", "clsx", "ctl"],
      config: "tailwind.config.js",
      removeDuplicates: true,
      skipClassAttribute: false,
      whitelist: [],
      // Si vous utilisez des composants Shadcn, vous pourriez vouloir ajouter leurs classes à la whitelist
    },
  },
};