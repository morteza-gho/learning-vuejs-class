import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
    todos: [
      { id: 1, title: 'Task One', isDone: true },
      { id: 2, title: 'Task Two', isDone: false },
      { id: 3, title: 'Task There', isDone: false },
      { id: 4, title: 'Task Four', isDone: true },
      { id: 5, title: 'Task Five', isDone: true }
    ]
  },

  getters: {
    getAllTodos(state) {
      return state.todos;
    },
    doingTodos(state) {
      return state.todos.filter(todo => !todo.isDone);
    },
    doneTodos(state) {
      return state.todos.filter(todo => todo.isDone);
    }
  },

  mutations: {
    /* increase(state) {
      state.count++
    } */
    increase(state, number) {
      state.count += number
    },
    changeTodoStatus(state, todoId) {
      const currentTodo = state.todos.find(todo => todo.id === todoId);
      currentTodo.isDone = !currentTodo.isDone;
    }
  },

  actions: {
    increase({ commit }, number) {
      commit('increase', number);
    },
    changeTodoStatus({commit}, id) {
      commit('changeTodoStatus', id);
    }
  }

});

export default store;