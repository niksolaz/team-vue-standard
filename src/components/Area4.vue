<template>
    <div class="mod">
        <h6 class="title text-left">{{ name }}</h6>
        <ImageSingola  nameIdUnivoco="area4img1"/>
    </div>
</template>

<script>
import ImageSingola from './ImageSingola'
export default {
    components: {
        ImageSingola
    },
    props: {
        name: String
    },
    data() {
        return {
            controlli: false
        }
    }
}
</script>
<style scoped>
</style>