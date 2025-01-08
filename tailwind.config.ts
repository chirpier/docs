import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.js",
    "./node_modules/nextra/dist/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/nextra-theme-docs/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Code", "monospace"], // or 'Roboto Mono'
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1.25rem" }], // 12px
        sm: ["13px", { lineHeight: "1.5rem" }], // 14px
        base: ["15px", { lineHeight: "1.85rem" }], // 16px (Default base size)
        lg: ["18px", { lineHeight: "2rem" }], // 18px
        xl: ["20px", { lineHeight: "2rem" }], // 20px
        "2xl": ["22px", { lineHeight: "2.25rem" }], // 24px
        "3xl": ["28px", { lineHeight: "2.5rem" }], // 30px
        "4xl": ["36px", { lineHeight: "2.75rem" }], // 36px
        "5xl": ["48px", { lineHeight: "3.5rem" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "4.5rem" }], // 60px
        "7xl": ["4.5rem", { lineHeight: "5.25rem" }], // 72px
        "tremor-label": ["0.75rem", { lineHeight: "1rem" }],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "100",
        light: "200",
        normal: "300",
        medium: "400",
        semibold: "500",
        bold: "600",
        extrabold: "700",
        "extra-bold": "700",
        black: "800",
      },
      colors: {
        black: "#211C1D",
        blue: {
          50: "#FAFBFDB3", // Extremely light brand color, between #FCFDFE and #F8F9FA
          100: "#FAFBFD", // Lightest blue shade
          200: "#EBF2F7", // Light blue
          300: "#C5D4E1", // Custom 300 value
          400: "#88A9C3", // Intermediate shade
          500: "#4E6884", // Custom 500 value
          600: "#2B4257", // Darker blue shade
          700: "#192732", // Darker blue
          800: "#111A21", // Darkest shade
          900: "#0A0E14", // Almost black
        },
        gray: {
          100: "#F3F4F5", // Slightly darker very light gray
          200: "#E6E8E9", // Slightly darker light gray
          300: "#C8D0D2", // Slightly darker gray
          400: "#8E9DA0", // Darker medium gray
          500: "rgb(104, 121, 124)",
          600: "#5E6F71", // Darker medium gray (unchanged)
          700: "#556668", // Slightly darker medium gray
          800: "#122620", // Custom - Dark gray (unchanged)
          900: "#151213", // Almost black (unchanged)
        },
        yellow: {
          50: "#FDF8E8", // Very light yellow
          100: "#FBF1D1", // Light yellow
          200: "#F7E7B4", // Lighter yellow
          300: "#F4DB96", // Custom - Light golden yellow
          400: "#F1D17E", // Slightly darker golden yellow
          500: "#F1E2AD", // Custom - Mid yellow (unchanged)
          600: "#E0CA87", // Darker yellow
          700: "#BFA665", // Even darker yellow
          800: "#9F8350", // Darker brownish yellow
          900: "#7F643D", // Darkest yellowish-brown
        },
        // light mode
        tremor: {
          brand: {
            faint: "#C5D4E1", // Light grayish-blue brand
            muted: "#C5D4E1", // Lighter brand color based on #88A9C3
            subtle: "#88A9C3", // Intermediate brand color
            DEFAULT: "#4E6884", // Base brand color (primary)
            emphasis: "#2B4257", // Slightly darker
            inverted: "#ffffff",
          },
        },
        boxShadow: {
          // light
          "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          "tremor-card":
            "0 1px 2px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
          "tremor-dropdown":
            "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
        },
        borderRadius: {
          "tremor-small": "0.375rem",
          "tremor-default": "0.5rem",
          "tremor-full": "9999px",
        },
        keyframes: {
          hide: {
            from: { opacity: "1" },
            to: { opacity: "0" },
          },
          slideDownAndFade: {
            from: { opacity: "0", transform: "translateY(-6px)" },
            to: { opacity: "1", transform: "translateY(0)" },
          },
          slideLeftAndFade: {
            from: { opacity: "0", transform: "translateX(6px)" },
            to: { opacity: "1", transform: "translateX(0)" },
          },
          slideUpAndFade: {
            from: { opacity: "0", transform: "translateY(6px)" },
            to: { opacity: "1", transform: "translateY(0)" },
          },
          slideRightAndFade: {
            from: { opacity: "0", transform: "translateX(-6px)" },
            to: { opacity: "1", transform: "translateX(0)" },
          },
          "bounce-opacity": {
            "0%, 100%": { transform: "translateY(0)", opacity: "0.2" },
            "50%": { transform: "translateY(-10px)", opacity: "1" },
          },
          "bounce-opacity-reverse": {
            "0%, 100%": { transform: "translateY(0)", opacity: "1" },
            "50%": { transform: "translateY(-10px)", opacity: "0.2" },
          },
          "animate-ping": {
            "0%": { transform: "scale(1)", opacity: "0.5" },
            "75%, 100%": { transform: "scale(4)", opacity: "0" },
          },
          drawerSlideLeftAndFade: {
            from: { opacity: "0", transform: "translateX(100%)" },
            to: { opacity: "1", transform: "translateX(0)" },
          },
          drawerSlideRightAndFade: {
            from: { opacity: "1", transform: "translateX(0)" },
            to: { opacity: "0", transform: "translateX(100%)" },
          },
          fadeIn: {
            "0%": { opacity: "0", transform: "translateY(50px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
          fadeSlideIn: {
            "0%": {
              opacity: "0",
              transform: "translateY(4px) translateX(var(--tw-translate-x))",
            },
            "100%": {
              opacity: "1",
              transform: "translateY(0) translateX(0)",
            },
          },
        },
        animation: {
          "bounce-opacity-1": "bounce-opacity 1s ease-in-out infinite",
          "bounce-opacity-2": "bounce-opacity 1s ease-in-out infinite 0.2s",
          "bounce-opacity-3": "bounce-opacity 1s ease-in-out infinite 0.4s",
          "bounce-opacity-4": "bounce-opacity-reverse 1s ease-in-out infinite",
          hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          slideDownAndFade:
            "slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          slideLeftAndFade:
            "slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          slideRightAndFade:
            "slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          // Drawer
          drawerSlideLeftAndFade:
            "drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          drawerSlideRightAndFade: "drawerSlideRightAndFade 150ms ease-in",
          fadeIn: "fadeIn 0.75s ease-in", // You can adjust the duration and easing
        },
      },
    },
  },
  plugins: [],
};

export default config;
