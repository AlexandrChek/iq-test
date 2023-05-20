<template>
    <div id="external">
        <div id="internal"></div>
    </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: ['progress'],
    mounted() {
        const internal = document.querySelector('#internal')
        internal.style.width = this.progress
    }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

    #external {
        width: 81.25%;
        height: 1.85vh;
        margin: 0 auto;
        background: #F2F3F3;
        mix-blend-mode: normal;
        opacity: 0.59;
        border-radius: 10.5px;
        @media(min-width: 575px) and (orientation: landscape) {
            height: 11px; 
        }
        @media(min-width: 768px) {
            height: 1.85vh;
        }
    }
    #internal {
        height: 100%;
        background: $indicators;
        border-radius: 10.5px;
    }
</style>