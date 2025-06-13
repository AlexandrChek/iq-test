<template>
    <ProgressBar progress="74.62%"/>
    <p id="question">{{ question }}</p>
    <img src="@/assets/star.png" alt="Star">
    <WhiteSquareAnswer :answers="answers" style="width: 286px;" @ansSelected="transmitAns"/>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import WhiteSquareAnswer from '@/components/WhiteSquareAnswer.vue'


export default {
    name: 'Qst11',
    components: {
        ProgressBar,
        WhiteSquareAnswer
    },
    data() {
        return {
            question: 'Insert the appropriate number',
            answers: ['34', '36', '53', '44', '66', '42']
        }
    },
    emits: ['ansTransmited'],
    methods: {
        transmitAns(ans) {
            let ansObj = {suitableNumber: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/scss/extends';

    #question {
        margin: 4.04vh 0;
        padding: 0 15.3%;
        @extend %question;
        @extend %qst-with-square-ans;
    }
    img {
        margin-bottom: 6.23vh;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 24px 0;
        }
        img {
            margin-bottom: 37px;
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 4.04vh 0;
        }
        img {
            margin-bottom: 6.23vh;
        }
    }

    @media(max-height: 550px) and (max-width: 575px) {
        img {
            margin-bottom: 4vh;
        }
    }
</style>