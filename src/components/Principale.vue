<template>
    <div id="team">
        <Destinazioni />
        <PannelloMosart />
        <DebugPannel />
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
