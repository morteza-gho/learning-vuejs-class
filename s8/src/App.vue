<script>
import CustomButton from './components/CustomButton.vue';


export default {
    data() {
        return {
					isButtonDisabled: true
				};
    },
    components: { CustomButton }
}
</script>

<template>
	
	<CustomButton title="Default sm Button" type="default" :size="'sm'"></CustomButton>
	<CustomButton title="Success md Button" type="success"></CustomButton>
	<CustomButton title="Danger large Button" type="danger" size="lg"></CustomButton>
	<CustomButton title="success md Button" type="success" size="md" :isDisabled="isButtonDisabled"></CustomButton>

</template>