require('bootstrap')
require('jquery')
require('popper.js')
require('@fortawesome/fontawesome-free')


//Initializing the Vue instances

window.axios = require('axios')
window.Vue = require('vue')

const {AlertError, Form, HasError} = require('vform')

window.Form = Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

Vue.component('tracker',require('./components/Tracker.vue').default)

const app = new Vue({
    el:"#app"
    
})

const Swal = require('sweetalert2')
window.Swal = Swal

const Toast = Swal.mixin({
    toast:true,
    position:'top-right',
    timer:3500,
    timerProgressBar:true
})

window.Toast = Toast


//Custom Scripts
require('./custom')
