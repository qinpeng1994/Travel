<template>
    <div>
       <div class="title">热销推荐</div>
       <ul>
           <li class="content border-bottom" v-for="item of recommonedList" :key="item.id">
               <div class="content-img">
                    <img class="img" :src="item.imgUrl" >
               </div>
               <div class="content-desc">
                   <p class="desc-title">{{item.title}}</p>
                   <p class="desc-intro">{{item.desc}}</p>
                   <button class="btn">查看详情</button>
               </div>
           </li>
       </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    data(){
        return{
            recommonedList:[
                {id:'0001',imgUrl:'https://imgs.qunarzz.com/p/tts8/1711/f9/e333d8fa04073702.jpg_r_390x260x90_0cdb3ec5.jpg',
                title:'大连圣亚海洋世界',desc:'浪漫大连首站，浪漫的海洋主题乐园'},
                {id:'0002',imgUrl:'https://imgs.qunarzz.com/p/tts8/1711/f9/e333d8fa04073702.jpg_r_390x260x90_0cdb3ec5.jpg',
                title:'大连圣亚海洋世界',desc:'浪漫大连首站，浪漫的海洋主题乐园'},
                  {id:'0003',imgUrl:'https://imgs.qunarzz.com/p/tts8/1711/f9/e333d8fa04073702.jpg_r_390x260x90_0cdb3ec5.jpg',
                title:'大连圣亚海洋世界',desc:'浪漫大连首站，浪漫的海洋主题乐园'}
                ]
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