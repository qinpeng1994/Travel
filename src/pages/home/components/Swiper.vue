<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img  class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
    data (){
        return{
        swiperOption:{
            pagination:'.swiper-pagination',
            loop:true
        },
        swiperList:[
            { id:'0001',imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg"},
            { id:'0002',imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/478f98476b86f665c958d01f39e14ace.jpg"}
            ]
        }
        
    }
    
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background:#fff
        // 解决轮播图下抖动
    .wrapper
        width:100%
        height:0
        overflow:hidden
        padding-bottom:31.25%
        background:#fff
        .swiper-img
            width:100%
</style>
