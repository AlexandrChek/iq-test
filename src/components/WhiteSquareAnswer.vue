<template>
    <div class="ans-wrapper">
        <div v-for="ans in answers" :key="ans" class="square" :id="`ans-${ans}`" @click="selectAns(ans)">
            {{ ans }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhiteSquareAnswer',
    props: ['answers'],
    methods: {
        selectAns(ans) {
            const allSquares = document.querySelectorAll('.square')
            allSquares.forEach(e => e.style.cssText = 'border: none; line-height: 37px;')
            const square = document.querySelector(`#ans-${ans}`)
            square.style.cssText = 'border: 6px solid #FFC700; line-height: 1.5;'
            this.$emit('ansSelected', ans)
        }
    }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

    .ans-wrapper {
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .square {
        @include text('PT Serif', 400, 20px, 37px, normal);
        height: 41px;
        width: 41px;
        box-sizing: border-box;
        background: $main-text-col;
        text-align: center;
        color: $black-back;
    }
</style>