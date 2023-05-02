<template>
    <div class="ans-wrapper">
        <div v-for="(ans, index) in answers"
            :key="index"
            class="square"
            :id="`ans-${index}`"
            :style="`background: ${ans};`"
            @click="selectAns(ans, index)">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ColoredAnswer',
    props: ['answers'],
    methods: {
        selectAns(ans, index) {
            const allSquares = document.querySelectorAll('.square')
            allSquares.forEach(e => e.style.border = 'none')
            const square = document.querySelector(`#ans-${index}`)
            square.style.border = '6px solid #FFC700'
            this.$emit('ansSelected', ans)
        }
    }
}
</script>

<style scoped>
    .ans-wrapper {
        height: 273px;
        width: 273px;
        display: flex;
        margin: 0 auto;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .square {
        height: 75px;
        width: 75px;
        box-sizing: border-box;
    }

    @media(max-height: 690px) and (max-width: 575px) {
        .ans-wrapper {
            height: 255px;
            width: 255px;
        }
    }
</style>