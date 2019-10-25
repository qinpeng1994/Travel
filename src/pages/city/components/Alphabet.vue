<template>
  <div >
    <ul class="list">
      <li class="item">A</li>
      <li class="item">B</li>
      <li class="item">C</li>
      <li class="item">D</li>
      <li class="item">E</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "City-Alphabet"
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