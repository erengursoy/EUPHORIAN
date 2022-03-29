<template>
  <div class="bg-black">
    <div id="header" class="">
      <div class="container mx-auto">
        <div class="grid grid-cols-7">
          <div class="col-span-2">
            <img src="~assets/png/logoson kopya.png" alt="" />
          </div>
           
     
       <div class="block md:hidden ml-52 mt-7">
          <button
            @click="menuOpen = !menuOpen"
            class="
              flex
              items-center
              px-3
              py-2
              border
              rounded
              bg-gray-400
              text-gray-700
              border-teal-400
              hover:text-white hover:border-white
            "
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
  
          <div :class="
            !menuOpen
              ? 'opacity-0 h-0  md:opacity-100 md:h-full transform -translate-y-430 md:translate-y-0'
              : 'opacity-100 h-full pb-20'
          " class="col-span-5 flex ml-8 md:ml-0 transition-all">
            
            <div class="md:mr-20 lg:mr-28 md:ml-4 md:mb-4 lg:mb-8 self-center" >
              <div
                class="
                  text-0.8
                  md:text-1.5rem
                  lg:text-2rem
                  xl:text-5xl
                  text-white
                  MostraNuova
                "
              >
                <h1
                  class="
                    text-shadow-logo-text-shadow
                    tracking-wider
                    font-semibold
                    mb-0
                    md:mb-1
                    lg:mb-4
                    
                  "
                >
                  EUPHORIAN APES CLUB
                </h1>
              </div>
              <div class="grid md:flex">
                <a
                  @click.prevent="scrollTO('home')"
                  class="
                    text-white text-0.8
                    md:text-0.9
                    lg:text-0.99
                    mt-0.25
                    md:mt-0
                    xl:text-xl
                    font-semibold
                    lg:mr-3
                    xl:mr-10
                    MostraNuova
                    hover:text-gray-400 hover:text-shadow-menu
                    transform
                    transition-all
                  "
                  href="#home"
                  >HOME</a
                >
                <a
                  @click.prevent="scrollTO('roadmap')"
                  class="
                    text-white text-0.8
                    md:text-0.9
                   lg:text-0.99
                   mt-0.25
                    md:mt-0
                    xl:text-xl
                    font-semibold
                    lg:mr-3
                    xl:mr-10
                    MostraNuova
                    hover:text-gray-400 hover:text-shadow-menu
                    transform
                    transition-all
                  "
                  href="#roadmap"
                  >ROADMAP</a
                >
                <a
                  @click.prevent="scrollTO('learn-more')"
                  class="
                    text-white text-0.8
                    md:text-0.9
                    lg:text-0.99
                    mt-0.25
                    md:mt-0
                    xl:text-xl
                    font-semibold
                    lg:mr-3
                    xl:mr-9
                    MostraNuova
                    hover:text-gray-400 hover:text-shadow-menu
                    transform
                    transition-all
                  "
                  href="#learn-more"
                  >LEARN MORE</a
                >
                <a
                  @click.prevent="scrollTO('team')"
                  class="
                    text-white text-0.8
                   md:text-0.9
                  mt-0.25
                    md:mt-0
                   lg:text-0.99
                    xl:text-xl
                    font-semibold
                    lg:mr-3
                    xl:mr-9
                    MostraNuova
                    hover:text-gray-400 hover:text-shadow-menu
                    transform
                    transition-all
                  "
                  href="#team"
                  >TEAM</a
                >
                <a
                  @click.prevent="scrollTO('faq')"
                  class="
                    text-white text-0.8
                   md:text-0.9
                   mt-0.25
                    md:mt-0
                    lg:text-0.99
                    xl:text-xl
                    font-semibold
                    lg:mr-3
                    xl:mr-9
                    MostraNuova
                    hover:text-gray-400 hover:text-shadow-menu
                    transform
                    transition-all
                  "
                  href="#faq"
                  >FAQ</a
                >
              </div>
            </div>
            <div class="justify-self-end self-center md:mb-4 lg:mb-14 mr-3">
              <div class="flex -mr-32 mt-28 ml-16 md:ml-0 md:mr-0 md:mt-0">
                <a class="mr-1 lg:mr-3" href="">
                  <img
                    class="w-7 lg:w-10"
                    src="~assets/png/opensea.png"
                    alt=""
                  />
                </a>
                <a class="mr-1 lg:mr-3" href="">
                  <img
                    class="w-7 lg:w-10"
                    src="~assets/png/icons8-twitter-50.png"
                    alt=""
                  />
                </a>
                <a class="mr-1 lg:mr-3" href="">
                  <img
                    class="w-8 lg:w-12"
                    src="~assets/png/icons8-discord-new-50.png"
                    alt=""
                  />
                </a>
                <a class="mr-1 mt-0.1 md:mt-0.2 lg:mt-0.25 lg:mr-3" href="">
                  <img
                    class="w-6 lg:w-9"
                    src="~assets/png/instagram.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="main">
      <home-page></home-page>
      <roadmap-page></roadmap-page>

      <div class="slide-marquee slide-marquee-top">
        <!--        <img src="~/assets/images/spotlight.png" alt="spotlight" class="spotlight">-->
        <mv-marquee
          :isSpaced="true"
          :slides="charSlide"
          contentClass="slide-marquee-zeds"
        ></mv-marquee>
      </div>
      <learn-more-page></learn-more-page>

      <team-page></team-page>
      <faq-page></faq-page>
      <future-plans-page></future-plans-page>
    </div>
    <div id="footer">
      <div class="container mx-auto py-32">
        <div class="grid grid-rows-1 justify-center">
          <div class="grid grid-cols-1">
            <div class="logo-footer justify-self-center">
              <img class="w-48" src="~assets/png/logoson kopya.png" alt="" />
            </div>
            <div
              class="
                title
                text-center text-white text-shadow-learn-more-title
                MostraNuova
                font-semibold
              "
            >
              <h1 class="text-2xl md:text-3xl lg:text-4xl">
                EUPHORIAN APES CLUB
              </h1>
            </div>
            <div class="icons-footer justify-self-center mb-2 mt-3">
              <div class="flex">
                <a class="mr-1 lg:mr-3" href="">
                  <img
                    class="w-7 lg:w-9 footer-icons-shadow"
                    src="~assets/png/Logomark-Transparent White.png"
                    alt=""
                  />
                </a>
                <a class="mr-1 lg:mr-3" href="">
                  <img
                    class="w-7 lg:w-9 footer-icons-shadow"
                    src="~assets/png/icons8-twitter-50-white.png"
                    alt=""
                  />
                </a>
                <a class="mr-1 lg:mr-3" href="">
                  <img
                    class="w-8 lg:-mt-0.5 lg:w-11 footer-icons-shadow"
                    src="~assets/png/icons8-discord-new-50-white.png"
                    alt=""
                  />
                </a>
                <a class="mr-1 mt-0.1 md:mt-0.2 lg:mt-0.25 lg:mr-3" href="">
                  <img
                    class="w-6 lg:w-8 footer-icons-shadow"
                    src="~assets/png/icons8-instagram-52.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="text">
              <a href=""
                ><h1
                  class="
                    text-white text-center text-lg
                    Helvetica
                    text-shadow-footer-text-shadow
                    font-bold
                  "
                >
                  Follow us
                </h1></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      
      slickOptions: {
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        speed: 1000,
      },
      charSlide: [
        require("~/assets/png/1.png"),
        require("~/assets/png/2.png"),
        require("~/assets/png/6.png"),
        require("~/assets/png/7.png"),
        require("~/assets/png/1.png"),
        require("~/assets/png/2.png"),
      ],
    };
  },
  methods: {
    scrollTO(id) {
      if (!document.getElementById(id)) return;
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },
};
</script>
