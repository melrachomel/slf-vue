<template>
<div class="cont">
  <div id="gallery">
    <div class="rows animated fadeIn">
      <div class="bio-text">
        <!-- <router-link :to="{ name: 'gallery', params: {} }">
          <img class="page-logo" src="@/assets/gallery_logo.png">
        </router-link> -->
        <!-- <div class="bg-img l-illustration" :style="{ backgroundImage: `url(${backgroundUrl1})` }"></div>
        <div class="bg-img r-illustration" :style="{ backgroundImage: `url(${backgroundUrl2})` }"></div> -->
      </div>
      <div class="bg-img l-illustration" :style="{ backgroundImage: `url(${backgroundUrl1})` }"></div>
      <router-view></router-view>
      <div class="bg-img r-illustration" :style="{ backgroundImage: `url(${backgroundUrl2})` }"></div>

    </div>

  </div>
  <contact></contact>

</div>
</template>

<script>
// import Header from '@/components/Header.vue'
import backgroundUrl1 from '@/assets/gallery_left.png'
import backgroundUrl2 from '@/assets/gallery_right.png'
// import photos from '@/assets/'


// import HelloWorld from './components/HelloWorld.vue'
// import VueInstagram from 'vue-instagram'

export default {
  name: 'galleryMain',
  components: {
    // Header,
    // HelloWorld,
    // VueInstagram
  },
  data() {
    return {
      info: null,
      backgroundUrl1,
      backgroundUrl2,


    }
  },

}
</script>

<style lang="scss">
#gallery .page-logo {
    position: static;
    max-width: 400px;
}

#gallery {
    .bio-img {
        background-image: url("../assets/abt_bg.png");
    }
    .bio-text {
        width: 100%;
        margin: 0 auto;
        height: auto;
        p {
            color: #ed2d2d;
            font-weight: bold;
            font-size: 1.15em;
        }
    }
    .gallery {
        width: 50%;
        float: left;
        a {
            display: block;
            padding: 10px;
            img {
                width: 100%;
            }
        }
    }

    .gallery-text {
        position: static;
    }

    .bg-img.l-illustration {
        margin-top: 10%;
        width: 100%;
        height: 20vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .bg-img.r-illustration {
        margin-top: 10%;
        width: 100%;
        height: 20vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .pa-gallery-player-widget {
        margin-bottom: 1.1em;
    }

}

#contact {
    .contact-img {
        img {
            max-width: 200px;
        }
    }
    .contact-text {
        p {
            color: #ed2d2d;
            font-weight: bold;
            font-size: 1.15em;
        }
    }
}

@media screen and (min-width: 1280px) {
    #gallery {
        .page-logo {
            max-width: 370px;
        }
        .bg-img.l-illustration {
          margin-top: 0;
            width: 350px;
            height: 40vh;
            // float: left;
            // position: absolute;
            // left: -7%;
            // top: 40%;
        }

        .bg-img.r-illustration {
          margin-top: 0;
            width: 350px;
            height: 40vh;
            // float: right;
            // position: absolute;
            // right: -5%;
            // top: 40%;
        }
    }

}

@media screen and (min-width: 1024px) and (max-width: 1279px) {

    #gallery {
        .rows {

            .bio-text {
                // height: 75vh;

            }

            .bio-img {
                background-image: url("../assets/abt_bg.png");
                background-size: contain;
                background-repeat: no-repeat;
                height: 100vh;
                width: 80%;
            }


            .bg-img.l-illustration {
                width: 350px;
                height: 40vh;
                // float: left;
                position: static;
                // left: 0;
                top: 40%;
            }

            .bg-img.r-illustration {
                width: 350px;
                height: 40vh;
                // float: right;
                position: static;
                right: 0;
                top: 40%;
            }

        }
    }

}
</style>
