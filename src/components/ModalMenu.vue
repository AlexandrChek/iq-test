<template>
    <div class="modal">
        <div class="cross-wrapper">
            <div class="cross" @click="closeModal">&#10060;</div>
        </div>
        <nav>
            <router-link to="/" @click="hideTestHead(), closeModal()">ГЛАВНАЯ</router-link>
            <router-link :to="{path: '/', hash: '#legend'}" @click="closeModal">ИНФОРМАЦИЯ О ТЕСТЕ</router-link>
            <router-link to="/test/1" id="test" @click="showTestHead(), closeModal()">ПРОЙТИ ТЕСТ</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'ModalMenu',
    methods: {
        closeModal() {
            this.$emit('modalClosed')
        },
        showTestHead() {
            this.$store.commit('showTestHead')
        },
        hideTestHead() {
            this.$store.commit('hideTestHead')
        }
    }
}
</script>

<style scoped>
    .modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-color: black;
    }
    .cross-wrapper {
        display: flex;
        width: 100%;
        justify-content: end;
        margin-bottom: 64px;
    }
    .cross {
        font-size: 28px;
        line-height: 28px;
        margin: 18px 13px 0 0;
        color: #FFC700;
        cursor: pointer;
    }
    nav {
        display: flex;
        flex-direction: column;
        text-align: start;
    }
    a {
        font-family: 'Roboto';
        font-weight: 300;
        font-size: 16px;
        line-height: 22px;
        text-transform: uppercase;
        text-decoration: none;
        color: #FFFFFF;
        margin: 0 0 27px 7.19%;
    }
    #test {
        color: #F4CE0C;
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