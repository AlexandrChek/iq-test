<template>
    <div>
        <div v-for="(ans, index) in answers" :key="index" class="ans-wrapper" :id="`ans-wrapper-${index}`" @click="selectAns(ans, index)">
            <div class="circle" :id="`circle-${index}`" :style="`margin: ${circleMrg};`"></div>
            <p class="answer" :id="`ans-${index}`">{{ ans }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StandartAnswer',
    props: ['answers', 'itemHeight', 'circleMrg'],
    mounted() {
        const wrappers = document.querySelectorAll('.ans-wrapper')
        wrappers.forEach(e => e.style.height = this.itemHeight)
    },
    methods: {
        selectAns(ans, index) {
            const allWrappers = document.querySelectorAll('.ans-wrapper')
            const allCircles = document.querySelectorAll('.circle')
            const allAnswers = document.querySelectorAll('.answer')
            allWrappers.forEach(e => e.style.backgroundColor = 'rgba(242, 243, 243, 0.15)')
            allCircles.forEach(e => e.style.cssText = `background: transparent; border: 1px solid #FFFFFF;`)
            allAnswers.forEach(e => e.style.color = '#FFFFFF')
            const wrapper = document.querySelector(`#ans-wrapper-${index}`)
            const circle = document.querySelector(`#circle-${index}`)
            const answer = document.querySelector(`#ans-${index}`)
            wrapper.style.backgroundColor = '#FFC700'
            circle.style.cssText = `background: #2950C2; border: 1px solid #272727;`
            answer.style.color = '#272727'
            allCircles.forEach(e => e.style.margin = this.circleMrg)
            this.$emit('ansSelected', ans)
        }
    }
}
</script>

<style scoped>
    .ans-wrapper {
        display: flex;
        width: 100%;
        background: rgba(242, 243, 243, 0.15);
    }
    .circle {
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        flex-shrink: 0;
    }
    .answer {
        font-weight: 400;
        font-size: 18px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        margin: auto 0;
        padding-right: 5%;
        text-align: start;
        white-space: pre-line;
    }
    .answer::first-letter {
        text-transform: capitalize;
    }

    @media(min-width: 576px) {
        .answer {
            white-space: normal;
        }
    }
</style>