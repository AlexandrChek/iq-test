<template>
    <ProgressBar progress="57.69%"/>
    <QstParagraph id="question">{{ question }}</QstParagraph>
    <StandartAnswer class="answers"
        :answers="answers"
        itemHeight="32.3%"
        circleMrg="auto 15px auto 35px"
        @ansSelected="transmitAns">
        {{ ans }}
    </StandartAnswer>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import QstParagraph from '@/components/QstParagraph.vue'
import StandartAnswer from '@/components/StandartAnswer.vue'


export default {
    name: 'Qst9',
    components: {
        ProgressBar,
        QstParagraph,
        StandartAnswer
    },
    data() {
        return {
            question: 'Вам привычнее и важнее:',
            answers: [
                `Наслаждаться
                каждой минутой
                проведенного времени`,
                `Быть устремленными
                мыслями в будущее`,
                `Учитывать в ежедневной
                практике прошлый опыт`
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

<style scoped>
    #question {
        margin: 6.78vh 0 4.76vh 0;
        padding: 0 5%;
    }
    .answers {
        height: 40vh;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 47px 0 33px 0;
        }
        .answers {
            height: 277px; 
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 6.78vh 0 4.76vh 0;
        }
        .answers {
            height: 40vh; 
        }
    }
</style>