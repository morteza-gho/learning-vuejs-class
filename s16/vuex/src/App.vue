<script>
export default {

    computed: {

        count() {
            return this.$store.state.count;
        },

        todos() {
            // return this.$store.state.todos;
            return this.$store.getters.getAllTodos;
        },
        doneTodos() {
            // return this.$store.state.todos.filter(todo => todo.isDone);
            return this.$store.getters.doneTodos;
        }
    },

    methods: {
        /* increase() {
            // this was for mutations example
            this.$store.commit('increase', 2)
        } */
        increase() {
            // tis is for actions axample
            this.$store.dispatch('increase', 2)
        }
    }

};
</script>

<template>

    <h1>Count: {{ count }}</h1>
    <button @click="increase">increase</button>

    <hr />

    <div class="todos-wrapper">
        <div class="todos">
            <h2>All Todos</h2>
            <div v-for="(todo, index) in todos" :key="todo.id" :class="`todo-item ${todo.isDone ? 'done' : ''}`">
                <span>{{ index + 1 }}</span>
                <span>{{ todo.title }}</span>
                <span class="status"></span>
            </div>
        </div>

        <div class="todos">
            <h2>Done Todos</h2>
            <div v-for="(todo, index) in doneTodos" :key="todo.id" :class="`todo-item ${todo.isDone ? 'done' : ''}`">
                <span>{{ index + 1 }}</span>
                <span>{{ todo.title }}</span>
                <span class="status"></span>
            </div>
        </div>
    </div>

</template>

<style scoped>
.todos-wrapper {
    display: flex;
    column-gap: 30px;
}

.todos {
    width: 300px;
    font-family: tahoma;
}

.todo-item {
    display: flex;
    justify-content: space-between;
    background: #EEE;
    border-bottom: 1px solid #CCC;
    padding: 10px 15px;
    margin-bottom: 10px;
    border-radius: 5px;
}

.status {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #FFF;
    cursor: pointer;
}

.status:hover {
    background: lightblue;
    border-color: lightblue;
}

.todo-item.done .status {
    background: lightgreen;
    border-color: lightgreen;
}
</style>
