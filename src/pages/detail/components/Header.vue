<template>
    <div>
        <router-link 
        class="header-abs" 
        tag="div"
        to ="/"
        v-show="showAbs"
        :style="opacityStyle"
        >
             <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs">
             
            <router-link to="/">
                 <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
             城市选择
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailHeader',
    data(){
        return{
            showAbs: true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    activated(){
        window.addEventListener('scroll',this.handleScroll)
    },
    methods:{
        handleScroll(){
            const result = document.documentElement.scrollTop
            if(result >60){
                let opacity = result/140
                opacity=opacity >1?1:opacity
                this.opacityStyle = {opacity}
                this.showAbs = false
            }else{
                this.showAbs = true
            }
        }
    }
    
}
</script>
<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
.header-abs
    position:absolute
    left:.2rem
    top:.2rem
    width :.8rem
    height :.8rem
    line-height :.8rem
    text-align:center
    border-radius:.4rem
    background:rgba(0,0,0,0.8)
    .header-abs-back
        color:#fff
        font-size:.4rem
 .header-fixed
        position :fixed
        left:0
        right:0
        top:0
        height :$headerHeight
        line-height :$headerHeight
        text-align:center
        color:#fff
        background :$bgColor
        font-size:.32rem
        overflow :hidden
        .header-fixed-back
            position :absolute
            left :0
            top:0
            width :.64rem
            text-align :center
            font-size:.4rem
            color:#fff

</style>