<template>
<div id="app">
  <!-- {{ info }} -->
  <!-- <Header msg="Smells Like Flowers"/> -->

  <!-- <Home /> -->
  <Header msg="Smells Like Flowers ~ Home" />
  <router-view></router-view>
  <!-- <a href="mailto:hello@smellslikeflowers.com"><img src="./assets/slf_coming_soon.png" alt="coming soon"></a> -->
  <!-- <div class="video">
      <iframe src="https://player.vimeo.com/video/391521073" width="640" height="352" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div> -->

  <!-- <div class="ig">
    <vue-instagram token="accessTokenHere" :count="5" :tags="['hashtag1', 'hashtag2']" mediaType="image">
      <template v-slot:loading="props">
        <h1 v-if="props.loading" class="fancy-loading">Loading, please wait...</h1>
      </template>
      <template v-slot:feeds="props">
        <li class="fancy-list"> {{ props.feed.link }} </li>
      </template>
      <template v-slot:error="props">
        <div class="fancy-alert"> {{ props.error.error_message }} </div>
      </template>
    </vue-instagram>
    </div> -->


</div>
</template>

<script>
import Header from './components/Header.vue'


export default {
  name: 'app',
  components: {
    Header,
    // Home
    // VueInstagram
  },
  // el: '#app',
  data() {
    return {
      info: null
    }
  },
  mounted() {}
}
</script>

<style lang="scss">
html {
    overflow-x: hidden;
    /* Hide scrollbars */
}
#app {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    overflow-x: hidden;

    // TRANSITION EVERYTHING
    * {
        transition: all 0.1s ease-in;
        transition-property: all;
        transition-duration: 500ms;
        transition-timing-function: ease-in;
        transition-delay: 0s;
    }

    .menu {
        width: 100%;
        position: fixed;
        right: 0;
        top: 0;
        color: #ed2d2d;
        font-size: 1.5em;
        font-weight: bolder;
        z-index: 99999;
        ul {
            width: 100%;
            display: table;
            padding: 0;
            li {
                display: table-cell;
                padding: 10px;
                font-size: 1.5em;
            }
        }
        a {
            color: inherit;
            cursor: pointer;
            text-decoration: none;
        }
        a:hover {
            text-decoration: none;
        }
    }

}

@media screen and (min-width: 1024px) {
    #app {
        .menu {
            width: initial;
            background: none;
            position: fixed;
            right: 5%;
            top: 0;
            color: #ed2d2d;
            font-size: 1.5em;
            font-weight: bolder;
            z-index: 99999;

            ul {
                display: table;
                padding: 0;
                li {
                    display: table-cell;
                    padding: 10px;
                    font-size: 1.5em;
                }
            }
            a {
                color: inherit;
                cursor: pointer;
                text-decoration: none;
            }
            a:hover {
                text-decoration: none;
            }
        }
    }

}
</style>
