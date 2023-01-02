<template>
	<article>
		<h3>{{ postData.title }}</h3>
		<p>{{ postData.desc }}</p>
		<p><b>Author:</b> {{ postData.author.name + " " + postData.author.family }}</p>
	</article>
</template>

<script>
	export default {
    props: ['postData']
  };
</script>

<style>
</style>