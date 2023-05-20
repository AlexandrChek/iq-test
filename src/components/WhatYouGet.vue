<template>
    <div id="wrapper">
        <p>
            Also, according to test results,
            <br/><span>YOU WILL RECEIVE </span>detailed
            <br/><span>ADVICE </span> on determining the most
            <br/>promising  <span>FIELD OF ACTIVITY
            <br/>FOR YOUR TYPE OF INTELLECT</span>,
            <br/>that will bring you the fastest
            <br/>financial effect.
        </p>
        <div id="pic-wrapper">
            <img src="../assets/brain-zones.png" alt="Brain">
        </div>
        <MyButton class="yellow-btn" @click="startTest">START TEST</MyButton>
    </div>
</template>

<script>
import MyButton from './MyButton.vue'

export default {
    name: 'WhatYouGet',
    components: {MyButton},
    methods: {
        startTest() {
            this.$store.commit('showTestHead')
            this.$router.push('/test/1')
        }
    }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/extends';
@import '../scss/mixins';

    #wrapper {
        background-color: $main-text-col;
        padding: 38px 0;
        @media(min-width: 992px) {
            width: $width-992;
            margin: 0 auto;
        }
        @media(min-width: 1400px) {
            width: $width-1400;
        }
    }
    p {
        @include text('PT Serif', 400, 16px, 24px, 0.05em);
        margin: 0 auto;
        width: 298px;
        color: $black-back;
        text-align: start;
    }
    span {
        text-transform: uppercase;
        @include text('PT Serif', 700, 16px, 24px, 0.05em);
    }
    #pic-wrapper {
        margin-top: 53px;
    }
    .yellow-btn {
        @extend %yellow-button;
    }
</style>