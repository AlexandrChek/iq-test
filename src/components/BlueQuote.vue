<template>
    <div class="quote-wrapper">
        <div class="lft-qt-wrapper">
            <img id="lft-qt" src="../assets/left-quote.png" alt="Quote">
        </div>
        <p>
            Профессиональный 
            <br/>IQ-тест позволяет не 
            <br/>только определить 
            <br/>коэффициент вашего 
            <br/>интеллекта, 
            <br/>но и выработать список 
            <br/>рекомендаций для 
            <br/>повышения этого 
            <br/>показателя.
        </p>
        <div class="rt-qt-wrapper">
            <img id="rt-qt" src="../assets/right-quote.png" alt="Quote">
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlueQuote'
}
</script>

<style scoped>
    .quote-wrapper {
        background-image: radial-gradient(84.34% 50.29% at 48.75% 49.71%, #2950C2 0%, rgba(38, 91, 199, 0.96) 40.62%, rgba(39, 98, 187, 0) 85.42%), url('../assets/bk-quote.png');
        background-repeat: no-repeat;
        -webkit-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        -khtml-background-size: 100% 100%;
        background-size: 100% 100%;
        padding: 4vh 0;
    }
    p {
        font-family: 'Yeseva One';
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        margin: 0;
    }
    .lft-qt-wrapper {
        text-align: start;
        width: 260px;
        margin: 0 auto;
    }
    .rt-qt-wrapper {
        text-align: end;
        width: 255px;
        margin: 0 auto;
    }

    @media(min-width: 992px) {
        .quote-wrapper {
            width: 70%;
            margin: 0 auto;
        }
    }
    @media(min-width: 1400px) {
        .quote-wrapper {
            width: 60%;
        }
    }
</style>