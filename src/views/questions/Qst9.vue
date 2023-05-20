<template>
    <ProgressBar progress="57.69%"/>
    <p id="question">{{ question }}</p>
    <StandartAnswer class="answers"
        :answers="answers"
        itemHeight="28.68%"
        @ansSelected="transmitAns">
        {{ ans }}
    </StandartAnswer>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import StandartAnswer from '@/components/StandartAnswer.vue'


export default {
    name: 'Qst9',
    components: {
        ProgressBar,
        StandartAnswer
    },
    data() {
        return {
            question: 'It is more familiar and more important for you:',
            answers: [
                `To enjoy every minute of your time`,
                `To be directed thoughts into the future`,
                `To take into account past experience in daily practice`
            ]
        }
    },
    methods: {
        transmitAns(ans) {
            let ansObj = {lifestyle: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/scss/extends';

    #question {
        margin: 4.55vh 0;
        padding: 0 12.5%;
        @extend %question;
        @extend %qst-with-stand-ans;
    }
    .answers {
        height: 45.79vh;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 27px 0;
        }
        .answers {
            height: 272px; 
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 4.55vh 0;
        }
        .answers {
            height: 45.79vh; 
        }
    }
</style>