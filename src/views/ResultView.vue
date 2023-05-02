<template>
    <StarsWrapper class="results-wrapper">
        <p class="local-header big-letters">ВАШ РЕЗУЛЬТАТ РАССЧИТАН:</p>
        <p class="your-intelligence">
            <span id="underline">Вы относитесь к 3%</span> респондентов, чей 
            уровень интеллекта более чем на 
            15 пунктов отличается от среднего в 
            большую или меньшую сторону!
        </p>
        <p class="get-result big-letters">
            Скорее получите свой 
            результат!
        </p>
        <p class="personal-data">
            В целях защиты персональных 
            данных результат теста, их 
            подробная интерпретация и 
            рекомендации доступны в виде 
            голосового сообщения по звонку с 
            вашего мобильного телефона
        </p>
        <p class="deadline" v-if="!btnPressed">
            Звоните скорее, запись доступна всего
            <span id="big">{{ timer }}</span> минут
        </p>
        <img src="../assets/lightning_3.png" id="lightning-3" alt="Lightning">
        <img src="../assets/lightning_4.png" id="lightning-4" alt="Lightning">
        <button class="call-btn" @click="getResult">
            <WhitePhone/>
            <p class="listen-to-result">
                Позвонить
                и прослушать результат
            </p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        </button>
        <p v-for="item in response" :key="item" class="response">
            {{ item.key }}: {{ item.value }}<br/>
        </p>
    </StarsWrapper>
</template>

<script>
import StarsWrapper from '../components/StarsWrapper.vue'
import WhitePhone from '../components/WhitePhone.vue'

export default {
    name: 'ResultView',
    components: {
        StarsWrapper,
        WhitePhone
    },
    data() {
        return {
            timer: '10:00',
            timeLeft: 10,
            btnPressed: false,
            response: []
        }
    },
    mounted() {
        this.$store.state.iqTestHeader = false
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
                if(this.timeLeft < 0) {
                    clearInterval(myTimer)
                }
            }, 1000)
        },
        getResult() {
            this.btnPressed = true
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

<style scoped>
    .results-wrapper {
        height: 100vh;
        padding-top: 11.4vh;
        position: relative;
    }
    .local-header {
        font-size: 15px;
        line-height: 16px;
        color: #FFFFFF;
        margin-bottom: 2.02vh;
    }
    .big-letters {
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }
    .your-intelligence {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
        white-space: pre-line;
        width: 273px;
        margin: 0 auto 3.17vh auto;
    }
    .your-intelligence::first-letter {
        text-transform: capitalize;
    }
    #underline {
        text-decoration-line: underline;
    }
    .get-result {
        font-size: 18px;
        line-height: 22px;
        color: #3BDE7C;
        width: 273px;
        white-space: pre-line;
        margin: 0 auto 2.02vh auto;
    }
    .personal-data {
        background: #1C2741;
        border-radius: 6px;
        margin: 0 auto 1.7vh auto;
        padding: 15px 13px 11px 13px;
        width: 240px;
        white-space: pre-line;
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 8px;
        line-height: 14px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .deadline {
        width: 250px;
        margin: 0 auto 1.01vh auto;
        font-weight: 400;
        font-size: 11px;
        line-height: 25px;
        letter-spacing: 0.1em;
        color: #3BDE7C;
        white-space: pre-line;
    }
    #big {
        font-size: 20px;
    }
    #lightning-3 {
        position: absolute;
        left: 0;
        top: 46%;
    }
    #lightning-4 {
        position: absolute;
        right: 0;
        top: 50%;
    }
    .call-btn {
        position: relative;
        z-index: 2;
        background: #EB1B00;
        border-radius: 5px;
        width: 275px;
        height: 92px;
        display: inline-flex;
        padding-left: 15px;
        margin-bottom: .5vh;
        cursor: pointer;
        border: none;
    }
    .call-btn:disabled {
        opacity: .5;
    }
    .listen-to-result {
        margin: auto 0;
        width: 205px;
        white-space: pre-line;
        text-align: start;
        font-family: 'Roboto';
        font-weight: 900;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }
    .listen-to-result::first-letter {
        text-transform: capitalize;
    }
    .response {
        color: #3BDE7C;
        margin: 0;
        font-weight: 400;
        font-size: 14px;
        word-spacing: 7px;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        .results-wrapper {
            height: 693px;
            padding-top: 79px;
        }
        .local-header {
            margin-bottom: 14px;
        }
        .your-intelligence {
            margin: 0 auto 22px auto;
        }
        .get-result {
            margin: 0 auto 14px auto;
        }
        .personal-data {
            margin: 0 auto 11.7px auto;
        }
        .deadline {
            margin: 0 auto 7px auto;
        }
    }
    @media(min-width: 576px) {
        #lightning-3 {
            width: 22%;
        }
        #lightning-4 {
            width: 17%;
        }
    }
    @media(min-width: 768px) {
        .results-wrapper {
            height: 100vh;
            padding-top: 11.4vh;
        }
        .local-header {
            margin-bottom: 2.02vh;
        }
        .your-intelligence {
            margin: 0 auto 3.17vh auto;
        }
        .get-result {
            margin: 0 auto 2.02vh auto;
        }
        .personal-data {
            margin: 0 auto 1.7vh auto;
        }
        .deadline {
            margin: 0 auto 1.01vh auto;
        } 
    }
</style>