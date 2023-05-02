<template>
    <ProgressBar progress="74.62%"/>
    <QstParagraph id="question">{{ question }}</QstParagraph>
    <img src="@/assets/star.png" alt="Star">
    <div class="stick"></div>
    <WhiteSquareAnswer :answers="answers" style="width: 286px;" @ansSelected="transmitAns"/>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import QstParagraph from '@/components/QstParagraph.vue'
import WhiteSquareAnswer from '@/components/WhiteSquareAnswer.vue'


export default {
    name: 'Qst11',
    components: {
        ProgressBar,
        QstParagraph,
        WhiteSquareAnswer
    },
    data() {
        return {
            question: 'Вставьте подходящее число',
            answers: ['34', '36', '53', '44', '66', '42']
        }
    },
    methods: {
        transmitAns(ans) {
            let ansObj = {suitableNumber: ans}
            this.$emit('ansTransmited', ansObj)
        }
    }
}
</script>

<style scoped>
    #question {
        margin: 5.19vh 0 2.74vh 0;
        padding: 0 15.3%;
        line-height: 24px;
        
    }
    img {
        margin-bottom: 3.46vh;
    }
    .stick {
        height: 4px;
        background: #F2F3F3;
        opacity: 0.15;
        margin-bottom: 2.89vh;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 36px 0 19px 0;
        }
        img {
            margin-bottom: 24px;
        }
        .stick {
            margin-bottom: 20px;
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 5.2vh 0 2.74vh 0;
        }
        img {
            margin-bottom: 3.46vh;
        }
        .stick {
            margin-bottom: 2.9vh;
        }
    }

    @media(max-height: 690px) and (max-width: 575px) {
        #question {
            margin: 2.7vh 0 1.7vh 0;
        }
        img {
            margin-bottom: 1.5vh;
        }
        .stick {
            margin-bottom: 2.2vh;
        }
    }
</style>