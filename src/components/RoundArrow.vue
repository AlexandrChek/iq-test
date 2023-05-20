<template>
    <router-link :to="{path: '/', hash: '#legend'}">
        <div>&#8593;</div>
    </router-link>
</template>

<script>
export default {
    name: 'RoundArrow'
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

    div {
        border-radius: 50%;
        width: 16px;
        height: 16px;
        margin: 0 auto;
        background: $main-text-col;
        color: $black-back;
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
</style>