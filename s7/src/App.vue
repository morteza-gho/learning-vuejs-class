<script>
import UsersList from './components/UsersList.vue';

	
	export default {
	components: { UsersList },

		data() {
			return {
				users: ["Morteza", "Ali", "Fatemh", "Mojatab", "Farzad"],
				customers: ["Abbas", "javad", "Naqi", "Hasan", "Morteza", "Ali", "Fatemh", "Mojatab", "Farzad"],
			};
		},
	}
</script>

<template>
	<users-list :items="users"></users-list>
	<hr />
	<users-list :items="customers"></users-list>
</template>