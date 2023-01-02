<template>
	<ul>
		<li v-for="(user, index) in items" :key="index">
			{{ index + 1 + "=>" + user }}
		</li>
	</ul>
</template>

<script>
	export default {
		props: ["items"],
		data() {
			return {};
		},
	};
</script>

<style>
	ul li {
		list-style-type: none;
	}
</style>