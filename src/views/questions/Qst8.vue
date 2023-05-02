<template>
    <ProgressBar progress="55.77%"/>
    <QstParagraph id="question">{{ question }}</QstParagraph>
    <img src="@/assets/people.png" alt="Dancing men">
    <WhiteSquareAnswer :answers="answers" style="width: 251px;" @ansSelected="transmitAns"/>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import QstParagraph from '@/components/QstParagraph.vue'
import WhiteSquareAnswer from '@/components/WhiteSquareAnswer.vue'


export default {
    name: 'Qst8',
    components: {
        ProgressBar,
        QstParagraph,
        WhiteSquareAnswer
    },
    data() {
        return {
            question: 'Выберите правильную фигуру из четырёх пронумерованных.',
            answers: ['1', '2', '3', '4']
        }
    },
    methods: {
        transmitAns(ans) {
            let ansObj = {dancingMan: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped>
    #question {
        margin: 2.96vh 0 3.61vh 0;
        padding: 0 4.69%;
        font-size: 18px;
        line-height: 24px;
        
    }
    img {
        margin-bottom: 3.46vh;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 20px 0;
        }
        img {
            margin-bottom: 24px;
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 3.7vh 0 3.7vh 0;
        }
        img {
            margin-bottom: 3.5vh;
        }
    }
</style>