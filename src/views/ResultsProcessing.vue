<template>
    <StarsWrapper class="processing">
        <ProgressBar progress="100%"/>
        <pre>Обработка
            результатов
        </pre>
        <CircularAnimation/>
        <p id="inscription">
            Определение стиля мышления...........
            ........................................................
        </p>
    </StarsWrapper>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import StarsWrapper from '@/components/StarsWrapper.vue'
import CircularAnimation from '@/components/CircularAnimation.vue'

export default {
    name: 'ResultsProcessing',
    components: {
        ProgressBar,
        StarsWrapper,
        CircularAnimation
    },
    mounted() {
        setTimeout(this.goToRes, 7000)
    },
    methods: {
        goToRes() {
            this.$router.push('/result')
        }  
    }
}
</script>

<style scoped>
    .processing {
        height: 75.32vh;
        padding-top: 9.09vh;
        overflow: hidden;
    }
    pre {
        margin-top: 7.5vh;
        font-weight: 400;
        font-size: 23px;
        line-height: 30px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        white-space: pre-line;
    }
    #inscription {
        margin: 19.05vh auto 0 auto;
        width: 280px;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        white-space: pre-line;
    }
    pre::first-letter, #inscription::first-letter {
        text-transform: capitalize;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        .processing {
            height: 500px;
            padding-top: 60px;
        }
        pre {
            margin-top: 52px;
        }
        #inscription {
            margin: 132px auto 0 auto;
        }
    }
    @media(min-width: 768px) {
        .processing {
            height: 75.32vh;
            padding-top: 9.09vh;
        }
        pre {
            margin-top: 7.5vh;
        }
        #inscription {
            margin: 19.05vh auto 0 auto;
        }
    }
    @media(min-width: 1400px) {
        .processing {
            height: 76.3vh;
            padding-top: 11.5vh;
        }
    }
</style>