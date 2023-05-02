<template>
    <ProgressBar progress="49.23%"/>
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
    name: 'Qst7',
    components: {
        ProgressBar,
        QstParagraph,
        StandartAnswer
    },
    data() {
        return {
            question: 'Какой из городов лишний?',
            answers: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава']
        }
    },
    methods: {
        transmitAns(ans) {
            let ansObj = {excessCity: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped>
    #question {
        margin: 5.77vh 0 3.9vh 0;
        padding: 0 21.87%;
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
            margin: 40px 0 27px 0;
        }
        .answers {
            height: 285px; 
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 5.77vh 0 3.9vh 0;
        }
        .answers {
            height: 41.13vh;
        }
    }
</style>