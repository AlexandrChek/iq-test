<template>
    <ProgressBar progress="39.62%"/>
    <p id="question">{{ question }}</p>
    <ColoredAnswer :answers="answers" @ansSelected="transmitAns"/>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import ColoredAnswer from '@/components/ColoredAnswer.vue'


export default {
    name: 'Qst6',
    components: {
        ProgressBar,
        ColoredAnswer
    },
    data() {
        return {
            question: 'Relax for a couple of seconds, once again choose the color that is the most pleasant to you now:',
            answers: ['#A8A8A8', '#46B3AC', '#A95403', '#00A701', '#000000', '#F60100', '#850068', '#FDFF19', '#0000A9']
        }
    },
    methods: {
        transmitAns(ans) {
            let ansObj = {selectedColor2: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/scss/extends';

    #question {
        margin: 2.53vh 0;
        padding: 0 6.75%;
        @extend %question;
        @extend %qst-with-square-ans;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 15px 0;
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 2.53vh 0;
        }
    }
</style>