<template>
    <p><slot></slot></p>
</template>

<script>
export default {
    name: 'QstParagraph'
}
</script>

<style scoped>
    p {
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }
</style>