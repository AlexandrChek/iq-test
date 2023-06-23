<template>
  <StarsWrapper class="home">
    <p class="white-start">TAKE AN ACCURATE AND QUICK</p>
    <p class="yellow-end">IQ TEST</p>
    <BigBrain/>
    <MyButton class="yellow-btn" @click="startTest">START TEST</MyButton>
    <p class="text-dn">
      You will receive recomendations for the development of your intellect and for improving financial condition and personal life
    </p>
    <div class="details">
      <RoundArrow/>
      <p id="legend">more</p>
    </div>
  </StarsWrapper>
</template>

<script>
import StarsWrapper from '../components/StarsWrapper.vue'
import BigBrain from '../components/BigBrain.vue'
import MyButton from '../components/MyButton.vue'
import RoundArrow from '../components/RoundArrow.vue'

export default {
  name: 'StartView',
  components: {
    StarsWrapper,
    BigBrain,
    MyButton,
    RoundArrow
  },
  mounted() {
    this.scrollToLegend()
  },
  updated() {
    this.scrollToLegend()
  },
  methods: {
    scrollToLegend() {
      if(this.$route.hash === '#legend') {
        const legend = document.querySelector('#legend')
        legend.scrollIntoView()
      }
    },
    startTest() {
      this.$router.push('/test/1')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/extends';
@import '../scss/mixins';

  .home {
    padding: calc($head-height + 27px) 0 12px 0;
  }
  .white-start {
    margin: 0 0 26px 0;
    @include text('PT Serif', 400, 18px, 27px, 0.05em);
    text-transform: uppercase;
    color: $main-text-col;
  }
  .yellow-end {
    margin: 0 0 50px 0;
    @include text('Yeseva One', 400, 30px, 35px, 0.03em);
    text-transform: uppercase;
    color: $active-col;
  }
  .yellow-btn {
    margin: 16px 0 22px 0;
    @extend %yellow-button;
  }
  .text-dn {
    width: 286px;
    margin: 0 auto;
    @include text('PT Serif', 700, 15px, 19px, 0.05em);
    color: $main-text-col;
  }
  .details {
    margin-top: 14px;
  }
  #legend {
    @include text('PT Serif', 400, 10px, 13px, 0.05em);
    color: $active-col;
    margin: 3px 0;
  }

  @media(min-width: 768px) {
    .yellow-btn {
      margin: 42px 0;
    }
    #legend {
      @include text('PT Serif', 400, 11px, 13px, 0.05em);
    }
    .home {
      padding: calc($head-height-992 + 50px) 0 70px 0;
    }
  }
</style>
