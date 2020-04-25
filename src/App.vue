<template>
<div id="app">
  <Header msg="Smells Like Flowers ~ Home" />
  <router-view></router-view>

</div>
</template>

<script>
import Header from './components/Header.vue'


export default {
  name: 'app',
  components: {
    Header,
  },
  data() {
    return {
      info: null
    }
  }
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
        transition-duration: 250ms;
        transition-timing-function: ease-in;
        transition-delay: 0s;
    }

    .menu {
        // width: 100%;
        position: fixed;
        right: 0;
        top: 0;
        color: #ed2d2d;
        font-weight: bolder;
        z-index: 99999;
        ul {
            width: 100%;
            display: table;
            padding: 0;
            li {
                display: table-cell;
                padding: 10px;
                text-align: center;
                font-size: 1.25em
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
