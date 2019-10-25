<template>
  <div >
    <ul class="list" >
      <li class="item" v-for="(item,key) of city" :key="key">{{key}}</li>
     
    </ul>
  </div>
</template>
<script>
export default {
  name: "City-Alphabet",
  props:{
    city:Object
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    position :absolute
    top:1.58rem
    right:0
    bottom:0
    width:.4rem
    text-align :center
    display:flex
    flex-direction :column
    justify-content :center
    .item
        line-height :.4rem
        color :$bgColor
   
</style>