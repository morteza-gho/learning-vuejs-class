<script>
	export default {
		data() {
			return {
				isActive: true,
				isValid: true,
				hasUsername: false,
				username: ''
			};
		},

		computed: {
			isUserValid() {
				return this.isValid && this.hasUsername;
			},
		},
		methods: {},
	};
</script>

<template>
	<p :class="{ info: isActive }">This is a text</p>

	<p :class="{ success: isValid, danger: !isValid }">
		this text is
		<span v-if="isValid">valid</span>
		<span v-else>invalid</span>
	</p>
	<p :class="isUserValid ? 'success' : 'danger'">
		User Is
		<span v-if="isValid">valid</span>
		<span v-else>invalid</span>
	</p>
	<input type="text" v-model="username" :class="username ? 'br-green' : 'br-red'" /> {{ username }}
</template>

<style>
	.danger {
		color: red;
	}
	.success {
		color: green;
	}
	.info {
		color: blue;
	}
	input {
		border: 1px solid gray;
		padding: 5px;
	}
	input:focus {
		outline: none
	}
	.br-green {
		border: 1px solid green
	}
	.br-red {
		border: 1px solid red
	}
</style>
