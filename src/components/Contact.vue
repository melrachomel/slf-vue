<template>
<div class="cont">
  <div id="contact">

    <div class="rows">
      <div class="contact-img">
        <img src="../assets/abt_contact.png" alt="Contact Beth">
      </div>
      <div class="contact-text">
        <p>Bethany Rose Puttkemery (she/her)<br>
          <a href="mailto:hello@smellslikeflowers.com">hello@smellslikeflowers.com</a><br>
          <a href="#">@bethanyroserose</a>
        </p>
        <!-- <div v-if="['about'].indexOf($route.name) > -1" class="powr-social-feed" id="b710ff9b_1587487917"></div> -->
        <div class="powr-social-media-icons" id="63ad2b40_1587490701"></div>

        <div id="copyright">
          <p>&copy; {{ copyRight }} — Smells Like Flowers</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import Header from '@/components/Header.vue'
import backgroundUrl1 from '@/assets/abt_left.png'
import backgroundUrl2 from '@/assets/abt_right.png'

export default {
  name: 'about',
  components: {
    // Header,
    // HelloWorld,
    // VueInstagram
  },
  data() {
    return {
      isHome: false,
      info: null,
      backgroundUrl1,
      backgroundUrl2,
      copyRight: new Date().getFullYear()
    }
  },

  mounted() {
    let galleryScript = document.createElement('script')
    galleryScript.setAttribute('src', 'https://www.powr.io/powr.js?platform=wordpress')
    document.head.appendChild(galleryScript)
  }
}
</script>

<style lang="scss">
#copyright {
  text-align: right;
  font-size: .75em
}
</style>
