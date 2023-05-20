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
        <button class="call-btn" @click="getResult">Get your result !</button>
        <p v-for="item in response" :key="item" v-if="response.length" class="response">
            {{ item.key }}: {{ item.value }}<br/>
        </p>
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
            response: []
        }
    },
    mounted() {
        this.countdown()
    },
    watch: {
        timeLeft(val) {
            if(val < 0) {
                document.querySelector('.call-btn').disabled = true
            }
        }
    },
    beforeRouteLeave(to, from, next) {
        clearInterval(this.myTimer)
        next()
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
                if(this.timeLeft < 0 || this.response.length) {
                    clearInterval(myTimer)
                }
            }, 1000)
        },
        getResult() {
            fetch('https://swapi.dev/api/people/1/')
            .then(response => response.json())
            .then(result => {
                Object.entries(result).forEach(([key, value]) => {
                    if(value.length) {
                        let param = {}
                        if(typeof(value) == "object") {
                            let valueStr = value.join(', ')
                            param = {"key": key, "value": valueStr}
                            this.response.push(param)
                        } else {
                            param = {"key": key, "value": value}
                            this.response.push(param)
                        }
                    }
                })
                const wrapper = document.querySelector('.results-wrapper')
                wrapper.style.height = 'auto'
            })
            document.querySelector('.call-btn').disabled = true
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
        z-index: 2;
        background: #EB1B00;
        border-radius: 10px;
        width: 274px;
        height: 10.77vh;
        box-shadow: inset 4px 4px 5px rgba(0, 0, 0, 0.25);
        border: none;
        margin-bottom: 10px;
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
        @include text('PT Serif', 400, 15px, 17px, normal);
        word-spacing: 7px;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        .results-wrapper {
            height: 518px;
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
    }
    @media(min-width: 992px) {
        .results-wrapper {
            height: $height-992;
            padding-top: calc($head-height-992-vh + $heading-distance);
        }
    }
</style>