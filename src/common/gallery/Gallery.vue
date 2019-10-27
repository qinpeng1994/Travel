<template>
  <div class="container" @click="handleBannerShow">
    <div class="wrapper">
      <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img class="gallery-img" :src="item" />
       </swiper-slide>
       
          <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonGallery",
  props:{
      imgs:{
          type: Array,
          default(){
          return []
      }
      }
      
  },
   data (){
        return{
        swiperOption:{
            pagination:'.swiper-pagination',
            paginationType:'fraction',
            observer:true,
            observeParents:true
        }
        }
        
    },
    methods:{
        handleBannerShow(){
            this.$emit('close')
        }
    }
};
</script>
<style lang="stylus" scoped>
.container  >>> .swiper-container
    overflow :inherit
.container 
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #000
  .wrapper 
    // overflow :hidden
    height:0
    width:100%
    padding-bottom:100%
    .galley-img
        width:100%
    .swiper-pagination
        color:#fff
        bottom:-1rem
  

</style>