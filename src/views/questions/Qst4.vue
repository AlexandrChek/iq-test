<template>
    <ProgressBar progress="29.23%"/>
    <QstParagraph id="question">{{ question }}</QstParagraph>
    <StandartAnswer class="answers"
        :answers="answers"
        itemHeight="14.04%"
        circleMrg="auto 39px auto 35px"
        @ansSelected="transmitAns">
        {{ ans }}
    </StandartAnswer>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import QstParagraph from '@/components/QstParagraph.vue'
import StandartAnswer from '@/components/StandartAnswer.vue'


export default {
    name: 'Qst4',
    components: {
        ProgressBar,
        QstParagraph,
        StandartAnswer
    },
    data() {
        return {
            question: 'Продолжите числовой ряд: 18 20 24 32',
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

<style scoped>
    #question {
        margin: 4.55vh auto 5.19vh auto;
        width: 280px;
    }
    .answers {
        height: 41.13vh;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 31.5px auto 36px auto;
        }
        .answers {
            height: 285px; 
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 4.55vh auto 5.19vh auto;
        }
        .answers {
            height: 41.13vh;
        }
    }
</style>