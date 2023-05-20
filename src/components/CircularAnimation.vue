<template>
    <div class="circle-wrapper" v-for="item in 11" :id="`wrapper-${item}`">
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

    .circle-wrapper {
        position: relative;
        top: 0;
        left: 50%;
        transform-origin: 0 31px;
        -webkit-animation: rotating 2s linear infinite;
        animation: rotating 2s linear infinite;
    }
    .circle {
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: $indicators;
        -webkit-animation: scaling 2s linear infinite;
        animation: scaling 2s linear infinite;
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
    0% {transform: scale(0);}
    100% {transform: scale(1);}
   }
   @keyframes scaling {
    0% {transform: scale(0);}
    100% {transform: scale(1);}
   }
</style>