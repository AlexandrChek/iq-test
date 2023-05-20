<template>
    <ProgressBar progress="9.62%"/>
    <p id="question">{{ question }}</p>
    <StandartAnswer class="answers"
        :answers="answers"
        itemHeight="22.32%"
        @ansSelected="transmitAns">
        {{ ans }}
    </StandartAnswer>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import StandartAnswer from '@/components/StandartAnswer.vue'


export default {
    name: 'Qst2',
    components: {
        ProgressBar,
        StandartAnswer
    },
    data() {
        return {
            question: 'Enter your age:',
            answers: ['Under 18', 'From 18 to 27', 'From 28 to 37', 'From 38']
        }
    },
    methods: {
        transmitAns(ans) {
            let ansObj = {age: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/scss/extends';

    #question {
        margin: 9.76vh 0;
        @extend %question;
        @extend %qst-with-stand-ans;
    }
    .answers {
        height: 37.71vh;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 58px 0;
        }
        .answers {
            height: 224px; 
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 9.76vh 0;
        }
        .answers {
            height: 37.71vh; 
        }
    }
</style>