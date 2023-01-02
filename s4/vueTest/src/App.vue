<script>
	export default {
		data() {
			return {
				// message: 'Vuejs Learning',
				showLoading: false,
				message: "Morteza",
        nameModel: ''
			};
		},
		mounted() {
			/* console.log(this.message);
		    this.message = 'Ali' 
		    console.log(this.message)*/
			// this.fetchData();
		},
		computed: {
			/* reversedMessage() {
					console.log("in coumputed");
					return this.message.split("").reverse().join("");
				}, */

			reversedMessage: {
				get() {
					console.log("in coumputed");
					return this.message.split("").reverse().join("");
				},
        set(newValue) {
          this.message = newValue;
        }
			},
		},
		methods: {
			/* toggleLoading: function() {
		      this.showLoading = !this.showLoading;
		    } */

			/* fetchData() {
		      this.showLoading = true;
		      setTimeout(() => {
		        this.showLoading = false
		      }, 3000);
		    } */

			reversedMessageBymethod() {
				console.log("in method");
				return this.message.split("").reverse().join("");
			},

			changeMessage() {
				this.message = "ALi";
			},

      setNewValue() {
        this.reversedMessage = 'Mojtaba'
      },

      setName() {
        this.message = this.nameModel;
        this.nameModel = ''
      }

		},
	};
</script>

<template>
	<!-- <h1>{{ message }}</h1> -->

	<!-- <button @click="toggleLoading">show loading</button>
  <div v-show="showLoading">Loading, please wait...</div> -->
	<!-- <div v-if="showLoading">Loading, please wait...</div>
  <ul v-else>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>  -->

	<p>Message: {{ message }}</p>
	<hr />
	<p>Reversed Message: {{ reversedMessage }}</p>
	<p>Reversed Message: {{ reversedMessage }}</p>
	<p>Reversed Message: {{ reversedMessage }}</p>
	<hr />
	<p>Reversed Message By Method: {{ reversedMessageBymethod() }}</p>
	<p>Reversed Message By Method: {{ reversedMessageBymethod() }}</p>
	<p>Reversed Message By Method: {{ reversedMessageBymethod() }}</p>
	<hr />
	<button @click="changeMessage">change name</button>
	<!-- <button @click="setNewValue">set new name</button> -->
	<button @click="reversedMessage = 'Fatemeh'">set new name</button>

  <hr>
  <input type="text" v-model="nameModel"> <button @click="setName">set input name</button>

</template>
