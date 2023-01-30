<script>
import Home from './components/Home.vue';

export default {
    data() {
        return {};
    },
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    components: { Home }
};
</script>

<template>
	App
	<h1>{{ count }}</h1>
	<hr />
	<home></home>
</template>
