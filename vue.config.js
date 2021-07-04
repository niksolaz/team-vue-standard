const path = require("path");
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
let dateRelease = '_' + dd() + mm() + yy() + hours() + minutes();
module.exports = {
    // outputDir: path.resolve(__dirname, "build" + dateRelease + "/dist"),
    outputDir: path.resolve(__dirname, "dist/build" + dateRelease),
    transpileDependencies: [
        'vuetify'
    ]
}