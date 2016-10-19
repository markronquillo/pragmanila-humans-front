<template>
	<div class="panel panel-default" 
		v-for="human in humans" track-by="$index">
	  	<div class="panel-heading">Human # {{human.id}}</div>
	  	<div class="panel-body">
	  		<p>
	  			{{human.first_name}} {{human.last_name}}
	  		</p>

	  		<div class="actions">
	  			<a href="javascript:;" class="btn btn-success" @click="edit(human)">Edit</a>
	  			<a href="javascript:;" class="btn btn-danger" @click="destroy(human)">Delete</a>
	  		</div>
		</div>
	</div>
</template>

<script>
	export default {

		props: ['selectedHuman'],

		ready() {
			this.fetchHumansData();
		},

		data() {
			return {
				humans: []
			}
		},

		methods: {
			fetchHumansData() {
				this.$http.get('http://localhost:8000/humans')
				.then(
					(response) => {
						var humans = response.body
						this.humans = humans.data;

					}, (response) => {
						console.log(response)
				})
			},

			edit(human) {
				this.selectedHuman = human
				console.log(this.human)
			},

			destroy(human) {
				this.$http.delete('http://localhost:8000/human/' + human.id, human)
					.then((response) => {
						var message = response.body.message
						window.toastr.success(message)

						this.fetchHumansData();
					}, (response) => {
						toastr.error("An error has occurred. Please try again later.")
					})
			}
		},

		events: {
			'fetch-data': function() {
				this.fetchHumansData();
			}
		}

	}
</script>