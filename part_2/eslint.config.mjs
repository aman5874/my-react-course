import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]}*/


export default [
    js.configs.recommended, // eslint:recommended
    {
       ...reactPlugin.configs.flat.recommended,
         settings: {
              react: {
                version: "detect"
              }
         }
    },
    reactPlugin.configs.flat["jsx-runtime"],
    {
      files: ["**/*.js", "**/*.jsx"],
      languageOptions: {   
        globals: {...globals.node, ...globals.browser},
        parserOptions:{
            ecmaVersion: 2021,
            sourceType: "module",
            ecmaFeatures: {
                jsx: true
            }
        }
     },
     rules: {
        "react/no-unescape-entities": "off",
        "react/prop-types": "off",
        
     }
    },
    prettier
];
