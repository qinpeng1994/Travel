<template>
<div class="wrap">
  <div class="sidebar">
      <div class="top">
          <img src="../assets/images/timg.jpeg" alt="" class="avatar">
          <span class="name">去哪儿</span>
      </div>
      <div class="menubar">
          <div>
              <i class="icon iconfont icon-shoucang"></i>
              <span>收藏</span>
          </div>
          <div>
              <i class="icon iconfont icon-xiaoxi"></i>
              <span>消息</span>
          </div>
          <div>
              <i class="icon iconfont icon-shezhi"></i>
              <span>设置</span>
          </div>

      </div>
      <div class="menubar">
          <div>
              <span>
                  <router-link to="/login">登录</router-link>
              </span>
          </div>
          <div>
              <span>
                  注册
              </span>
          </div>
      </div>
       
  </div>
   <div class="mask" @click="close"></div>
  </div>
</template>
<style lang="stylus" scoped>
// @import '../assets/css/sideBar.stylus';
</style>
<script>
export default {
    methods:{
        close(){
            this.$emit("hideBar");
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrap
  z-index  10
  .sidebar
    position   fixed
    width  60%
    height  100%
    background  #232a30
    z-index  12
    color  #94999d
    display  flex
    flex-direction  column
    .top
      height  60px
      line-height  60px
      padding-left  20px
      .avatar
        width  36px
        border-radius  50%
        line-height  36px
        margin-right  12px
        margin-top 15px
      span
        font-size 20px
        vertical-align top
      
    .menubar 
      height  60px
      display  flex
      margin-bottom  10px
      div
        width  33.3%
        text-align  center
        line-height  1.2
        .icon
          font-size  24px
        span
          transform  scale(.75)
          display  inline-block
          font-size 20px
    .menu-wrapper , -webkit-scrollbar
      display  none
    .menu-wrapper
      padding  0 20px
      flex  auto
      overflow  auto
      ul
        padding  0
      .menu-item
        height  50px
        line-height  50px
        font-size  14px
        .icon-shouyeshouye
          font-size  20px
        .icon-more
          float  right
    .foot-menu
      flex  0 0 40px
      line-height  40px
      text-align  center
      display  flex
      .icon
        width  50%
        font-size  16px
  .mask
    position  fixed
    left  0
    top  0
    width  100%
    height  100%
    background  #000
    opacity  0.3
    z-index  11
</style>