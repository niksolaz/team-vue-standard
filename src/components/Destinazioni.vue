<template>
    <div id="destinazioni" class="my-5">
        <div class="mod mt-3">
            <h6 class="title text-left">Destinazioni</h6>
            <div class="d-flex align-items-center mx-1 my-3">
                <label for="area1">
                    <span class="px-1">Ledwall:</span>
                </label>
                <select name="area1" id="area1" class="form-select mb-1" aria-label="Default select example" v-model="destination" @change="selectArea(destination)">
                    <option selected value="0">...</option>
                    <option value="1">Area 1-2</option>
                    <option value="3">Area 3</option>
                    <option value="4">Area 4</option>
                    <option value="5">Area 5</option>
                </select>
            </div>
        </div>
        <div class="mod my-3" v-if="area1">
            <h6 class="title text-left">A1 - A2</h6>
            <div class="d-flex mt-3">
                <img class="mx-auto mb-3" src="../assets/images/gray.png" alt="img-1" width="50" height="50">
                <img class="mx-auto mb-3" src="../assets/images/gray.png" alt="img-2" width="50" height="50">
                <img class="mx-auto mb-3" src="../assets/images/gray.png" alt="img-3" width="50" height="50">
                <img class="mx-auto mb-3" src="../assets/images/gray.png" alt="img-4" width="50" height="50">
            </div>
        </div>
        <div class="mod" v-if="area3">
            <h6 class="title text-left">A3</h6>
            <div class="mx-1 my-3">
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Nome Team:</label>
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">Inter</option>
                        <option value="2">Milan</option>
                        <option value="3">Juventus</option>
                        <option value="4">Napoli</option>
                        <option value="5">Roma</option>
                        <option value="6">Atalanta</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="mod" v-if="area4">
            <h6 class="title text-left">A4</h6>
        </div>
        <div class="mod" v-if="area5">
            <h6 class="title text-left">A5</h6>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            destination: "0",
            area1: false,
            area3: false,
            area4: false,
            area5: false,
        }
    },
    methods: {
        selectArea(val) {
            switch (val) {
                case '1':
                    this.area1 = true;
                    this.area3 = false;
                    this.area4 = false;
                    this.area5 = false;
                    break;
                case '3':
                    this.area1 = false;
                    this.area3 = true;
                    this.area4 = false;
                    this.area5 = false;
                    break;
                case '4':
                    this.area1 = false;
                    this.area3 = false;
                    this.area4 = true;
                    this.area5 = false;
                    break;
                case '5':
                    this.area1 = false;
                    this.area3 = false;
                    this.area4 = false;
                    this.area5 = true;
                    break;
                default:
                    this.area1 = false;
                    this.area3 = false;
                    this.area4 = false;
                    this.area5 = false;
                    break;
            }
        }
    }
}
</script>

<style scoped>
    #destinazioni {
        
    }
    .mod {
        margin-top: 10px;
        border: 1px solid rgb(211, 208, 208);
        position: relative;
    }
    .title {
        position: absolute;
        top: -10px;
    }
    h6 {
        margin-left: 10px;
        background-color: #fff;
    }
</style>