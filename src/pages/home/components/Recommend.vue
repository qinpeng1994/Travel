<template>
    <div>
       <div class="title">热销推荐</div>
       <ul>
           
           <router-link
            tag="li"
            class="content border-bottom" 
            v-for="item of list" 
            :key="item.id"
            :to = " '/detail/' + item.id">
               <div class="content-img">
                    <img class="img" :src="item.imgUrl" >
               </div>
               <div class="content-desc">
                   <p class="desc-title">{{item.title}}</p>
                   <p class="desc-intro">{{item.desc}}</p>
                   <button class="btn">查看详情</button>
               </div>
           </router-link>
       </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    props:{
        list:Array
    },
    data(){
        return{
          
        }
    }
    
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
        background :#eee
        line-height :.8rem
        text-indent:.2rem
        margin-top:.2rem
    .content
        display :flex
        width :100%
        .content-img
            .img
                width :1.8rem
                height :1.7rem
                padding:.1rem
        .content-desc
            flex:1
            margin-top:.2rem
            min-width :0
            .desc-title
                font-size :.3rem
                font-weight:bold
                ellipsis()
            .desc-intro
                padding:.1rem
                color:#ccc
                ellipsis()
            .btn
                background :#ff9300
                margin-top:.16rem
                line-height :.4rem
                padding:0 .2rem
                border-radius:.06rem
                color:#fff


            
            


</style>