<template>
    <ProgressBar progress="6.15%"/>
    <p id="question">{{ question }}</p>
    <StandartAnswer class="answers"
        :answers="answers"
        itemHeight="46.3%"
        @ansSelected="transmitAns">
        {{ ans }}
    </StandartAnswer>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import StandartAnswer from '@/components/StandartAnswer.vue'


export default {
    name: 'Qst1',
    components: {
        ProgressBar,
        StandartAnswer
    },
    data() {
        return {
            question: 'Your gender:',
            answers: ['Man', 'Woman']
        }
    },
    emits: ['ansTransmited'],
    methods: {
        transmitAns(ans) {
            let ansObj = {gender: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/scss/extends';

    #question {
        margin: 11.95vh 0;
        @extend %question;
        @extend %qst-with-stand-ans;
        @media(min-width: 576px) and (orientation: landscape) {
            margin: 71px 0;
        }
        @media(min-width: 768px) {
            margin: 11.95vh 0;
        }
    }
    .answers {
        height: 18.18vh;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        @media(min-width: 576px) and (orientation: landscape) {
            height: 108px;
        }
        @media(min-width: 768px) {
            height: 18.18vh;
        }
    }
</style>