<template>
    <ProgressBar progress="65.77%"/>
    <QstParagraph id="question">{{ question }}</QstParagraph>
    <img src="@/assets/piramid.png" alt="Piramid">
    <StandartAnswer class="answers"
        :answers="answers"
        itemHeight="30.12%"
        circleMrg="auto 28px auto 35px"
        @ansSelected="transmitAns">
        {{ ans }}
    </StandartAnswer>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import QstParagraph from '@/components/QstParagraph.vue'
import StandartAnswer from '@/components/StandartAnswer.vue'


export default {
    name: 'Qst10',
    components: {
        ProgressBar,
        QstParagraph,
        StandartAnswer
    },
    data() {
        return {
            question: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
            answers: ['Оно остроконечное', 'Оно устойчиво', 'Оно находится в состоянии равновесия']
        }
    },
    methods: {
        transmitAns(ans) {
            let ansObj = {piramidFeature: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped>
    #question {
        margin: 2.74vh 0;
        font-size: 16px;
        line-height: 21px;
    }
    img {
        margin-bottom: 2.6vh;
    }
    .answers {
        height: 23.95vh;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 19px 0;
        }
        img {
            margin-bottom: 18px;
        }
        .answers {
            height: 166px; 
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 2.74vh 0;
        }
        img {
            margin-bottom: 2.7vh;
        }
        .answers {
            height: 23.95vh; 
        }
    }
</style>