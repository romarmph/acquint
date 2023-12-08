/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js}",
  "./index.html",
  "./about.html",
  "./contact.html",
  "./products.html",
  "./node_modules/flowbite/**/*.js",
];
export const theme = {
  extend: {},
};
export const plugins = [require("flowbite/plugin")];
export const darkMode = "class";
