<template>
    <ProgressBar progress="35.77%"/>
    <QstParagraph id="question">{{ question }}</QstParagraph>
    <ColoredAnswer :answers="answers" @ansSelected="transmitAns"/>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import QstParagraph from '@/components/QstParagraph.vue'
import ColoredAnswer from '@/components/ColoredAnswer.vue'


export default {
    name: 'Qst5',
    components: {
        ProgressBar,
        QstParagraph,
        ColoredAnswer
    },
    data() {
        return {
            question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
            answers: ['#A8A8A8', '#0000A9', '#00A701', '#F60100', '#FDFF19', '#A95403', '#000000', '#850068', '#46B3AC']
        }
    },
    methods: {
        transmitAns(ans) {
            let ansObj = {selectedColor1: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped>
    #question {
        margin: 4.33vh 0 3.32vh 0;
        padding: 0 10.59%;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 30px 0;
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 5vh 0 4.3vh 0;
        }
    }

    @media(max-height: 690px) and (max-width: 575px) {
        #question {
            margin: 2.5vh 0 2vh 0;
        }
    }
</style>