<template>
    <button><slot></slot></button>
</template>

<script>
export default {
  name: 'MyButton'
}
</script>

<style scoped>
    button {
        border-radius: 20px;
        width: 189px;
        height: 41px;
        font-family: 'Merriweather';
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #0D0C11;
        border: none;
        cursor: pointer;
    }
</style>