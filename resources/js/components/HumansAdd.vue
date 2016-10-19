<template>
	<h4>{{label}} Human Entry</h4>
	<hr>
	<div class="form-group">
		<label for="" class="form-label">First Name</label>		
		<input type="text" class="form-control" 
			placeholder="Input first name" v-model="human.first_name">
	</div>		

	<div class="form-group">
		<label for="" class="form-label">Last Name</label>		
		<input type="text" class="form-control" 
			placeholder="Input last name" v-model="human.last_name">
	</div>		

	<div class="form-actions">
		<button class="btn btn-info" @click="add()"> {{label}} </button>
		<button class="btn btn-danger" v-show="isEdit" @click="cancel()"> Cancel </button>
	</div>
</template>

<script>
export default {
	props: ['human'],

	computed: {
		label() {
			return this.human.id != undefined ? 'Edit' : 'Add'
		},

		isEdit() {
			return this.human.id != undefined
		}
	},

	methods: {
		add() {
			console.log(this.human)
			if (this.human.id != undefined ) {
				// edit
				this.$http.put('http://localhost:8000/human/' + this.human.id, this.human)
					.then((response) => {
						console.log(response)
						window.toastr.success(response.body.message)
						this.$dispatch('fetch-data')
						this.reset()
					}, (response) => {
						console.log(response)
						window.toastr.success("An error occurred.")
					})
			} else {
				// add
				this.$http.post('http://localhost:8000/human', this.human)
					.then((response) => {
						console.log(response)

						window.toastr.success(response.body.message)
						this.$dispatch('fetch-data')
						this.reset()
					}, (response) => {
						console.log(response)
						window.toastr.success("An error occurred.")
					})
			}
		},

		cancel() {
			this.reset()
		},

		reset() {
			this.human = {
				first_name: '',
				last_name: ''
			}
		}
	}
}
</script>