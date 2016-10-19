<template>
	<div class="row">
		<div class="col-md-4">
			<humans-add :human.sync="selectedHuman"> </humans-add>
		</div>
		<div class="col-md-8">
			<humans-list :selected-human.sync="selectedHuman"> </humans-list>	
		</div>
	</div>	
</template>

<script>
export default {
	data() {
		return {
			selectedHuman: {
				first_name: '',
				last_name: '',
			}
		}
	},

	events: {
		'fetch-data': function() {
			this.$broadcast('fetch-data')
		}
	}
}	
</script>

<style>
	
</style>
