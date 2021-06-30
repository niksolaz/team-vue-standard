<template>
    <div id="team" class="row">
        <Destinazioni class="col-6" />
        <PannelloMosart class="col-3" />
        <DebugPannel class="col-3" />
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
