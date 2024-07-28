/** @format */

import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/**/*.{tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            'display': ['Ubuntu', 'sans-serif'],
            'arial': ['Arial', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
    darkMode: "selector",
} satisfies Config;
