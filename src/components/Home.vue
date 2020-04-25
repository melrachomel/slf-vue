<template>
<div>
  <!--  -->
  <!-- {{ info }} -->

  <div class="rows animated fadeIn">
    <!-- Row1  -->
    <div class="bg-img float-r combine-r-30 fountain" :style="{ backgroundImage: `url(${backgroundUrl3})` }"></div>
    <!-- Row2  -->
    <div class="bg-img float-c mel" :style="{ backgroundImage: `url(${backgroundUrl4})` }"></div>
    <!-- Row3  -->
    <div class="bg-img float-c tangerine" :style="{ backgroundImage: `url(${backgroundUrl5})` }"></div>
    <!-- Row4  -->
    <div class="bg-img float-r combine-r-50 flower" :style="{ backgroundImage: `url(${backgroundUrl1})` }"></div>
    <!-- Row5 - embedded  -->
    <div class="bg-img float-c center tvline" :style="{ backgroundImage: `url(${backgroundUrl6})` }"></div>
    <!-- Row6  -->
    <div class="bg-img float-c center jules" :style="{ backgroundImage: `url(${backgroundUrl7})` }"></div>
    <!-- Row7 -->
    <div class="bg-img float-r combine-r-50 greendress" :style="{ backgroundImage: `url(${backgroundUrl8})` }"></div>
    <!-- Row8 -->
    <div class="bg-img float-l combine-l-30 florals" :style="{ backgroundImage: `url(${backgroundUrl9})` }"></div>
    <!-- Row7 -->
    <div class="bg-img float-r blob" :style="{ backgroundImage: `url(${backgroundUrl16})` }"></div>
    <!-- Row9 -->
    <div class="bg-img float-l combine-l-50 steve" :style="{ backgroundImage: `url(${backgroundUrl12})` }"></div>
    <!-- Row11 -->
    <div class="bg-img float-l combine-l-30 desk" :style="{ backgroundImage: `url(${backgroundUrl15})` }"></div>
    <!-- Row12 -->
    <div class="bg-img float-r combine-r-65 steve_alt" :style="{ backgroundImage: `url(${backgroundUrl13})` }"></div>
    <!-- Row9 -->
    <div class="bg-img float-r combine-r-30 foundfilm" :style="{ backgroundImage: `url(${backgroundUrl14})` }"></div>

  </div>
  <!-- end rows -->
  <contact></contact>


  <!-- <div class="video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/AJX8I7fWtcg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> -->



</div>
</template>

<script>
import backgroundUrl1 from '@/assets/hp_flower.png'
import backgroundUrl2 from '@/assets/hp_bethwynne.jpg'
import backgroundUrl3 from '@/assets/hp_fountain.png'
import backgroundUrl4 from '@/assets/hp_mel.png'
import backgroundUrl5 from '@/assets/hp_tangerine.png'
import backgroundUrl6 from '@/assets/hp_tvline.png'
import backgroundUrl7 from '@/assets/hp_jules.png'
import backgroundUrl8 from '@/assets/hp_greendress.png'
import backgroundUrl9 from '@/assets/hp_florals.jpg'
import backgroundUrl10 from '@/assets/hp_slfglitch.png'
import backgroundUrl11 from '@/assets/hp_slfglitch_alt1.png'
import backgroundUrl12 from '@/assets/hp_steve.png'
import backgroundUrl13 from '@/assets/hp_steve_alt1.png'
import backgroundUrl14 from '@/assets/hp_foundfilm.png'
import backgroundUrl15 from '@/assets/hp_mirror.png'
import backgroundUrl16 from '@/assets/hp_blob.png'
// import VueInstagram from 'vue-instagram'

export default {
  name: 'home',
  components: {
    // VueInstagram
  },
  data() {
    return {
      isHome: true,
      info: null,
      // flower
      backgroundUrl1,
      // small mel
      backgroundUrl2,
      // fountain
      backgroundUrl3,
      // large mel
      backgroundUrl4,
      // tangerine
      backgroundUrl5,
      // tv line
      backgroundUrl6,
      // jules
      backgroundUrl7,
      // green dress
      backgroundUrl8,
      // florals
      backgroundUrl9,
      // slf glitch 1
      backgroundUrl10,
      // slf glitch 2
      backgroundUrl11,
      // steve
      backgroundUrl12,
      // steve alt 1
      backgroundUrl13,
      // hp_foundfilm
      backgroundUrl14,
      // mirror
      backgroundUrl15,
      // blob
      backgroundUrl16
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
#site-logo {
    margin-top: 5%;
    position: absolute;
    max-width: 180px;
}

h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: inherit;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.rows {
    // overflow: auto;
    clear: both;
    .bg-img {
        height: 50vh;
        width: 100%;
        margin: 0 auto;
        position: static;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
}

/* INDIVIDUAL EL STYLING */

.bg-img.float-c.mel {
    padding-top: 50px;
    margin-left: -20%;
}

.bg-img.float-r.fountain {
    margin-right: 10%;
    margin-top: 30%;
}

// .bg-img.float-r.flower {
//     margin-right: 0;
//     width: 100%;
//     height: 100vh;
// }

.bg-img.float-c.tangerine {
    width: 130%;
    margin-left: -10%;
}

.bg-img.float-c.tvline {
    background-size: contain;
    margin: 0 auto;
    height: 100vh;
    margin-top: 0;
}

.bg-img.center.jules {
    margin-top: 0;
    height: 60vh;
}

.bg-img.float-l.florals {
    width: 100%;
    margin-top: 0;
}

.bg-img.float-r.greendress {
    margin-top: 0;
    width: 100%;
    height: 40vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
}

.bg-img.float-r.blob {
    height: 50vh;
    width: 100%;
    margin-top: 0;
    margin-right: 0;
}

.bg-img.float-l.steve {
    width: 100%;
    background-size: cover;
    height: 100vh;
    margin-top: 0;
    margin-left: 0;
}

.bg-img.float-l.desk {
    height: 50vh;
    width: 40%;
    margin-left: -20%;
}

.bg-img.float-r.steve_alt {
    width: 80%;
    height: 70vh;
    margin-top: -60%;
    margin-right: -10%;
}

.bg-img.float-r.foundfilm {
    height: 40vh;
    margin-top: -10%;
    width: 100%;
    background-position: center center;
    background-size: contain;
    width: 100%;
}

/* INDIVIDUAL EL STYLING */

.clearfix {
    overflow: auto;
    clear: none;
    width: 100%;
}

#contact {

    .contact-text {
        p {
            color: #ed2d2d;
            font-weight: bold;
            font-size: 1.15em;
        }
    }
}

@media screen and (min-width: 768px) {
  .rows {
    .bg-img.float-r.fountain {
      margin-top: initial;
    }
  }
}

@media screen and (min-width: 1366px) {
    .rows {
        .bg-img.float-r.flower {
            margin-right: -30%;
            width: 100%;
            height: 100vh;
            margin-top: 0;
        }

        .bg-img.float-c.tvline {
            background-size: contain;
            margin-left: -30%;
            height: 200vh;
            margin-top: -20%;
        }

        .bg-img.center.jules {
            height: 130vh;
            margin-top: -110%;
        }

        .bg-img.float-l.steve {
            width: 100%;
            background-size: cover;
            height: 200vh;
            margin-top: 10%;
            margin-left: -10%;
        }
    }
}

@media screen and (min-width: 1264px) and (max-width: 1405px) {

    .rows {
        /* INDIVIDUAL EL STYLING */

        .bg-img.float-c.mel {
            padding-top: 50px;
            margin-left: -20%;
        }

        .bg-img.float-r.fountain {
            margin-right: 10%;
            margin-top: initial;
        }

        .bg-img.float-r.flower {
            margin-right: -20%;
            width: 100%;
            height: 100vh;
        }

        .bg-img.float-c.tangerine {
            width: 130%;
            margin-left: -10%;
        }

        .bg-img.float-c.tvline {
            background-size: contain;
            margin: 0 auto;
            height: 290vh;
            margin-top: -20%;
        }

        .bg-img.center.jules {
            margin-top: -150%;
            height: 140vh;

        }

        .bg-img.float-l.florals {
            width: 100%;
            margin-top: 0;
            margin-left: 20%;
        }

        .bg-img.float-r.greendress {
            margin-top: 0;
            width: 100%;
            height: 40vh;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
        }

        .bg-img.float-r.blob {
            height: 50vh;
            width: 100%;
            margin-top: 0;
            margin-right: 0;
        }

        .bg-img.float-l.steve {
            width: 100%;
            background-size: cover;
            height: 230vh;
            margin-top: 0;
            margin-left: -10%;
        }

        .bg-img.float-l.desk {
            height: 50vh;
            width: 40%;
            margin-left: -20%;
        }

        .bg-img.float-r.steve_alt {
            width: 80%;
            height: 70vh;
            margin-top: -60%;
            margin-right: 0;
        }

        .bg-img.float-r.foundfilm {
            height: 40vh;
            margin-top: -10%;
            margin-right: -10%;
            width: 100%;
            background-position: center center;
            background-size: contain;
            width: 100%;
        }

    }

    /* INDIVIDUAL EL STYLING */
}

@media screen and (min-width: 1024px) {

    #site-logo {
        margin-top: initial;
        position: fixed;
        z-index: 9999;
        max-width: 300px;
    }

    .rows {
        max-width: 1024px;
        margin: 0 auto;
        .bg-img {
            background: no-repeat;
            background-size: contain;
            height: 100vh;
            /* width: 100px; */
        }

        .float-l {
            /* float: left; */
            margin: 0 auto 0 0;
            background-position-x: left;
        }

        .float-c {
            margin: 0 auto;
            /* width: 400px; */
            background-position: center center;
        }

        .float-r {
            /* float: right; */
            margin: 0 0 auto auto;
            background-position-x: right;
        }

        .combine-r-50 {
            background-position-x: right;
            width: 50%;
            float: right;
        }

        .combine-r-30 {
            background-position-x: right;
            width: 30%;
            float: right;
        }

        .combine-r-65 {
            background-position-x: right;
            width: 65%;
            float: right;
        }

        .combine-l-30 {
            background-position-x: left;
            width: 30%;
            float: left;
        }

        .combine-l-50 {
            background-position-x: left;
            width: 50%;
            float: left;
        }

        .combine-c-100 {
            /* background-position-x: left; */
            width: 100%;
            position: absolute;
            /* float: left; */
        }

        .center {
            text-align: center;
        }

        .margin-top-offset-15 {
            margin-top: -15%;
        }

        .margin-top-offset-35 {
            margin-top: -35%;
        }

        .margin-top-offset-50 {
            margin-top: -50%;
        }

        .margin-top-offset-75 {
            margin-top: -75%;
        }

        .margin-top-add-50 {
            margin-top: 50%;
        }

        // START CUSTOM STYLING

        .bg-img.float-r.flower {
            // margin-right: -30%;
            margin-top: -5;
            width: 80%;
            height: 140vh;
        }

        .bg-img.float-r.greendress {
            margin-top: -10%;
        }

        .bg-img.float-c.tvline {
            background-size: contain;
            margin-left: -30%;
            // height: 200vh;
            // margin-top: -40%;
        }

        // .bg-img.center.jules {
        //     margin-top: -140%;
        // }

        .bg-img.float-l.florals {
            width: 50%;
            margin-top: 10%;
        }

        .bg-img.float-r.blob {
            height: 50vh;
            width: 70%;
            margin-top: 70%;
            margin-right: -35%;
        }

        //END OF CUSTOM BG

    }
    .video {
        iframe {
            margin-top: 30px;
            max-width: 1024px;
        }
    }
}

.video {
    iframe {
        margin-top: 30px;
        max-width: 100%;
    }
}
</style>
