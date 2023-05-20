<template>
    <div class="modal">
        <div class="cross-wrapper">
            <div class="cross" @click="closeModal">&#215;</div>
        </div>
        <nav>
            <router-link to="/" @click="closeModal()">HOME</router-link>
            <router-link :to="{path: '/', hash: '#legend'}" @click="closeModal">ABOUT TEST</router-link>
            <router-link to="/test/1" id="test" @click="closeModal()">START TEST</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'ModalMenu',
    methods: {
        closeModal() {
            this.$emit('modalClosed')
        }
    }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

    .modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-color: $black-back;
    }
    .cross-wrapper {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        margin-bottom: 64px;
    }
    .cross {
        font-size: 77px;
        line-height: 28px;
        margin: 17px 12px 0 0;
        color: $active-col;
        cursor: pointer;
    }
    nav {
        display: flex;
        flex-direction: column;
        text-align: start;
    }
    a {
        @include text('Roboto', 300, 16px, 22px, normal);
        text-transform: uppercase;
        text-decoration: none;
        color: $main-text-col;
        margin: 0 0 27px 7.19%;
    }
    #test {
        color: $active-col;
    }

    @media(min-width: 992px) {
        nav {
            text-align: center;
        }
        a {
            margin: 0 0 27px 0;
        }
    }
</style>