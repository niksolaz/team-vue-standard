<template>
    <div id="principale" class="container">
        <div class="row">
            <Destinazioni class="col-6"/>
            <PannelloMosart class="col-3" />
            <DebugPannel  class="col-3"/>
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
    #principale {
        border: 3px solid red;
    }
</style>
