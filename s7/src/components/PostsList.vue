<template>
	<div class="posts">
		<div class="post" v-for="post in posts" :key="post.id">
			<post-item :postData="post"></post-item>
      <hr />
		</div>
	</div>
</template>

<script>
import PostItem from './PostItem.vue';
	export default {
	components: { PostItem },
		props: ["posts"],
	};
</script>

<style>
</style>