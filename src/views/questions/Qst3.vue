<template>
    <ProgressBar progress="13.85%"/>
    <QstParagraph id="question">{{ question }}</QstParagraph>
    <StandartAnswer class="answers"
        :answers="answers"
        itemHeight="17.73%"
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
    name: 'Qst3',
    components: {
        ProgressBar,
        QstParagraph,
        StandartAnswer
    },
    data() {
        return {
            question: 'Выберите лишнее:',
            answers: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина']
        }
    },
    methods: {
        transmitAns(ans) {
            let ansObj = {selectedExcess: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped>
    #question {
        margin: 6.57vh 0 6.49vh 0;
    }
    .answers {
        height: 40.69vh;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 45.5px 0 45px 0;
        }
        .answers {
            height: 282px; 
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 6.57vh 0 6.49vh 0;
        }
        .answers {
            height: 40.69vh; 
        }
    }
</style>