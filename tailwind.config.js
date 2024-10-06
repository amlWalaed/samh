const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          "primary-50": "hsl(var(--primary-50))",
          "primary-100": "hsl(var(--primary-100))",
          "primary-200": "hsl(var(--primary-200))",
          "primary-300": "hsl(var(--primary-300))",
          "primary-400": "hsl(var(--primary-400))",
          "primary-500": "hsl(var(--primary-500))",
          "primary-600": "hsl(var(--primary-600))",
          "primary-700": "hsl(var(--primary-700))",
          "primary-800": "hsl(var(--primary-800))",
          "primary-900": "hsl(var(--primary-900))",
          "primary-950": "hsl(var(--primary-950))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          "secondary-50": "hsl(var(--secondary-50))",
          "secondary-100": "hsl(var(--secondary-100))",
          "secondary-200": "hsl(var(--secondary-200))",
          "secondary-300": "hsl(var(--secondary-300))",
          "secondary-400": "hsl(var(--secondary-400))",
          "secondary-500": "hsl(var(--secondary-500))",
          "secondary-600": "hsl(var(--secondary-600))",
          "secondary-700": "hsl(var(--secondary-700))",
          "secondary-800": "hsl(var(--secondary-800))",
          "secondary-900": "hsl(var(--secondary-900))",
          "secondary-950": "hsl(var(--secondary-950))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
}
