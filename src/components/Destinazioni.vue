<template>
    <div id="destinazioni" class="position-relative">
        <div class="mod">
            <div class="mt-3">
                <h6 class="title text-start">Destinazioni</h6>
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
            <Area1 v-if="area1" name="A1-A2"/>
            <Area3 v-if="area3" name="A3"/>
            <Area4 v-if="area4" name="A4"/>
            <Area5 v-if="area5" name="A5"/>
        </div>
        <div class="d-flex flex-row-reverse bd-highlight border position-absolute grey start-0 bottom-0 end-0">
            <div class="btn-grey p-2">{{release}}</div>
        </div>
    </div>
</template>

<script>
import Area1 from './Area1'
import Area3 from './Area3'
import Area4 from './Area4'
import Area5 from './Area5'

const dd = () => {
    let DD = new Date().getDate();
    if (DD < 10) {
        return '0' + DD;
    } else {
        return DD;
    }
}
const mm = () => {
    let MM = new Date().getMonth() + 1;
    if (MM < 10) {
        return '0' + MM;
    } else {
        return MM;
    }
}
const yy = () => {
    let YY = new Date().getFullYear();
    return YY;
}
const hours = () => {
    let h = new Date().getHours();
    if (h < 10) {
        return '0' + h;
    } else {
        return h;
    }
}
const minutes = () => {
    let mn = new Date().getMinutes();
    if (mn < 10) {
        return '0' + mn;
    } else {
        return mn;
    }
};
let dateRelease = 'release_' + dd() + mm() + yy() + hours() + minutes();
export default {
    components: {
        Area1,
        Area3,
        Area4,
        Area5
    },
    data() {
        return {
            destination: "0",
            area1: false,
            area3: false,
            area4: false,
            area5: false,
            dateR: dateRelease
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
    },
    computed: {
        release: function() {
            return this.dateR;
        },
    }
}
</script>

<style>
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
    .grey {
        background-color: #adb5bd;
    }
    .btn-grey {
        background-color: #adb5bd;
        color:white;
        border-left: 1px solid #d9dcdf;
    }
</style>