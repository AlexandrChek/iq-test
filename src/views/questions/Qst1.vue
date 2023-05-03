<template>
    <ProgressBar progress="6.15%"/>
    <QstParagraph id="question">{{ question }}</QstParagraph>
    <StandartAnswer class="answers"
        :answers="answers"
        itemHeight="46.08%"
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
    name: 'Qst1',
    components: {
        ProgressBar,
        QstParagraph,
        StandartAnswer
    },
    data() {
        return {
            question: 'Ваш пол:',
            answers: ['Мужчина', 'Женщина']
        }
    },
    methods: {
        transmitAns(ans) {
            let ansObj = {gender: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped>
    #question {
        margin: 15.44vh 0 6.06vh 0;
    }
    .answers {
        height: 15.58vh;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 50px 0 42px 0;
        }
        .answers {
            height: 108px; 
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 15.44vh 0 6.06vh 0;
        }
        .answers {
            height: 15.58vh; 
        }
    }
</style>