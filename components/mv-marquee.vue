<template>
  <div class="marquee" :class="contentClass" v-if="slides.length > 0">
    <div class="marquee">
      <div class="marquee-content">
        <div class="marquee-item" :class="isSpaced ? 'spaced' : ' '" v-for="(item, index) in slides" :key="index">
          <img :class="isSpaced ? 'char' : ' '" :src="item" :alt="item">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'mv-marquee',
  props: {
    slides: {
      default: () => []
    },
    isSpaced: {
      default:false
    },
    contentClass: {
      default: ''
    }
  },
  data() {
    return {
      interValCount: 0,
    }
  },
  created() {
    const self = this;
    // for (let i = 0; i < 2; i++) {
    //   self.slides.forEach(item => {
    //     self.slides.push(item)
    //   })
    // }

    self.slides.forEach((item, index) => {
      self.slides.push(item)
    })

    const interval = setInterval(() => {
      self.slides.forEach((item, index) => {
        self.slides.push(item)
      })

      self.interValCount++;

      if(self.interValCount >= 3) clearInterval(interval);
    }, 100)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.marquee {
  overflow: hidden;
}

.marquee-content {
  display: flex;
  animation: scrolling 100s linear infinite;
  @media only screen and (max-width: 767px) {
      animation: scrolling 15s linear infinite;
     
    }
}

.marquee-item {
  flex: 0 0 25vw;
  margin: 0 -1.9vw;
  
  &.spaced {
    margin: 0 -8px;
  }
}

.marquee-item img {
  display: block;
  width: 100%;
  &.char {
    @media only screen and (max-width:768px) {
      width:auto;
    }

  }
  /*   padding: 0 20px; */
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translatex(-500vw);
  }
}
</style>
