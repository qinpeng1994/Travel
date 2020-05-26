<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="elem => elems[key] = elem"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch, onMounted, ref } from 'vue'
import Bscroll from 'better-scroll'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const currentCity = store.state.city
    const elems = ref({})
    const wrapper = ref(null)
    const sroll = null

    function handleCityClick(city) {
      store.commit('changeCity', city)
      router.push('/')
    }

    watch(() => props.letter, (letter, prevLetter) => {
      if (letter && scroll) {
        const element = elems.value[letter]
        scroll.scrollToElement(element)
      }
    })

    onMounted(() => {
      scroll = new Bscroll(wrapper.value, {
        click: true
      })
    })

    return { elems, wrapper, currentCity, handleCityClick }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
