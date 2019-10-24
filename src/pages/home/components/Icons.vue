<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(itemList,index) of pages" :key="index">
        <div class="icon" v-for="item of itemList" :key="item.id">
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src="item.imgUrl"
            />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props:{
    list:Array
  },
  data() {
    return {
       swiperOption:{
            autoplay:false
        }
  
    }
  },
  computed: {
      pages(){
          var pages = [];
          this.list.forEach((item,index) => {
              var page = Math.floor(index/8)
              if(!pages[page]){
                  pages[page] = []
              }
              pages[page].push(item)
          })
          return pages;
      }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%
.icon 
    position: relative
    float: left
    width: 25%
    padding-bottom: 25%
    overflow: hidden
    .icon-img 
        border-sizing: border-box
        padding: 0.1rem
        position: absolute
        top: 0
        left: 0
        bottom: 0.44rem
        right: 0
        .icon-img-content 
            display: block
            margin: 0 auto
            height: 100%
    .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        color: $darkTextColor
        height: 0.44rem
        line-height: 0.44rem
        text-align: center
        ellipsis()
    
  

</style>