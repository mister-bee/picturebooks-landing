// postcss.config.mjs

import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [postcssImport(), tailwindcss(), autoprefixer()],
};

// /** @type {import('postcss-load-config').Config} */
// const config = {
//   plugins: {
//     tailwindcss: {},
//   },
// };

// export default config;

// // postcss.config.js
// module.exports = {
//   plugins: [
//     'postcss-import',
//     'tailwindcss',
//     'autoprefixer',
//   ],
// };
