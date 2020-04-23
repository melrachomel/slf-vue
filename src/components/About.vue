<template>
<div class="cont about">
  <div id="about">
    <div class="rows animated fadeIn ">
      <div class="bio-text">
        <!-- <img class="page-logo" src="@/assets/abt_logo.png"> -->
        <!-- <div class="bg-img" style="background-image: url('@/assets/abt_left.png')"></div> -->
        <div class="bg-img l-illustration" :style="{ backgroundImage: `url(${backgroundUrl1})` }"></div>

        <div class="abt-text">

          <p><em>Smells Like Flowers</em> understands that flowers shift the energy of a space. For that reason, creator, Bethany Rose Puttkemery, specializes in environmental installation. Her goal is to always capture a precise feeling and moment
            in time. The result is nuanced design that is immensely customized for each of her clients.</p>

          <p>As a queer womxn Puttkemery prioritizes collaborations and clients that support and uplift her community.</p>

          <p>Service Offerings: creative installation, art direction, corporate event design, select weddings, floral subscriptions and customized workshops.</p>
          <!-- <div class="abt-right">
              <img src="@/assets/abt_right.png">
            </div> -->
        </div>

        <div class="bg-img r-illustration" :style="{ backgroundImage: `url(${backgroundUrl2})` }"></div>


      </div>

      <!-- <div class="bg-img bio-img margin-top-offset-15"></div> -->
    </div>

  </div>
  <contact></contact>


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

    }
  },

}
</script>

<style lang="scss">
#about {

    .rows {
      .page-logo {
          position: static;
          max-width: 400px;
      }
      .bio-text {
          height: auto;
      }
      .bio-img {
          background-image: url("../assets/abt_bg.png");
      }
      .bio-text {
          width: 100%;
          margin: 0 auto;
          // height: auto;
          p {
              color: #ed2d2d;
              font-weight: bold;
              font-size: 1.15em;
          }
      }

      .abt-text {
          position: static;
      }

      .bg-img.l-illustration {
          position: static;

      }

      .bg-img.r-illustration {
          position: static;
      }
    }


}

.about.cont #contact {
    position: static;
    .contact-img {
        img {
            max-width: 200px;
        }
    }
    .contact-text {
        p {
            color: #ed2d2d;
            font-weight: bold;
            font-size: 1.25em;
        }
    }
}

@media screen and (min-height: 666px){


    #about {
        .rows {

          .page-logo {
              max-width: 300px;
          }

            .bio-img {
                background-size: contain;
                background-repeat: no-repeat;
                height: 100vh;
                width: 80%;
            }

            .abt-text {
                // position: absolute;
                // z-index: 1000;
                max-width: 1024px;
            }

            .bg-img.l-illustration {
                width: 350px;
                height: 40vh;
                // float: left;
                // position: absolute;
                // left: -5%;
                // top: 50%;
            }

            .bg-img.r-illustration {
                width: 350px;
                height: 40vh;
                // float: right;
                // position: absolute;
                // right: -5%;
                // top: 50%;
            }

        }
    }

    .about.cont #contact {
      position: absolute;
      width: 100%;
      bottom: -85%;
    }

}
</style>
