<template>
    <ProgressBar progress="9.62%"/>
    <QstParagraph id="question">{{ question }}</QstParagraph>
    <StandartAnswer class="answers"
        :answers="answers"
        itemHeight="22.32%"
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
    name: 'Qst2',
    components: {
        ProgressBar,
        QstParagraph,
        StandartAnswer
    },
    data() {
        return {
            question: 'Укажите ваш возраст:',
            answers: ['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36']
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

<style scoped>
    #question {
        margin: 9.88vh 0 7.5vh 0;
    }
    .answers {
        height: 32.32vh;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 68.5px 0 52px 0;
        }
        .answers {
            height: 224px; 
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 9.88vh 0 7.5vh 0;
        }
        .answers {
            height: 32.32vh; 
        }
    }
</style>