<template>
    <div>
      <home-header :city="city"/>
      <home-swiper :list="swiperList"/>
      <home-icons :list="iconList"/>
      <home-recommend :list="recommendList"/>
      <home-weekend :list="weekendList"/>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data(){
    return{
      city:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  mounted(){
    this.getHomeInfo()
  },
  methods:{
    getHomeInfo(){
       axios('/api/index.json').then(resp =>{
        //  console.log(resp)
         var res = resp.data
         if(res.ret  && res.data){
           const data = res.data
           this.city = data.city
           this.swiperList = data.swiperList
           this.iconList = data.iconList
           this.recommendList = data.recommendList
           this.weekendList = data.weekendList
         }

      })
    }
   
  }


}
</script>

<style>
</style>
