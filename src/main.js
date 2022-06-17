import './banner.js'
import './tabs.js'
import './style/index.css'
import './style/index.less'
import gifStr from './assets/1.gif'
import pngStr from './assets/logo_small.png'
import $ from 'jquery'
import "../src/app.vue"

const gif = `<img src="${gifStr}">`
const png = `<img src="${pngStr}">`
$('body').append(gif)
$('body').append(png)
const a = () => {
    console.log(1234680);
}