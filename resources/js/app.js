require('bootstrap')
require('jquery')
require('popper.js')
require('@fortawesome/fontawesome-free')

//Initializing the Vue instances

window.Vue = require('vue')

const {AlertError, Form, HasError} = require('vform')

window.Form = Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

Vue.component('tracker',require('./components/Tracker.vue').default)

const app = new Vue({
    el:"#app"
    
})