require('bootstrap')
require('popper.js')
require('@fortawesome/fontawesome-free')

window.$ = window.jquery = require('jquery')
//Initializing the Vue instances

window.axios = require('axios')
window.Vue = require('vue')

import { AlertError, Form, HasError } from 'vform'

window.Form = Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

Vue.component('tracker',require('./components/Tracker.vue').default)


window.Swal = require('sweetalert2')
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
}
})
window.Toast = Toast

const app = new Vue({
    el:"#app"
    
})


//Custom Scripts
require('./custom')
