<template>
    <div>
        <div class="d-flex flex-column justify-content-center mt-3">
            <div>
                <img class="mx-auto mb-3" src="../assets/images/gray.png" alt="img-1" width="50" height="50">
                <select class="form-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="player1">giocatore 1</option>
                    <option value="player2">giocatore 2</option>
                    <option value="player3">giocatore 3</option>
                    <option value="player4">giocatore 4</option>
                    <option value="player5">giocatore 5</option>
                    <option value="player6">giocatore 6</option>
                </select>
                <div class="form-check d-flex justify-content-center">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="controlliAvanzati">
                    <label class="form-check-label fs-6 px-1" for="flexCheckDefault">
                        Controlli Avanzati
                    </label>
                </div>
            </div>
            <div class="d-flex flex-column justify-content-center mt-3" v-if="controlliAvanzati">
                <div>
                    <label for="customRange1" class="form-label">Pos X {{ range1 }}</label>
                    <input type="range" class="form-range" id="customRange1" min="0" max="5" step="0.5" v-model="range1">
                </div>
                <div>
                    <label for="customRange2" class="form-label">Pos Y {{ range2 }}</label>
                    <input type="range" class="form-range" id="customRange2" min="0" max="5" step="0.5" v-model="range2">
                </div>
                <div>
                    <label for="customRange3" class="form-label">Scale {{ range3 }}</label>
                    <input type="range" class="form-range" id="customRange3" min="0" max="5" step="0.5" v-model="range3">
                </div>
                <div>
                    <div class="form-check" v-for="(item, k) in dataRadio" :key="k">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" :id="nameIdUnivoco + '-' + item.id">
                        <label class="form-check-label" :for="nameIdUnivoco + '-' + item.id">
                            {{ item.text}}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        nameIdUnivoco: String
    },
    data() {
        return {
            controlliAvanzati: false,
            range1: 0,
            range2: 0,
            range3: 0,
            dataRadio: [
                {
                    id: 1,
                    text: "Nessuna Selezione "
                },
                {
                    id: 2,
                    text: "Bagliore SX"
                },
                {
                    id: 3,
                    text: "Bagliore DX"
                },
            ]
        }
    }
}
</script>