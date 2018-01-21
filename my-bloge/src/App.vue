<template>
  <div id="app">
<!-- <add-bloge></add-bloge> -->
<!-- <show-bloges></show-bloges> -->

<blog-header></blog-header>
<router-view></router-view>

  </div>
</template>

<script>
import AddBloge from './components/AddBloge'
import ShowBloges from './components/ShowBloges'
import BlogHeader from './components/BlogHeader'





export default { 
  name: 'app',
  components: {
    AddBloge,ShowBloges,BlogHeader
  }
}
</script>

<style>


</style>
