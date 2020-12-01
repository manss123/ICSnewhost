<template>
  <div id="app">
    <Navbar/>
    <router-view />
    <div class="hide-on-med-and-up" style="height: 150px;"></div>
    <div class="hide-on-small-only" style="height: 250px;"></div>
    <Footer/>
  </div>
  
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default {
  name: 'App',
    components:{
      Navbar,
      Footer
    }
  }

</script>

<style>

</style>