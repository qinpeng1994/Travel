<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  setup(props) {
    const swiperOption = {
      pagination: '.swiper-pagination',
      loop: true
    }
    const showSwiper = computed(() => props.list.length)
    return { swiperOption, showSwiper }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
