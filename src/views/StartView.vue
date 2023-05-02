<template>
  <StarsWrapper class="home">
    <p class="white-start">Пройдите точный и быстрый</p>
    <p class="yellow-end">ТЕСТ НА <br/>ОПРЕДЕЛЕНИЕ <br/>IQ</p>
    <BigBrain/>
    <MyButton class="yellow-btn" @click="startTest">ПРОЙТИ ТЕСТ</MyButton>
    <StartViewTextDn class="yellow-text-dn">И получите рекомендации <br/>по развитию своего интеллекта</StartViewTextDn>
    <StartViewTextDn class="white-text-dn">и улучшению финансового <br/>благосостояния и личной жизни</StartViewTextDn>
    <div class="details">
      <RoundArrow/>
      <p id="legend">Подробнее</p>
    </div>
  </StarsWrapper>
</template>

<script>
import StarsWrapper from '../components/StarsWrapper.vue'
import BigBrain from '../components/BigBrain.vue'
import MyButton from '../components/MyButton.vue'
import StartViewTextDn from '../components/StartViewTextDn.vue'
import RoundArrow from '../components/RoundArrow.vue'

export default {
  name: 'StartView',
  components: {
    StarsWrapper,
    BigBrain,
    MyButton,
    StartViewTextDn,
    RoundArrow
  },
  updated() {
    if(this.$route.hash === '#legend') {
      const legend = document.querySelector('#legend')
      legend.scrollIntoView()
    }
  },
  methods: {
    startTest() {
      this.$store.commit('showTestHead')
      this.$router.push('/test/1')
    }
  }
}
</script>

<style scoped>
  .home {
    height: 75.32vh;
    padding-top: 10.54vh;
  }
  .white-start {
    margin: 0 0 3.17vh 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
  }
  .yellow-end {
    margin: 0;
    font-family: 'Yeseva One';
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #FFC700;
  }
  .yellow-btn {
    margin-bottom: 3.17vh;
    background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
  }
  .yellow-text-dn {
    color: #FFC700;
  }
  .white-text-dn {
    color: #FFFFFF;
  }
  .details {
    margin-top: 2.8vh;
  }
  #legend {
    font-weight: 400;
    font-size: 8px;
    line-height: 11px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin: 0.43vh 0;
  }

  @media(min-width: 576px) and (orientation: landscape) {
    .home {
      height: 500px;
      padding-top: 60px;
    }
    .white-start {
      margin: 0 0 11px 0;
    }
    .yellow-btn {
      margin-bottom: 24px;
    }
    .details {
      margin-top: 24px;
    }
    #legend {
      margin: 3px 0;
    }
  }
  @media(min-width: 768px) {
    .home {
      height: 75.32vh;
      padding-top: 10.54vh;
    }
    .white-start {
      margin: 0 0 3.17vh 0;
    }
    .yellow-btn {
      margin-bottom: 3.17vh;
    }
    .details {
      margin-top: 2.8vh;
    }
    #legend {
      margin: 0.43vh 0;
    }
  }
  @media(min-width: 992px) {
    #legend {
      font-size: 11px;
    }
  }
  @media(min-width: 1400px) {
    .home {
      height: 76.3vh;
      padding-top: 11.5vh;
    }
  }

  @media(max-height: 690px) and (max-width: 575px) {
    .white-start {
      font-size: 14.4px;
      line-height: 19.2px;
      margin: 0 0 3vh 0;
    }
    .yellow-end {
      font-size: 24px;
      line-height: 28px;
    }
    .details {
    margin-top: 1.5vh;
  }
    .home {
      padding-top: 9.7vh;
    }
  }
</style>
