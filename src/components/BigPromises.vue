<template>
    <StarsWrapper id="main-wrapper">
        <div id="fixed-box">
            <p id="promise-1">
                Прохождение теста займет у 
                вас не более<span class="yellow-text"> 12 минут</span>, а его 
                результаты вы сможете 
                <span class="yellow-text">использовать всю жизнь.</span>
            </p>
        </div>
        <p id="promise-2">
            Профессиональная 
            интерпретация и детально 
            <span class="bold-text">проработанные 
            рекомендации</span> позволят вам 
            качественно<span class="bold-text"> изменить все 
            аспекты своей жизни:</span> от 
            финансового до любовного.
        </p>
        <img src="../assets/lightning.png" id="lightning-1" alt="Lightning">
        <img src="../assets/lightning_2.png" id="lightning-2" alt="Lightning">
        <MyButton class="transparent-btn" @click="startTest">ПРОЙТИ ТЕСТ</MyButton>
        <p id="copyright">&#169; 2019</p>
    </StarsWrapper>
</template>

<script>
import StarsWrapper from './StarsWrapper.vue'
import MyButton from './MyButton.vue'

export default {
    name: 'BigPromises',
    components: {
        MyButton,
        StarsWrapper
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
    #main-wrapper {
        height: 76.62vh;
        padding-top: 7.79vh;
        position: relative;
    }
    #fixed-box {
        width: 303px;
        margin: 0 auto;
    }
    #promise-1 {
        font-family: 'Merriweather';
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        text-align: start;
        width: 262px;
        white-space: pre-line;
    }
    #promise-2 {
        font-family: 'Merriweather';
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: 0.05em;
        color: #181818;
        background: rgba(243, 243, 242, 0.8);
        border-radius: 20px;
        text-align: start;
        width: 274px;
        white-space: pre-line;
        margin: 3.9vh auto;
        padding: 4.18vh 15px 4.47vh 14px;
    }
    .yellow-text {
        color: #FFC700;
    }
    .bold-text {
        font-weight: bold;
    }
    #lightning-1 {
        position: absolute;
        top: 12%;
        left: calc(100% - 123px);
    }
    #lightning-2 {
        position: absolute;
        left: 0;
        top: 50%;
    }
    .transparent-btn {
        box-sizing: border-box;
        border: 1px solid #FFFFFF;
        background-color: rgba(0, 0, 0, 0);
        color: #FFFFFF;
        margin-bottom: 11.8vh;
    }
    #copyright {
        margin: 0;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 10px;
        letter-spacing: 0.05em;
        color: rgba(255, 255, 255, 0.5);
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #main-wrapper {
            height: 500px;
        }
        #promise-2 {
            margin: 27px auto;
        }
        .transparent-btn {
            margin-bottom: 57px;
        }
    }
    @media(min-width: 576px) {
        #lightning-1 {
            width: 25%;
            left: 75%;
        }
        #lightning-2 {
            width: 22%;
        }
    }
    @media(min-width: 768px) {
        #main-wrapper {
            height: 70vh;
        }
        #promise-2 {
            margin: 3.9vh auto;
        }
        #lightning-1 {
            width: 19%;
            left: 81%;
        }
        #lightning-2 {
            width: 19%;
        }
        .transparent-btn {
            margin-bottom: 11.8vh;
        }
    }

    @media(max-height: 690px) and (max-width: 575px) {
        .transparent-btn {
            margin-bottom: 6vh;
        }
    }
</style>