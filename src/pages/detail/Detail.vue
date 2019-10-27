<template>
    <div>
       <detail-banner 
       :sightName="sightName" 
       :bannerImg="bannerImg" 
       :galleryList="galleryList" 
       />
       <detail-header/>
       <div class="content">
           <detail-list :list="list"/>
       </div>
       
    </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return{
            sightName:'',
            bannerImg:'',
            galleryList:[],
            list:[]

        }
    },
    methods:{
        getDetailInfo(){
            axios.get('/api/detail.json?id=' + this.$route.params.id).then(resp=>{
                // console.log(resp)
                const res = resp.data
                if(res.ret || res.data){
                    const data = res.data
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.galleryList = data.gallaryImgs
                    this.list = data.categoryList
                }
            })
            
        }


    },
    mounted(){
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
.content
    height :50rem

</style>