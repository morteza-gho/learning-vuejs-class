<script>
import CustomButton from './components/CustomButton.vue';
import ChildComponent from './components/ChildComponent.vue';
import ShowLoader from './components/ShowLoader.vue';
import Home from './components/Home.vue';


export default {
	data() {
		return {
			isButtonDisabled: true,
			count: 0,
			isShowLoading: false
		};
	},
	components: { CustomButton, ChildComponent, ShowLoader, Home },
	methods: {
		onIncreaseCounter(data) {
			console.log(data)
			this.count += data.number;
		},
		onShowParentLoading() {
			this.isShowLoading = true;
			setTimeout(() => {
				this.isShowLoading = false
			}, 3000);
		}
	}
}
</script>

<template>

	<CustomButton title="Default sm Button" type="default" :size="'sm'"></CustomButton>
	<CustomButton title="Success md Button" type="success"></CustomButton>
	<CustomButton title="Danger large Button" type="danger" size="lg"></CustomButton>
	<CustomButton title="success md Button" type="success" size="md" :isDisabled="isButtonDisabled"></CustomButton>

	<hr />
	<br />

	<h2>Count: {{ count }}</h2>
	<ChildComponent :title="'Child Component'" @increase-counter="onIncreaseCounter"></ChildComponent>

	<br />
	<hr />
	<br />

	<div class="loading" v-if="isShowLoading">Loading, please wait...</div>
	<ShowLoader :is-loading="isShowLoading" @show-parent-loading="onShowParentLoading"></ShowLoader>

	<br />
	<hr />
	<br />

	<Home>
		<template v-slot:text>
			<p>this text is in App.vue</p>
		</template>
		<template v-slot:list>	
			<ul>
				<li>item 1</li>
				<li>item 2</li>
				<li>item 3</li>
			</ul>
		</template>
	</Home>

</template>

<style>
.loading {
	background: lightblue;
	border: 1px solid blue;
	padding: 5px;
	font-size: 16px;
	width: 20%;
	margin-bottom: 10px;
}
</style>