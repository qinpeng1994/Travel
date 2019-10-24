<template>
    <div>
       <div class="title">周末去哪儿</div>
       <ul>
           <li class="content border-bottom" v-for="item of recommonedList" :key="item.id">
               <div class="content-img">
                    <img class="img" :src="item.imgUrl" >
               </div>
               <div class="content-desc">
                   <p class="desc-title">{{item.title}}</p>
                   <p class="desc-intro">{{item.desc}}</p>
               </div>
           </li>
       </ul>
    </div>
</template>
<script>
export default {
    name:'HomeWeekend',
    data(){
        return{
            recommonedList:[
                {id:'0001',imgUrl:'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
                title:'杭州必打卡',desc:'浪漫杭州，西湖美景'},
                 {id:'0002',imgUrl:'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
                title:'杭州必打卡',desc:'浪漫杭州，西湖美景'},
                 {id:'0003',imgUrl:'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
                title:'杭州必打卡',desc:'浪漫杭州，西湖美景'}
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
        width :100%
        .content-img
            width :100%
            height : 38vw
            img 
                width :100%
        .content-desc
            flex:1
            margin-top:.2rem
            min-width :0
            margin-left:.2rem
            .desc-title
                font-size :.3rem
                ellipsis()
            .desc-intro
                padding:.1rem
                color:#ccc
                ellipsis()
           


            
            


</style>