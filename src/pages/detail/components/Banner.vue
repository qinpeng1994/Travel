<template>
<div>
    <div class="banner" @click="handleBannerClick">
        <img  class="banner-img" :src="this.bannerImg">
        <div class="banner-info">
             <div class="banner-title">{{this.sightName}}</div>
             <div class="banner-number"><span class="iconfont banner-icon">&#xe674;</span>{{this.bannerImg.length}}</div>
        </div>
       
    </div>
    <fade>
    <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"/>
    </fade>
</div>
    
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import Fade from 'common/fade/Fade'
export default {
    name:'DetailBanner',
    props:['sightName','bannerImg'
    ],
    data(){
        return {
            imgs:["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg",
            "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
            ],
            showGallery:false
        }
    },
  components:{
      CommonGallery,
      Fade
  },
  methods:{
      handleBannerClick(){
          this.showGallery = true
      },
      handleGalleryClose(){
          this.showGallery = false
      }
  }
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow :hidden
        height:0
        padding-bottom:55%
        .banner-img
            width:100%
        .banner-info
            display :flex
            position :absolute
            left:0
            right :0
            bottom:0
            line-height :.6rem
            color:#fff
            background-image : linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex:1
                font-size:.32rem
                padding: 0 .2rem
            .banner-number
                margin-top: .14rem
                padding:0 .4rem
                height :.32rem
                line-height :.32rem
                border-radius:.2rem
                background :rgba(0,0,0,.8)
                font-size:.24rem
                .banner-icon
                    font-size: .24rem

</style>