<template>
<div>
    <div class="search">
        <input type="text" 
        placeholder="输入城市名或拼音" 
        class="search-input" 
        v-model="keyword"
       >
    </div>
    <div class="search-content" ref="search" v-show="keyword">
        <ul>
            <li  class="search-item border-bottom"
             v-for="(item,index) in list" 
             :key="index"
             @click="handleCity(item.name)">{{item.name}}</li>
            <li v-show="hasData">没有找到匹配数据</li>
        </ul>
    </div>
</div>
    
</template>
<script>
 import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props:{
        city: Object
    },
    data(){
        return{
            keyword:"",
            list:[],
            timer:null
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[]
                return
            }
            this.timer = setTimeout(()=>{
                const result = [];
                for (let i in this.city){
                       this.city[i].forEach(value =>{
                           if(value.spell.indexOf(this.keyword) > -1 
                           || value.name.indexOf(this.keyword) >-1){
                               result.push(value)
                           }
                       })
                       
                }
                this.list = result
            },100) 
           

        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.search)
    },
    computed: {
        hasData(){
            return !this.list.length
        }
    },
    methods:{
       handleCity(city){
      this.$store.dispatch('changeCity',city)
      this.$router.push('/')
    }
    }

   
}
</script>
<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
    .search
        background :$bgColor
        height :.72rem
        padding: 0 .1rem
        .search-input
            height :.62rem
            line-height :.62rem
            width:100%
            text-align:center
            border-radius:.06rem
            color:#666
    .search-content
        position :absolute
        top:1.58rem
        left:0
        bottom :0
        right:0
        overflow :hidden
        background:#eee
        z-index:1
        .search-item
            line-height :.62rem
            padding-left:.2rem
            color:#666
      


</style>