<template>
    <div class="search">
        <input type="text" placeholder="输入城市名或拼音" class="search-input">
    </div>
</template>
<script>
export default {
    name: 'CitySearch'
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

</style>