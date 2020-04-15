<template>
<div class="head animated fadeIn">
  <vue-headful title="Smells Like Flowers" />

  <nav>
    <router-link :to="{ name: 'home', params: {} }">
      <img alt="Smells Like Flowers logo" id="site-logo" src="@/assets/logo.png">
      <!-- <img v-if="$route.name === 'home'" alt="Vue logo" id="site-logo" src="@/assets/logo.png"> -->
      <!-- <img v-else alt="Vue logo" id="site-logo" src="@/assets/abt_logo.png"> -->
    </router-link>
    <div class="menu">
      <ul>
        <!-- <li>About</li> -->
        <!-- <li><router-link to="/home">Home</router-link></li> -->
        <li v-if="['about', 'gallery'].indexOf($route.name) > -1">
          <router-link to="/"><strong>Home</strong></router-link>
        </li>
        <li v-if="['home', 'gallery'].indexOf($route.name) > -1">
          <router-link to="/about"><strong>About</strong></router-link>
        </li>
        <li v-if="['home', 'about'].indexOf($route.name) > -1">
          <router-link to="/gallery"><strong>Gallery</strong></router-link>
        </li>
        <li><a href="https://smells-like-flowers.myshopify.com/">Shop</a></li>



        <!-- <li><a href="mailto:hello@smellslikeflowers.com"><strong>Contact</strong></a></li> -->
      </ul>
    </div>
  </nav>

</div>
</template>

<script>


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.head {
    position: absolute;
    height: 100px;
    width: 100%;
    z-index: 9999;
}
</style>
