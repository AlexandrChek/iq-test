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

<style scoped>
    div {
        border-radius: 50%;
        width: 16px;
        height: 16px;
        margin: 0 auto;
        background: #FFFFFF;
        color: #0C0B10;
        cursor: pointer;
    }
</style>