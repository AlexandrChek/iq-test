<template>
    <ProgressBar progress="29.23%"/>
    <p id="question">{{ question }}</p>
    <StandartAnswer class="answers"
        :answers="answers"
        itemHeight="14.04%"
        @ansSelected="transmitAns">
        {{ ans }}
    </StandartAnswer>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import StandartAnswer from '@/components/StandartAnswer.vue'


export default {
    name: 'Qst4',
    components: {
        ProgressBar,
        StandartAnswer
    },
    data() {
        return {
            question: 'Continue the number line: 18 20 24 32',
            answers: ['62', '48', '74', '57', '60', '77']
        }
    },
    methods: {
        transmitAns(ans) {
            let ansObj = {numberLineExtention: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/scss/extends';

    #question {
        margin: 5.72vh auto;
        width: 280px;
        @extend %question;
        @extend %qst-with-stand-ans;
    }
    .answers {
        height: 47.98vh;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 34px auto;
        }
        .answers {
            height: 285px; 
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 5.72vh auto;
        }
        .answers {
            height: 47.98vh;
        }
    }
</style>