<template>
  <div class="home">
    
    <img alt="Vue logo"  src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <img alt="Vue logo"  src="../assets/logo.png">
    <FooterModule/>
    <img alt="Vue logo" class="p-12" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FooterModule from '@/components/FooterModule.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    FooterModule
  }
}
</script>
