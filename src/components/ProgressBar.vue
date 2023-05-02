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

<style scoped>
    #external {
        width: 81.25%;
        height: 1.59vh;
        margin: 0 auto;
        background: #F2F3F3;
        mix-blend-mode: normal;
        opacity: 0.59;
        border-radius: 10.5px;
    }
    #internal {
        height: 100%;
        background: #3BDE7C;
        border-radius: 10.5px;
    }

    @media(min-width: 575px) and (orientation: landscape) {
        #external {
            height: 11px;
        }
    }
    @media(min-width: 768px) {
        #external {
            height: 1.59vh;
        }
    }
</style>