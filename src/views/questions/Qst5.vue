<template>
    <ProgressBar progress="35.77%"/>
    <p id="question">{{ question }}</p>
    <ColoredAnswer :answers="answers" @ansSelected="transmitAns"/>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import ColoredAnswer from '@/components/ColoredAnswer.vue'


export default {
    name: 'Qst5',
    components: {
        ProgressBar,
        ColoredAnswer
    },
    data() {
        return {
            question: 'Choose the color that is the most pleasant to you now:',
            answers: ['#A8A8A8', '#0000A9', '#00A701', '#F60100', '#FDFF19', '#A95403', '#000000', '#850068', '#46B3AC']
        }
    },
    methods: {
        transmitAns(ans) {
            let ansObj = {selectedColor1: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/scss/extends';

    #question {
        margin: 6.4vh 0;
        padding: 0 9.58%;
        @extend %question;
        @extend %qst-with-square-ans;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 38px 0;
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 6.4vh 0;
        }
    }
</style>