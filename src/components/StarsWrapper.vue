<template>
    <div><slot></slot></div>
</template>

<script>
export default {
    name: 'StarsWrapper'
}
</script>

<style scoped>
    div {
        background-image: url('../assets/bk-test.png');
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        -o-background-size: cover;
        -moz-background-size: cover;
        -ms-background-size: cover;
        -khtml-background-size: cover;
        background-size: cover;
    }

    @media(min-width: 992px) {
        div {
            width: 70%;
            margin: 0 auto;
        }
    }
    @media(min-width: 1400px) {
        div {
            width: 60%;
        }
    }
</style>