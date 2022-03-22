module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {

        extend: {
            boxShadow: {

                'mint-btn': "1px 3px 0px 0px #b52121, 0px 0px 14px 12px yellow",
                'roadmap-stick-shadow': " 0px 0px 13px 13px #755900",

            },
            fontSize: {
                '0.5': '.5rem',
                '45px': '45px',
            },


            backdropBrightness: {
                490: '4.9',

            },

            borderRadius: {
                '5xl': "90px",
                '4xl': "40px"
            },

            spacing: {
                '0.1': '1px',
                '0.2': '2px',
                '0.25': '4px',
                '1': '8px',
                '2': '12px',
                '3': '16px',
                '4': '24px',
                '430': '430px',
                '700': '700px',
            },
            colors: {
                'roadmap-stick': '#fbfbac',
                'team-text': '#a80000',
            },




        },
    },

    plugins: [],
}