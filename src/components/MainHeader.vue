<template>
    <header>
        <BurgerMenu/>
        <TestHeader v-if="$route.params.id || $route.path === '/processing' || $route.path === '/result'"/>
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
    }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

    header {
        position: fixed;
        width: 100%;
        background: $black-back;
        height: $head-height;
        display: flex;
        z-index: 5;
        @media(min-width: 992px) {
            height: $head-height-992;
        }
    }
</style>