import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './.{js,ts,jsx,tsx}',
        './node_mo,dules/@nextui-org/theme/dist//*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [nextui()],
};
