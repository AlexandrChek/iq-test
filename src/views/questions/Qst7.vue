<template>
    <ProgressBar progress="49.23%"/>
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
    name: 'Qst7',
    components: {
        ProgressBar,
        StandartAnswer
    },
    data() {
        return {
            question: 'Which city is excess?',
            answers: ['Washington', 'London', 'Paris', 'New-York', 'Sofia', 'Ottawa']
        }
    },
    emits: ['ansTransmited'],
    methods: {
        transmitAns(ans) {
            let ansObj = {excessCity: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/scss/extends';

    #question {
        margin: 7.74vh 0;
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
            margin: 46px 0;
        }
        .answers {
            height: 285px; 
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 7.74vh 0;
        }
        .answers {
            height: 47.98vh;
        }
    }
</style>