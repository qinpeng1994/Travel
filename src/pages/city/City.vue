<template>
  <div>
    <city-header></city-header>
    <city-search :cities="data.cities"></city-search>
    <city-list
      :cities="data.cities"
      :hot="data.hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="data.cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  setup() {
    const { letter, handleLetterChange } = useLetterLogic()
    const { data } = useCityLogic()
    return { data, letter, handleLetterChange }
  }
}

function useCityLogic() {
  const data = reactive({
    cities: {},
    hotCities: [],
  })
  async function getCityInfo() {
    let res = await axios.get('/api/city.json')
    res = res.data
    if (res.ret && res.data) {
      const result = res.data
      data.cities = result.cities
      data.hotCities = result.hotCities
    }
  }
  onMounted(() => { getCityInfo() })
  return { data }
}

function useLetterLogic() {
  const letter = ref('')
  function handleLetterChange(selected) {
    letter.value = selected
  }
  return { letter, handleLetterChange }
}

</script>

<style lang="stylus" scoped>

</style>
