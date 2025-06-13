<template>
    <ProgressBar progress="55.77%"/>
    <p id="question">{{ question }}</p>
    <img src="@/assets/people.png" alt="Dancing men">
    <WhiteSquareAnswer :answers="answers" style="width: 251px;" @ansSelected="transmitAns"/>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import WhiteSquareAnswer from '@/components/WhiteSquareAnswer.vue'


export default {
    name: 'Qst8',
    components: {
        ProgressBar,
        WhiteSquareAnswer
    },
    data() {
        return {
            question: 'Choose the correct figure from the four numbered ones:',
            answers: ['1', '2', '3', '4']
        }
    },
    emits: ['ansTransmited'],
    methods: {
        transmitAns(ans) {
            let ansObj = {dancingMan: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/scss/extends';

    #question {
        margin: 3.7vh 0;
        @extend %question;
        @extend %qst-with-square-ans;
    }
    img {
        margin-bottom: 3.87vh;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 22px 0;
        }
        img {
            margin-bottom: 23px;
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 3.7vh 0;
        }
        img {
            margin-bottom: 3.87vh;
        }
    }

    @media(max-height: 570px) and (max-width: 575px) {
        #question {
            margin: 2vh 0;
        }
        img {
            margin-bottom: 2.1vh;
        }
    }
</style>