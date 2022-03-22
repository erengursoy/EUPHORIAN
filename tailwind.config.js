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

            backgroundImage: {

                'story-background-one': "url('~/assets/images/WhatsApp Image 2022-02-18 at 23.55.31.jpeg')",
                'story-background-two': "url('~/assets/images/WhatsApp Image 2022-03-03 at 23.36.21.jpeg')",
                'story-background-three': "url('~/assets/images/WhatsApp Image 2022-03-03 at 23.35.56.jpeg')",
                'main-bg': "linear-gradient(#d2a4ef,#955555,#4c2f2a,#30657c)",
                'home-bg': "linear-gradient(#363c5e,#955555,#4c2a49)",
                'home-card-img': "url('~/assets/images/background-9.png')",
                'about-card-img': "url('~/assets/images/background-10.png')"

            },
            backdropBrightness: {
                490: '4.9',

            },

            borderRadius: {
                '5xl': "90px",
                '4xl': "40px"
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
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
            rotate: {
                '120': '120deg',
                '70': '70deg',
                '60': '60deg'
            },
            zIndex: {
                '1': '1',
            }



        },
    },
    variants: {
        width: ["responsive", "hover", "focus"],
        position: ["responsive", "hover", "focus"],
        gridTemplateColumns: ["responsive", "hover", "focus"],
        gridColumnEnd: ["responsive", "hover", "focus"],
        gridColumnStart: ["responsive", "hover", "focus"],
    },
    plugins: [],
}