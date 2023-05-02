<template>
  <StarsWrapper class="test">
    <component :is="currentQuestion" @ansTransmited="saveAns"></component>
    <MyButton id="next-btn" @click="goToNext">ДАЛЕЕ</MyButton>
  </StarsWrapper>
</template>

<script>
import StarsWrapper from '../components/StarsWrapper.vue'
import MyButton from '../components/MyButton.vue'

export default {
  name: 'TestView',
  data() {
    return {
      currentQuestion: null,
      selectedAnswer: null,
      savedAnswers: []
    }
  },
  components: {
    StarsWrapper,
    MyButton
  },
  mounted() {
    this.loadQuestion()
  },
  updated() {
    this.loadQuestion()
  },
  methods: {
    loadQuestion() {
      import(`./questions/Qst${this.$route.params.id}.vue`)
      .then(component => this.currentQuestion = component.default)
      document.querySelector('#next-btn').disabled = true
    },
    saveAns(ans) {
      this.selectedAnswer = ans
      document.querySelector('#next-btn').disabled = false
    },
    goToNext() {
      if(this.savedAnswers.length) {
        this.savedAnswers.forEach((ans, i) => {
          if(Object.keys(ans)[0] === this.selectedAnswer) {
            this.savedAnswers[i] = this.selectedAnswer
            return
          }
        })
      }

      this.savedAnswers.push(this.selectedAnswer)

      if(Number(this.$route.params.id) < 11) {
        let newId = Number(this.$route.params.id) + 1
        this.$router.push(`/test/${newId}`)
      } else {
        this.$router.push('/processing')
      }
    }
  }
}
</script>

<style scoped>
  .test {
    height: 75.32vh;
    padding-top: 9.09vh;
    position: relative;
    z-index: 0;
  }
  #next-btn {
    position: absolute;
    left: calc((100% - 189px) / 2);
    bottom: 3.32vh;
  }
  #next-btn:disabled {
    background: #DADADA;
    box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
    color: #8E8E8E;
  }
  #next-btn:enabled {
    background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
  }

  @media(min-width: 576px) and (orientation: landscape) {
    .test {
      height: 500px;
      padding-top: 60px;
    }
  }
  @media(min-width: 768px) {
    .test {
      height: 75.32vh;
      padding-top: 9.09vh;
    }
  }
  @media(min-width: 1400px) {
    .test {
      height: 76.3vh;
      padding-top: 11.5vh;
    }
  }
</style>
