import type { Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

import { theme } from './src/lib/config/general'

export default {
  content: ['./src/**/*.{html,md,js,svelte,ts}'],
  daisyui: { themes: theme.map(({ name }) => name) },
  plugins: [typography, daisyui],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      },
      typography: {
        DEFAULT: {
          css: {
            'ul > li:has(input[type="checkbox"])': {
              listStyle: 'none',
            },
            'ul > li:has(input[type="checkbox"]) ul li': {
              paddingLeft: 30,
            },
            'ul:has(li):has(input[type="checkbox"])': {
              padding: 0,
            },
          },
        },
      },
    },
  },
} satisfies Config
