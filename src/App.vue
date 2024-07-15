<template>
  <div class="app">
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/common/header/Navbar.vue";
import Footer from "@/components/common/footer/Footer.vue";

export default {
  components: {Footer, Navbar}

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}

</style>