<template>
    <div class="circle-wrapper"
        v-for="item in 11"
        :style="`
            -webkit-animation-delay: ${delays[item - 1]}ms;
            animation-delay: ${delays[item - 1]}ms;
        `">
        <div class="circle"
            :style="`
                -webkit-animation-delay: ${delays[item - 1]}ms;
                animation-delay: ${delays[item - 1]}ms;
            `" >
        </div>
    </div>
</template>

<script>
export default {
    name: 'CircularAnimation',
    data() {
        return {
            delays: ['0', '182', '364', '546', '728', '910', '1092', '1274', '1456', '1638', '1820']
        }
    }
}
</script>

<style scoped>
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
        background: #3BDE7C;
        -webkit-animation: scaling 2s linear infinite;
        animation: scaling 2s linear infinite;
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