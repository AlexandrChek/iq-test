<template>
    <div id="wrapper">
        <p>
            Также по результатам теста 
            <br/><span>вы получите</span> подробные 
            <br/><span>советы</span> по определению наиболее 
            <br/>перспективной <span>для вашего 
            <br/>типа</span><span id="low"> интеллекта</span><span> сферы 
            <br/>деятельности,</span> 
            <br/>которая принесет вам скорейший 
            <br/>финансовый результат.
        </p>
        <div id="pic-wrapper">
            <img src="../assets/brain-zones.png" alt="Brain">
        </div>
        <MyButton class="yellow-btn" @click="startTest">ПРОЙТИ ТЕСТ</MyButton>
    </div>
</template>

<script>
import MyButton from './MyButton.vue'

export default {
    name: 'WhatYouGet',
    components: {MyButton},
    methods: {
        startTest() {
            this.$store.commit('showTestHead')
            this.$router.push('/test/1')
        }
    }
}
</script>

<style scoped>
    #wrapper {
        background-color: white;
        padding-top: 5.48vh;
    }
    p {
        margin: 0 auto;
        width: 298px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #272727;
        text-align: start;
    }
    span {
        text-transform: uppercase;
        font-weight: bold;
    }
    #low {
        text-transform: none;
    }
    #pic-wrapper {
        margin-top: 5.48vh;
    }
    .yellow-btn {
        margin-bottom: 5.77vh;
        background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
    }

    @media(min-width: 992px) {
        #wrapper {
            width: 70%;
            margin: 0 auto;
        }
    }
    @media(min-width: 1400px) {
        #wrapper {
            width: 60%;
        }
    }
</style>