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

<style scoped>
  .menu-wrapper {
    width: 8.4%;
    height: 34.78%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 2.45vh;
    margin-left: 4.69%;
    z-index: 3;
    cursor: pointer;
  }
  .stick {
    width: 100%;
    height: 16.69%;
    background: #696969;
  }

  @media(min-width: 576px) {
    .menu-wrapper {
      width: 5.5%;
      margin-top: 17px;
    }
  }
  @media(min-width: 768px) {
    .menu-wrapper {
      width: 5%;
      height: 37%;
      margin-top: 2.45vh;
    }
    .stick {
      height: 14%;
    }
  }
  @media(min-width: 992px) {
    .menu-wrapper {
      width: 4.2%;
    }
  }
  @media(min-width: 1400px) {
    .menu-wrapper {
      width: 3.5%;
      margin-left: 3.5%;
    }
  }
</style>
