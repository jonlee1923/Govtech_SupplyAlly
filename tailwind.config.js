/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                priDefault: "rgba(48, 83, 103, 1)",
                priHoverFocus: "rgba(61, 104, 129, 1)",
                priOnPress: "rgba(33, 55, 66, 1)",
                priLoading: "rgba(48, 83, 103, 1)",
                priDisabled: "rgba(202, 208, 214, 1)",
                secDefault: "rgba(255, 255, 255, 1)",
                secHoverFocus: "rgba(245, 251, 255, 1)",
                secOnPress: "rgba(227, 242, 251, 1)",
                secLoading: "rgba(255, 255, 255, 1)",
                secDisabled: "rgba(161, 168, 174, 1)",
                allyWordColour: "rgba(14, 128, 134, 1)",
                navbar: "rgba(65, 70, 75, 1)"

            },
        },
        fontFamily: {
            ibm: ["IBM Plex Sans", "cursive"],
        },
        screens: {
            sm: "500px",   
        },
    },
    plugins: [],
};
