
require('./bootstrap');

Vue.component('Humans', require('./components/Humans.vue'))
Vue.component('HumansAdd', require('./components/HumansAdd.vue'))
Vue.component('HumansList', require('./components/HumansList.vue'))

new Vue({
	el: '#main'
})