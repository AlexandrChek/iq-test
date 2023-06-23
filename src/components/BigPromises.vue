<template>
    <StarsWrapper id="main-wrapper">
        <p id="promise-1">
            The test will take you no more 
            than<span class="yellow-text"> 12 minutes</span>, and you can 
            use it`s results <span class="yellow-text">for all your life.</span>
        </p>
        <img src="../assets/lightning.png" id="lightning-1" alt="Lightning">
        <img src="../assets/lightning_2.png" id="lightning-2" alt="Lightning">
        <p id="promise-2">
            Professional interpretation and 
            detailed <span class="bold-text">recommendations</span> will 
            allow you to<span class="bold-text"> change the quality 
            of your life in all its aspects:</span> 
            from financial to love.
        </p>
        <MyButton class="transparent-btn" @click="startTest">START TEST</MyButton>
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

<style scoped lang="scss">
@import '../scss/mixins';
@import '../scss/variables';

    #main-wrapper {
        padding-bottom: 13px;
        position: relative;
        @media(min-width: 1400px) {
            padding-bottom: 63px;
        }
    }
    #promise-1 {
        @include text('Merriweather', 400, 15px, 20px, 0.05em);
        color: $main-text-col;
        text-align: start;
        width: 262px;
        margin: 0;
        white-space: pre-line;
        position: absolute;
        left: calc((100% - 298px) / 2);
        top: 54px;
    }
    #promise-2 {
        @include text('Merriweather', 400, 16px, 23px, 0.05em);
        color: $black-back;
        background: rgba(243, 243, 242, 0.8);
        border-radius: 20px;
        text-align: start;
        width: 274px;
        white-space: pre-line;
        padding: 30px 15px;
        margin: 0;
        position: absolute;
        left: calc((100% - 304px) / 2);
        top: 155px;
    }
    .yellow-text {
        color: $active-col;
    }
    .bold-text {
        font-weight: 700;
    }
    #lightning-1 {
        position: absolute;
        top: 63px;
        right: 0;
        @media(min-width: 576px) {
            width: 25%;
        }
        @media(min-width: 768px) {
            width: 19%;
        }
    }
    #lightning-2 {
        position: absolute;
        left: 0;
        top: 233px;
        @media(min-width: 576px) {
            width: 25%;
            top: 220px;
        }
        @media(min-width: 768px) {
            width: 22.5%;
            top: 165px;
        }
    }
    .transparent-btn {
        box-sizing: border-box;
        border: 1px solid $main-text-col;
        background-color: rgba(0, 0, 0, 0);
        color: $main-text-col;
        margin: 404px 0 52px 0;
    }
    #copyright {
        @include text('Roboto', 400, 10px, 23px, 0.05em);
        margin: 0;
        color: rgba(255, 255, 255, 0.5);
    }
</style>