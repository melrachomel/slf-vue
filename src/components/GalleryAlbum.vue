<template>
<div class="clearfix">
  <div class="container" v-for="pic in pics" :key="pic.id">
    <div class="album" v-if="$route.params.id == pic.id">
      <h2 class="album-title">{{pic.name}}</h2>
      <div v-html="pic.html"></div>

    </div>

  </div>
</div>
</template>

<script>
// import Header from '@/components/Header.vue'

import album1 from '@/assets/album_5.png'
import album2 from '@/assets/album_3.png'
import album3 from '@/assets/album_1.png'
import album4 from '@/assets/album_7.png'
import album5 from '@/assets/album_8.png'
import album6 from '@/assets/album_4.png'
import album7 from '@/assets/album_2.png'
import album8 from '@/assets/album_6.png'

// import HelloWorld from './components/HelloWorld.vue'
// import VueInstagram from 'vue-instagram'

export default {
  name: 'galleryAlbum',
  components: {
    // Header,
    // HelloWorld,
    // VueInstagram
  },
  data() {
    return {
      info: null,

      pics: [{
          id: 1,
          src: album1,
          name: 'Cues from colour',
          url: '#',
          html: '<div class="powr-media-gallery" id="59b9adca_1587395494"></div>'
        },
        {
          id: 2,
          src: album2,
          name: 'A Night in October',
          url: '#',
          html: '<div class="powr-media-gallery" id="34f0a2a1_1587393011"></div>'

        },
        {
          id: 3,
          src: album3,
          name: 'Laundry Day',
          url: '#',
          html: '<div class="powr-media-gallery" id="078707b0_1587153548"></div>'

        },
        {
          id: 4,
          src: album4,
          name: 'It was always you',
          url: '#',
          html: '<div class="powr-media-gallery" id="6c7ac1e2_1587479454"></div>'

        },
        {
          id: 5,
          src: album5,
          name: 'Not Like The Others',
          url: '#',
          html: '<div class="powr-media-gallery" id="7012a625_1587485354"></div>'

        },
        {
          id: 6,
          src: album6,
          name: 'Always',
          url: '#',
          html: '<div class="powr-media-gallery" id="577a8e67_1587407540"></div>'

        },
        {
          id: 7,
          src: album7,
          name: 'Le Dejuner sur l’herbe',
          url: '#',
          html: '<div class="powr-media-gallery" id="b94c6c6c_1587480844"></div>'

        },
        {
          id: 8,
          src: album8,
          name: 'For Forever',
          url: '#',
          html: '<div class="powr-media-gallery" id="cb84601e_1587479113"></div>'

        }
      ]
    }
  },
  mounted() {
    // this.moveToBack()

    let galleryScript = document.createElement('script')
    galleryScript.setAttribute('src', 'https://www.powr.io/powr.js?platform=wordpress')
    document.head.appendChild(galleryScript)
  },
  methods: {
    // moveToBack() {
    //   var el = document.querySelector(".menu");
    //   el.setAttribute("id", "album");
    //
    //   document.addEventListener('click', function (event) {
    //     if (event.target.closest('.cont')) {
    //       document.getElementById("album").setAttribute("style", "display:none")
    //     }
    //
    //   }, false)
    // }
  }
}
</script>

<style lang="scss" scoped>
.container {
    .album-title {
      margin: 15% 0;
        color: #ed2d2d;
        text-align: center;
    }
}

@media screen and (min-width: 768px) {
  .container {
      .album-title {
          margin: initial;
          color: #ed2d2d;
          text-align: center;
      }
  }
}
</style>
