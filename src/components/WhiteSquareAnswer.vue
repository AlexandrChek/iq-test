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

<style scoped>
    .ans-wrapper {
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .square {
        height: 41px;
        width: 41px;
        box-sizing: border-box;
        background: #FFFFFF;
        font-weight: 400;
        font-size: 20px;
        line-height: 37px;
        text-align: center;
        color: #0D0C11;
    }
</style>