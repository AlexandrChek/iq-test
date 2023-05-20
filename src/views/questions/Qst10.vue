<template>
    <ProgressBar progress="65.77%"/>
    <p id="question">{{ question }}</p>
    <img src="@/assets/piramid.png" alt="Piramid">
    <StandartAnswer class="answers"
        :answers="answers"
        itemHeight="30.12%"
        @ansSelected="transmitAns">
        {{ ans }}
    </StandartAnswer>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import StandartAnswer from '@/components/StandartAnswer.vue'


export default {
    name: 'Qst10',
    components: {
        ProgressBar,
        StandartAnswer
    },
    data() {
        return {
            question: 'Which statement do you think is more appropriate for this geometric figure:',
            answers: ['It is pointed', 'It is sustainable', 'It is in equilibrium']
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

<style scoped lang="scss">
@import '@/scss/extends';

    #question {
        margin: 1.68vh 0;
        padding: 0 5.33%;
        @extend %question;
        @extend %qst-with-stand-ans;
    }
    img {
        margin-bottom: 3.2vh;
    }
    .answers {
        height: 27.95vh;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        #question {
            margin: 10px 0;
        }
        img {
            margin-bottom: 19px;
        }
        .answers {
            height: 166px;
        }
    }
    @media(min-width: 768px) {
        #question {
            margin: 1.68vh 0;
        }
        img {
            margin-bottom: 3.2vh;
        }
        .answers {
            height: 27.95vh; 
        }
    }

    @media(max-height: 570px) and (max-width: 575px) {
        img {
            margin-bottom: 1.7vh;
        }
    }
</style>