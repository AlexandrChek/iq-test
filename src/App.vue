<template>
  <MainHeader/>
  <router-view/>
  <BlueQuote/>
  <WhatYouGet/>
  <BigPromises/>
</template>

<script>
  import MainHeader from './components/MainHeader.vue'
  import BlueQuote from './components/BlueQuote.vue'
  import WhatYouGet from './components/WhatYouGet.vue'
  import BigPromises from './components/BigPromises.vue'

  export default {
    name: 'IqTest',
    components: {
      MainHeader,
      BlueQuote,
      WhatYouGet,
      BigPromises
    }
  }
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'PT Serif';
  font-style: normal;
  text-align: center;
}

@media(min-width: 992px) {
  #app {
    background: radial-gradient(rgb(230, 70, 190), rgb(65, 15, 107));
  }
}
</style>
