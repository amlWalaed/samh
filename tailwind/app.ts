import plugin from "tailwindcss/plugin"

export const appPlugin = plugin(function ({
  matchUtilities,
  theme,
  addUtilities,
  addComponents,
}) {
  addUtilities({
    ".text-truncate": {
      "@apply break-all text-start line-clamp-1": {},
    },
    ".text-truncate-2": {
      "@apply overflow-hidden text-ellipsis whitespace-nowrap": {},
    },
  })
  addComponents({
    ".page-wrapper": {
      "@apply space-y-6": {},
    },
    ".title": {
      "@apply text-4xl font-bold text-secondary-950 font-playfair-display": {},
    },
    ".inputs-row": {
      "@apply grid lg:grid-cols-2 gap-4": {},
    },
  })
},
{})
