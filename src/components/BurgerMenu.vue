<template>
  <div class="menu-wrapper" @click="openMenu">
    <div class="stick" v-for="el in 3"></div>
  </div>
  <ModalMenu v-if="menu" @modalClosed="closeMenu"/>
</template>

<script>
import ModalMenu from './ModalMenu.vue'

export default {
  name: 'BurgerMenu',
  components: {ModalMenu},
  data() {
    return {
      menu: false
    }
  },
  methods: {
    openMenu() {
      this.menu = true
    },
    closeMenu() {
      this.menu = false
    }
  }
}
</script>

<style scoped lang="scss">
  .menu-wrapper {
    width: 8.4%;
    height: 34.78%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 17px;
    margin-left: 4.69%;
    z-index: 3;
    cursor: pointer;
    @media(min-width: 576px) {
      width: 5.5%;
    }
    @media(min-width: 768px) {
      width: 5%;
      height: 37%;
    }
    @media(min-width: 992px) {
      width: 4.2%;
    }
    @media(min-width: 1200px) {
      width: 3.7%;
    }
    @media(min-width: 1400px) {
      width: 3%;
      margin-left: 3.5%;
    }
  }
  .stick {
    width: 100%;
    height: 16.69%;
    background: #696969;
    @media(min-width: 768px) {
      height: 14%;
    }
  }
</style>
