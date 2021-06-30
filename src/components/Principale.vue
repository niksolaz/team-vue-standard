<template>
    <div class="container">
        <div class="row">
            <Destinazioni class="col-6"/>
            <PannelloMosart class="col-3" />
            <DebugPannel  class="col-3"/>
        </div>
        <div class="d-flex justify-content-center my-2">
            <button class="btn btn-primary">Click</button>
        </div>
    </div>
</template>

<script>
import Destinazioni from './Destinazioni'
import PannelloMosart from './PannelloMosart'
import DebugPannel from './DebugPannel'
export default {
  name: 'team',
  components: {
    Destinazioni,
    PannelloMosart,
    DebugPannel
  }
}
</script>

<style scoped>
</style>
