<template>
    <StarsWrapper class="results-wrapper">
        <p class="local-header">your result is calculated</p>
        <p class="get-result">Hurry up to get it!</p>
        <p class="deadline">
            The button will be active only for
            <span id="big">{{ timer }}</span> minutes
        </p>
        <img src="../assets/lightning_3.png" id="lightning-3" alt="Lightning">
        <img src="../assets/lightning_4.png" id="lightning-4" alt="Lightning">
        <button class="call-btn" @click="showResult">Get your result !</button>
        <p v-if="btnPressed" class="response">{{ response }}</p>
    </StarsWrapper>
</template>

<script>
import StarsWrapper from '../components/StarsWrapper.vue'

export default {
    name: 'ResultView',
    components: {StarsWrapper},
    data() {
        return {
            timer: '10:00',
            timeLeft: 600,
            response: '',
            btnPressed: false
        }
    },
    mounted() {
        this.response = this.$route.query.result
        this.countdown()
    },
    methods: {
        countdown() {
            let myTimer = setInterval(() => {
                let minutes = Math.floor(this.timeLeft / 60)
                let seconds = this.timeLeft % 60
                if(seconds < 10) {
                    seconds = '0' + seconds
                }
                this.timer = minutes + ':' + seconds
                this.timeLeft--
                if(this.timeLeft < 0 || this.btnPressed) {
                    clearInterval(myTimer)
                    document.querySelector('.call-btn').disabled = true
                } else if(this.$route.query.result !== this.response) {
                    clearInterval(myTimer)
                }
            }, 1000)
        },
        showResult() {
            this.btnPressed = true
        }
    }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

$heading-distance: 5.05vh;
$height: calc(100vh - $head-height-vh - $heading-distance);
$height-992: calc(100vh - $head-height-992-vh - $heading-distance);

    .results-wrapper {
        height: $height;
        padding-top: calc($head-height-vh + $heading-distance);
        position: relative;
    }
    .local-header {
        @include text('PT Serif', 400, 15px, 16px, 0.1em);
        text-transform: uppercase;
        color: $main-text-col;
    }
    .get-result {
        @include text('PT Serif', 700, 18px, 22px, 0.1em);
        text-transform: uppercase;
        color: $indicators;
        margin: 3.87vh auto;
    }
    .deadline {
        width: 260px;
        @include text('PT Serif', 400, 14px, 17px, 0.1em);
        margin: 0 auto 6.23vh auto;
        color: $indicators;
    }
    #big {
        font-size: 32px;
        line-height: 40px;
    }
    #lightning-3 {
        position: absolute;
        left: 0;
        top: 55%;
    }
    #lightning-4 {
        position: absolute;
        right: 0;
        top: 43.3%;
    }
    .call-btn {
        position: relative;
        background: #EB1B00;
        border-radius: 10px;
        width: 274px;
        height: 64px;
        box-shadow: inset 4px 4px 5px rgba(0, 0, 0, 0.25);
        border: none;
        @include text('Roboto', 900, 30px, 31px, 0.05em);
        color: $main-text-col;
        cursor: pointer;
        &::first-letter {
            text-transform: capitalize;
        }
        &:disabled {
            opacity: .5;
            color: gray;
        }
    }
    .response {
        color: $indicators;
        margin: 0;
        padding: 17px 0;
        width: 92%;
        @include text('PT Serif', 700, 17px, 19px, normal);
        word-spacing: 5px;
        position: absolute;
        left: 4%;
        background-color: rgba(0, 0, 0, 0.35);
        
    }

    @media(min-width: 576px) and (orientation: landscape) {
        .results-wrapper {
            height: 480px;
            padding-top: calc($head-height + 30px);
        }
        .get-result {
            margin: 23px auto;
        }
        .deadline {
            margin: 0 auto 37px auto;
        }
    }
    @media(min-width: 576px) {
        #lightning-3 {
            width: 29%;
        }
        #lightning-4 {
            width: 22%;
        }
    }
    @media(min-width: 768px) {
        .results-wrapper {
            height: $height;
            padding-top: calc($head-height-vh + $heading-distance);
        }
        .get-result {
            margin: 3.87vh auto;
        }
        .deadline {
            margin: 0 auto 6.23vh auto;
        }
        #lightning-3 {
            width: 28.5%;
        }
        #lightning-4 {
            width: 18.5%;
        }
        .response {
            padding: 6.23vh 0;
            width: 82%;
            left: 9%;
        }
    }
    @media(min-width: 992px) {
        .results-wrapper {
            height: $height-992;
            padding-top: calc($head-height-992-vh + $heading-distance);
        }
        .response {
            width: 78%;
            left: 11%;
        }
    }
</style>