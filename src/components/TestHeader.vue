<template>
    <div id="main-wrapper">
        <div id="pic-wrapper">
            <img src="../assets/brain.png" alt="Brain">
        </div>
        <p v-if="$store.state.iqTestHeader" class="paragraph test-head">
            ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ
        </p>
        <p v-else class="paragraph ready">ГОТОВО!</p>
    </div>
</template>

<script>
export default {
    name: 'TestHeader'
}
</script>

<style scoped>
    #main-wrapper {
        width: 100%;
        display: flex;
    }
    #pic-wrapper {
        margin: 0 2.81%;
        text-align: start;
        height: 100%;
    }
    img {
        height: 100%;
    }
    .paragraph {
        font-family: 'Yeseva One';
        font-weight: 400;
        text-transform: uppercase;
        color: #FFC700;
        height: 100%;
        line-height: 6.64vh;
        margin: 0;
    }
    .test-head {
        font-size: 12px;
        letter-spacing: 0.05em;
    }
    .ready {
        font-size: 20px;
        letter-spacing: 0.1em;
    }

    @media(min-width: 576px) {
        #main-wrapper {
            width: 100%;
            justify-content: center;
            position: absolute;
        }
        #pic-wrapper {
            margin: 0 1.5% 0 0;
        }
        img {
            height: 46px;
        }
        .paragraph {
            line-height: 46px;
        }
    }
    @media(min-width: 768px) {
        img {
            height: 6.64vh;
        }
        .paragraph {
            line-height: 6.64vh;
        }
    }
</style>