<template>
    <button><slot></slot></button>
</template>

<script>
export default {
  name: 'MyButton'
}
</script>

<style scoped lang="scss">
@import '../scss/mixins';

    button {
        border-radius: 20px;
        width: 189px;
        height: 41px;
        @include text('Merriweather', 700, 14px, 18px, 0.1em);
        text-transform: uppercase;
        border: none;
        box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
        cursor: pointer;
    }
</style>