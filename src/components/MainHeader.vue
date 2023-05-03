<template>
    <header>
        <BurgerMenu/>
        <TestHeader v-if="$store.state.visibleTestHead"/>
    </header>
</template>

<script>
import BurgerMenu from './BurgerMenu.vue'
import TestHeader from './TestHeader.vue'

export default {
    name: 'MainHeader',
    components: {
        BurgerMenu,
        TestHeader
    },
    mounted() {
        if(sessionStorage.getItem('testHead')) {
            this.$store.state.visibleTestHead = true
        }
    }
}
</script>

<style scoped>
    header {
        position: fixed;
        width: 100%;
        background: #181818;
        height: 6.64vh;
        display: flex;
        z-index: 5;
    }

    @media(min-width: 576px) {
        header {
            height: 46px;
        }
    }
    @media(min-width: 768px) {
        header {
            height: 6.64vh;
        }
    }
</style>