<script>
import PostsList from './components/PostsList.vue';
// import UsersList from './components/UsersList.vue';

	
	export default {
	components: {PostsList /* UsersList */ },

		data() {
			return {
				/* users: ["Morteza", "Ali", "Fatemh", "Mojatab", "Farzad"],
				customers: ["Abbas", "javad", "Naqi", "Hasan", "Morteza", "Ali", "Fatemh", "Mojatab", "Farzad"], */

				postItems: [
					{
						id: 1,
						title: 'Post Title 1',
						desc: 'Post Description 1 is Here.',
						author: {
							name: 'Ali',
							family: 'Alavi'
						},
					},
					{
						id: 1,
						title: 'Post Title 2',
						desc: 'Post Description 2 is Here.',
						author: {
							name: 'Hasan',
							family: 'Hasani'
						},
					},
					{
						id: 3,
						title: 'Post Title 3',
						desc: 'Post Description 3 is Here.',
						author: {
							name: 'Javad',
							family: 'Javadi'
						},
					},
					{
						id: 4,
						title: 'Post Title 4',
						desc: 'Post Description 4 is Here.',
						author: {
							name: 'Mohsen',
							family: 'Mohseni'
						},
					}
				]
			};
		},
	}
</script>

<template>
	<!-- <users-list :items="users"></users-list>
	<hr />
	<users-list :items="customers"></users-list> -->

	<posts-list :posts="postItems"></posts-list>


</template>