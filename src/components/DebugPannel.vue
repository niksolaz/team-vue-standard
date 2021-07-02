<template>
    <div id="debugpannel"  class="d-flex  flex-column justify-content-center">
        <div class="border mb-2">
            <label for="dbg-1">Guide:</label>
            <input type="number" name="" id="dbg-1" class="border" min="0" max="5">
        </div>
        <div class="border mb-2">
            <label for="dbg-2">L5:</label>
            <select class="form-select" id="dbg-2">
                <option selected value="tm_0">Choose Team...</option>
                <option value="tm_1">Team_Z1</option>
                <option value="tm_2">Team_Z2</option>
                <option value="tm_3">Team_Z3</option>
                <option value="tm_4">Team_Z4</option>
                <option value="tm_5">Team_Z5</option>
            </select>
        </div>
        <div class="border mb-2">
            <select class="form-select my-2">
                <option selected value="bg_0">Choose Bg...</option>
                <option value="bg_1">Bg_Z1</option>
                <option value="bg_2">Bg_Z2</option>
                <option value="bg_3">Bg_Z3</option>
                <option value="bg_4">Bg_Z4</option>
                <option value="bg_5">Bg_Z5</option>
            </select>
            <select class="form-select my-2">
                <option selected value="bg_0">Choose Struttura...</option>
                <option value="struttura_1">Struttura_Z1</option>
                <option value="struttura_2">Struttura_Z2</option>
                <option value="struttura_3">Struttura_Z3</option>
                <option value="struttura_4">Struttura_Z4</option>
                <option value="struttura_5">Struttura_Z5</option>
            </select>
            <select class="form-select my-2">
                <option selected value="bg_0">Choose Flare...</option>
                <option value="flare_1">Flare_Z1</option>
                <option value="flare_2">Flare_Z2</option>
                <option value="flare_3">Flare_Z3</option>
                <option value="flare_4">Flare_Z4</option>
                <option value="flare_5">Flare_Z5</option>
            </select>
        </div>
        <div class="d-flex justify-between">
            <img class="mx-auto mb-3" src="../assets/images/gray.png" alt="img-1" width="50" height="50">
            <img class="mx-auto mb-3" src="../assets/images/gray.png" alt="img-1" width="50" height="50">
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    #debugpannel {
        border: 1px solid black;
    }
</style>