<template>
    <div class="circle-wrapper" v-for="item in 11" :key="item" :id="`wrapper-${item}`">
        <div class="circle" :id="`circle-${item}`"></div>
    </div>
</template>

<script>
export default {
    name: 'CircularAnimation2'
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

    @mixin animations($a-name) {
        -webkit-animation: $a-name 2s linear infinite;
        animation: $a-name 2s linear infinite;
    }

    .circle-wrapper {
        position: relative;
        top: 0;
        left: 50%;
        transform-origin: 0 31px;
        @include animations(rotating);
    }
    .circle {
        position: absolute;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: $indicators;
        @include animations(scaling);
    }

    @for $i from 0 through 10 {
        #wrapper-#{$i + 1}, #circle-#{$i + 1} {
            -webkit-animation-delay: $i * 182ms;
            animation-delay: $i * 182ms;
        }
    }

   @-webkit-keyframes rotating {
    0% {transform: rotate(360deg);}
    100% {transform: rotate(0deg);}
   }
   @keyframes rotating {
    0% {transform: rotate(360deg);}
    100% {transform: rotate(0deg);}
   }

   @-webkit-keyframes scaling {
    0% {transform: scale(1);}
    100% {transform: scale(5);}
   }
   @keyframes scaling {
    0% {transform: scale(1);}
    100% {transform: scale(5);}
   }
</style>