<template>
    <div><slot></slot></div>
</template>

<script>
export default {
    name: 'StarsWrapper'
}
</script>

<style scoped lang="scss">
@import '../scss/mixins';
@import '../scss/variables';

    div {
        background-image: url('../assets/bk-test.png');
        @include back-img-set(cover);
        @media(min-width: 992px) {
            width: $width-992;
            margin: 0 auto;
        }
        @media(min-width: 1400px) {
            width: $width-1400;
        }
    }
</style>