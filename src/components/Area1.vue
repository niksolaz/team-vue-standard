<template>
    <div class="mod my-3 position-relative">
        <h6 class="title text-start">{{ name }}</h6>
        <div class="row mt-3">
            <ImageSingola class="col-3" nameIdUnivoco="area1img1"/>
            <ImageSingola class="col-3" nameIdUnivoco="area1img2"/>
            <ImageSingola class="col-3" nameIdUnivoco="area1img3"/>
            <ImageSingola class="col-3" nameIdUnivoco="area1img4" />
        </div>
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
            controlli: false,
        }
    }
}
</script>
<style scoped>
</style>