/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-0": "#fff",
        "secondary-500": "#1a202c",
        gray: {
          "100": "rgba(19, 19, 19, 0.6)",
          "200": "rgba(19, 19, 19, 0.16)",
        },
        "primary-500": "#3563e9",
        whitesmoke: "#f6f7f9",
        "secondary-300": "#90a3bf",
        dodgerblue: "#5c8aff",
        lightsteelblue: "rgba(195, 212, 233, 0.4)",
        cornflowerblue: {
          "100": "#3b8ce6",
          "200": "rgba(92, 175, 252, 0.3)",
        },
        "information-500": "#54a6ff",
        royalblue: "rgba(53, 99, 233, 0.3)",
        slategray: "#596780",
      },
      spacing: {},
      fontFamily: {
        "semibold-type16": "'Plus Jakarta Sans'",
        "heading-bold-32": "'SF Pro Display'",
      },
      borderRadius: {
        "3xs": "10px",
        "51xl": "70px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      sm: "14px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
