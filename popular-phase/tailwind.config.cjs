module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
