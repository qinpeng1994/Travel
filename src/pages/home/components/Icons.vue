<template>
  <div class="icons">
    <swiper >
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
  data() {
    return {
        iconsList:[
            {id:'0001',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',desc:'热门景点'},
            {id:'0002',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',desc:'滑雪记'},
            {id:'0003',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',desc:'滑雪记'},
            {id:'0004',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',desc:'滑雪记'},
            {id:'0005',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',desc:'滑雪记'},
            {id:'0006',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',desc:'滑雪记'},
            {id:'0007',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',desc:'滑雪记'},
            {id:'0008',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',desc:'滑雪记'},
            {id:'0009',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',desc:'滑雪记'},
            ],
    }
  },
  computed: {
      pages(){
          var pages = [];
          this.iconsList.forEach((item,index) => {
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