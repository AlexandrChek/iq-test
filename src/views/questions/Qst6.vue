<template>
    <ProgressBar progress="39.62%"/>
    <QstParagraph id="question">{{ question }}</QstParagraph>
    <ColoredAnswer :answers="answers" @ansSelected="transmitAns"/>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import QstParagraph from '@/components/QstParagraph.vue'
import ColoredAnswer from '@/components/ColoredAnswer.vue'


export default {
    name: 'Qst6',
    components: {
        ProgressBar,
        QstParagraph,
        ColoredAnswer
    },
    data() {
        return {
            question: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
            answers: ['#A8A8A8', '#46B3AC', '#A95403', '#00A701', '#000000', '#F60100', '#850068', '#FDFF19', '#0000A9']
        }
    },
    methods: {
        transmitAns(ans) {
            let ansObj = {selectedColor2: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped>
    #question {
        margin: 2.74vh 0 1.74vh 0;
        padding: 0 5.83%;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 20px 0;
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 5vh 0 4.3vh 0;
        }
    }

    @media(max-height: 690px) and (max-width: 575px) {
        #question {
            font-size: 18px;
            line-height: 22px;
        }
    }
</style>