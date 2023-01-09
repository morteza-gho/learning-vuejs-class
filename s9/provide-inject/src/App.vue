<script>
import ParentComponent from './components/ParentComponent.vue';

export default {
	data() {
		return {
			appTitle: 'Vuejs Learinng',
			description: 'Vuejs Learinng in Barnamenevis academy'
		};
	},
	methods: {},
	components: { ParentComponent },
	provide() {
		return {
			appDesc: this.description
		}
	}
}
</script>

<template>

	<ParentComponent :title="appTitle"></ParentComponent>

</template>
