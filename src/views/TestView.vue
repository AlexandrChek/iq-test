<template>
  <StarsWrapper class="test">
    <component :is="currentQuestion" @ansTransmited="saveAns"></component>
    <MyButton id="next-btn" @click="goToNext">NEXT</MyButton>
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
        let n = 0
        this.savedAnswers.forEach((ans, i) => {
          if(Object.keys(ans)[0] === Object.keys(this.selectedAnswer)[0]) {
            this.savedAnswers[i] = this.selectedAnswer
            n++
            return
          }
        })
        if(!n) {this.savedAnswers.push(this.selectedAnswer)}
      } else {this.savedAnswers.push(this.selectedAnswer)}

      if(Number(this.$route.params.id) < 11) {
        let newId = Number(this.$route.params.id) + 1
        this.$router.push(`/test/${newId}`)
      } else {
        this.$router.push({
          path: '/processing', 
          query: {answers: JSON.stringify(this.savedAnswers)}
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/extends';

$heading-distance: 2.87vh;
$height: calc(100vh - $head-height-vh - $heading-distance);
$height-992: calc(100vh - $head-height-992-vh - $heading-distance);

  .test {
    height: $height;
    padding-top: calc($head-height-vh + $heading-distance);
    position: relative;
    z-index: 0;
    @media(min-width: 576px) and (orientation: landscape) {
      height: 531px;
      padding-top: calc($head-height + 17px);
    }
    @media(min-width: 768px) {
      height: $height;
      padding-top: calc($head-height-vh + $heading-distance);
    }
    @media(min-width: 992px) {
      height: $height-992;
      padding-top: calc($head-height-992-vh + $heading-distance);
    }
  }
  #next-btn {
    position: absolute;
    left: calc((100% - 189px) / 2);
    bottom: 8.58vh;
    &:disabled {
      background: #DADADA;
      color: #8E8E8E;
    }
    &:enabled {
      @extend %yellow-button;
    }
  }
</style>
