<template>
    <div class="quote-wrapper">
        <div class="lft-qt-wrapper">
            <img id="lft-qt" src="../assets/left-quote.png" alt="Quote">
        </div>
        <p>
            A professional IQ test allows you not only to determine your IQ, but also to develop a list of recommendations to improve this indicator.
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

<style scoped lang="scss">
@import '../scss/mixins';
@import '../scss/variables';

@mixin quote($align) {
    text-align: $align;
    width: 296px;
    margin: 0 auto;
}

    .quote-wrapper {
        background-image: radial-gradient(84.34% 50.29% at 48.75% 49.71%, #2950C2 0%, rgba(38, 91, 199, 0.96) 40.62%, rgba(39, 98, 187, 0) 85.42%), url('../assets/bk-quote.png');
        @include back-img-set(100% 100%);
        padding: 43.3px 0 54.7px 0;
        @media(min-width: 992px) {
            width: $width-992;
            margin: 0 auto;
        }
        @media(min-width: 1400px) {
            width: $width-1400;
        }
    }
    p {
        @include text('Yeseva One', 400, 18px, 23px, 0.05em);
        color: $main-text-col;
        width: 248px;
        margin: 30px auto;
    }
    .lft-qt-wrapper {
        @include quote(start);
    }
    .rt-qt-wrapper {
        @include quote(end);
    }
</style>