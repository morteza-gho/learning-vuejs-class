<script>
	export default {
		data() {
			return {
				/* color: "red",
						fs: 20 */
				users: [
					{
						id: 1,
						name: "Morteza",
						family: "QorbanAlizade",
						age: 30,
						job: "Front-End Dev",
					},
					{
						id: 2,
						name: "Ali",
						family: "Hasani",
						age: 27,
						job: "Back-End Dev",
					},
					{
						id: 3,
						name: "Fatemeh",
						family: "Fallah",
						age: 18,
						job: "Student",
					},
					{
						id: 4,
						name: "Mojtaba",
						family: "Fallah",
						age: 48,
						job: "Drag & Drop Dev",
					},
					{
						id: 5,
						name: "Farzad",
						family: "Alavi",
						age: 17,
						job: "Office Dev",
					},
				],
				userData: {
					id: 1,
					name: "Morteza",
					family: "QorbanAlizade",
					age: 30,
					job: "Front-End Dev",
				},
				count: 0,
				age: 0,
				isBaby: true,
				name: '',
				family: '',
				message: 'This Is A Sample Message',
				isAcceptRules: false,
				gender: 0,
				favColor: '',
				description: ''
			};
		},
		computed: {
			filteredUsers() {
				return this.users.filter((x) => x.age > 18);
			},
		},
		methods: {
			addCount() {
				this.count++;
			},
			incDecAge(isAdd) {
				if (isAdd) {
					this.age++;
				} else {
					this.age--;
				}
			},
			focusToInput() {
				this.description = 'Sample Text'
				this.$refs.descRef.focus();
			}
		},
		watch: {
			count(newValue, oldValue) {
				console.log("newValue: ", newValue);
				console.log("oldValue: ", oldValue);
			},
			age(newValue, oldValue) {
				this.isBaby = newValue <= 4;
				console.log(this.isBaby);
			},
		},


		beforeCreate() {
			alert('beforeCreate')
		},
		created() {
			alert('created')
		},
		beforeMount() {
			alert('beforeMount')
		},
		mounted() {
			alert('mounted')
		},
		beforeUpdate() {
			alert('beforeUpdate')
		},
		updated() {
			alert('updated')
		},
		beforeDestroy() {
			alert('beforeDestroy')
		},
		destroyed() {
			alert('destroyed')
		}

	};
</script>

<template>

	<!-- <p :style="{ color: color, 'font-size': fs + 'px' }">This is A text</p> -->
	<table border="1" cellpadding="5" cellspacing="0">
		<thead>
			<th>Row</th>
			<th>Name</th>
			<th>Family</th>
			<th>Age</th>
			<th>Job</th>
		</thead>
		<tbody>
			<tr v-for="(user, index) in users" :key="user.id">
				<td>{{ index + 1 }}</td>
				<td>{{ user.name }}</td>
				<td>{{ user.family }}</td>
				<td>{{ user.age }}</td>
				<td>{{ user.job }}</td>
			</tr>
		</tbody>
	</table>

	<hr />

	<p v-for="(value, key, index) in userData" :key="index">
		{{ key }}: {{ value }}
	</p>

	<hr />
	<h3>Filtered Users: age > 18</h3>
	<table border="1" cellpadding="5" cellspacing="0">
		<thead>
			<th>Row</th>
			<th>Name</th>
			<th>Family</th>
			<th>Age</th>
			<th>Job</th>
		</thead>
		<tbody>
			<tr v-for="(user, index) in filteredUsers" :key="user.id">
				<td>{{ index + 1 }}</td>
				<td>{{ user.name }}</td>
				<td>{{ user.family }}</td>
				<td>{{ user.age }}</td>
				<td>{{ user.job }}</td>
			</tr>
		</tbody>
	</table>

	<hr />

	<h2>Count: {{ count }}</h2>
	<button @click="addCount">Add</button>

	<hr />

	<p v-if="isBaby">You Are Baby Yet :)))</p>
	<p v-else>You Are Man/Woman</p>
	<button @click="incDecAge(true)">Increase</button>
	<span>&nbsp;{{ age }}&nbsp;</span>
	<button @click="incDecAge(false)">Decrease</button>

	<br />
	<hr />
	<br />

	<input type="text" v-model="name" placeholder="enter name..." /> {{ name }}
	<input type="text" v-model.lazy="family" placeholder="enter family..." /> {{ family }}
	<br />
	<br />
	<textarea v-model="message"></textarea> {{ message }}
	<br />
	<br />
	<input type="checkbox" id="acceptRules" v-model="isAcceptRules" />
	<label for="acceptRules">Accept Rules</label>: {{ isAcceptRules }}
	<br />
	<br />
	<label><input type="radio" name="gender" value="1" v-model="gender"> I'm Man</label>
	<label><input type="radio" name="gender" value="0" v-model="gender"> I'm Woman</label>
	Gendwer Is: {{ gender }}

	<br />
	<br />

	<select v-model="favColor">
		<option value="">Select Favorite color</option>
		<option value="red">red</option>
		<option value="blue">blue</option>
		<option value="black">black</option>
		<option value="green">green</option>
		<option value="orange">orange</option>
	</select>
	<span :style="{color: favColor}">&nbsp;{{ favColor }}</span>

	<br />
	<br />

	<hr />

	<input type="text" v-model="description" ref="descRef" placeholder="enter description..." />
	<button @click="focusToInput()">Focus</button>


	<br />
	<br />

</template>