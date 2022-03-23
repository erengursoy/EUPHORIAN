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
                '0.45': '.45rem',
                '0.5': '.5rem',
                '0.8': '.8rem',
                '45px': '45px',
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            },
            textShadow: {
                'menu': '0px 1px 20px red, 0px 1px 20px red, 0px 1px 20px red',
                'logo-text-shadow': '0px 1px 20px red, 0px 1px 20px red, 0px 1px 20px red;',
                'roadmap-title-shadow': '-1px 1px 8px #c9a814, -1px 9px 15px #c9a814, -2px -5px 12px #c9a814;',
                'learn-more-title': '0px 0px 20px red, 0px 0px 20px red, 0px 0px 20px red, 0px 0px 20px red;',
                'footer-text-shadow': '-1px 1px 8px #ffd100, -1px 9px 15px #ffd104, -2px -5px 12px #ffd100;',

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
    variants: {
        width: ["responsive", "hover", "focus"],
        position: ["responsive", "hover", "focus"],
        gridTemplateColumns: ["responsive", "hover", "focus"],
        gridColumnEnd: ["responsive", "hover", "focus"],
        gridColumnStart: ["responsive", "hover", "focus"],
    },

    plugins: [
        require('tailwindcss-textshadow')
    ],
}