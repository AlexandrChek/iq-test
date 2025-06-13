<template>
    <ProgressBar progress="13.85%"/>
    <p id="question">{{ question }}</p>
    <StandartAnswer class="answers"
        :answers="answers"
        itemHeight="17.73%"
        @ansSelected="transmitAns">
        {{ ans }}
    </StandartAnswer>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import StandartAnswer from '@/components/StandartAnswer.vue'


export default {
    name: 'Qst3',
    components: {
        ProgressBar,
        StandartAnswer
    },
    data() {
        return {
            question: 'Select excess:',
            answers: ['House', 'Hovel', 'Bungalow', 'Bench', 'Hut']
        }
    },
    emits: ['ansTransmited'],
    methods: {
        transmitAns(ans) {
            let ansObj = {selectedExcess: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/scss/extends';

    #question {
        margin: 7.41vh 0;
        @extend %question;
        @extend %qst-with-stand-ans;
    }
    .answers {
        height: 47.47vh;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 44px 0;
        }
        .answers {
            height: 282px; 
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 7.41vh 0;
        }
        .answers {
            height: 47.47vh; 
        }
    }
</style>