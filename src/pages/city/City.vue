<template>
    <div>
       <city-header/>
       <city-search/>
       <city-list :hotCity="hotCities" :city="cities" :letter="letter"/>
       <city-alphabet :city="cities" @change="handleLetter" />
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
            cities:{},
            letter:''

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
                // console.log(resp)
                const res = resp.data
                if(res.ret && res.data){
                    const data = res.data
                    this.hotCities = data.hotCities
                    this.cities = data.cities
                }
            })
        },
         handleLetter(letter){
            //  console.log(letter)
            this.letter= letter

        }

    },
    mounted(){
        this.getCityInfo()
    }
    

    
}
</script>
<style lang="stylus" scoped>

</style>