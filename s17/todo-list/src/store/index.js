import axios from "axios";
import { useToast } from "vue-toast-notification";
import { createStore } from "vuex";
import { BASE_URL } from './../constants';

const toast = useToast();
const store = createStore({

  state: {
    tasks: []
  },

  getters: {
    allTasks(state) {
      return state.tasks
    }
  },

  mutations: {
    setTasks(state, items) {
      state.tasks = items;
    },

    updateTask(state, updatedItem) {
      const index = state.tasks.findIndex(x => x.id === updatedItem.id);
      state.tasks[index] = updatedItem;
    },

    deleteTask(state, itemId) {
      const index = state.tasks.findIndex(x => x.id === itemId);
      state.tasks.splice(index, 1);
      // toast.success('Task was deleted');
    }

  },

  actions: {

    async fetchTasks({ commit }) {
      try {
        const { status, data } = await axios.get(`${BASE_URL}/tasks`);
        if (status === 200) {
          commit('setTasks', data);
        }
      } catch (err) {
        toast.error(err.message);
      }
    },

    async updateTask({ commit }, item) {
      try {
        const { status, data } = await axios.put(`${BASE_URL}/tasks/${item.id}`, item );
        if (status === 200) {
          commit('updateTask', data);
        }
      } catch (err) {
        toast.error(err.message);
      }
    },

    async deleteTask({ commit }, itemId) {
      try {
        const { status, data } = await axios.delete(`${BASE_URL}/tasks/${itemId}`);
        if (status === 200) {
          commit('deleteTask', itemId);
        }
      } catch (err) {
        toast.error(err.message);
      }
    }

  }


});

export default store;