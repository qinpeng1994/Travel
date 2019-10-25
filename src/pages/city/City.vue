<template>
    <div>
       <city-header/>
       <city-search/>
       <city-list :hotCity="hotCities" :city="cities"/>
       <city-alphabet :city="cities" />
    </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
    name:'City',
    data(){
        return{
            hotCities:[],
            cities:{}

        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods:{
        getCityInfo(){
            axios('/api/city.json').then(resp =>{
                console.log(resp)
                const res = resp.data
                if(res.ret && res.data){
                    const data = res.data
                    this.hotCities = data.hotCities
                    this.cities = data.cities
                }
            })
        }

    },
    mounted(){
        this.getCityInfo()
    }

    
}
</script>
<style lang="stylus" scoped>

</style>