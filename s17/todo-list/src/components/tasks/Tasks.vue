<template>

  <main-loading v-if="isLoading"></main-loading>

  <div class="tasks" v-else>

    <div class="col-md-8 col-sm-12 col-12">

      <form class="mb-4" @submit.prevent="submitForm">
        <div class="row">
          <div class="col-9 position-relative">
            <input class="form-control form-control-lg" type="text" placeholder="Enter Task..." v-model="newTask" />
            <i class="bi bi-x cancel-edit" v-if="editingTask" @click="cancelEdit"></i>
          </div>
          <div class="col-3">
            <button type="submit" class="btn btn-dark btn-lg w-100 d-flex justify-content-around" :disabled="miniLoading">
              <span class="spinner-grow spinner-grow-sm" v-if="miniLoading"></span>
              <i class="bi bi-check-lg" v-else></i>
              <span v-if="!editingTask">Add Task</span>
              <span v-else>Edit Task</span>
            </button>
          </div>
        </div>
        <small class="text-danger" v-if="hasError">Title is required</small>
      </form>

      <div v-for="task in tasks" class="task-item" :class="task.completed ? 'done' : ''" :key="task.id">

        <div class="form-check d-flex align-items-center">
          <input class="form-check-input" type="checkbox" value="" :id="task.id" :checked="task.completed"
            @change="changeTaskStatus(task)">
          <label class="form-check-label title" :for="task.id">
            {{ task.title }}
          </label>
        </div>

        <div class="btn-group btn-group-sm">
          <button type="button" class="btn btn-outline-secondary" @click="editTask(task)">
            <i class="bi bi-pencil"></i>
          </button>
          <button type="button" class="btn btn-outline-danger" @click="deleteTask(task.id)">
            <i class="bi bi-trash"></i>
          </button>
        </div>

      </div>
    </div>

  </div>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import { useStore } from 'vuex';
import MainLoading from "../global/MainLoading.vue"
import { createGUID } from "../../functions.js"

const store = useStore();
const isLoading = ref(false);
const miniLoading = ref(false);
const toast = useToast();
const tasks = computed(() => store.getters.allTasks);
const editingTask = ref(null);
const newTask = ref('');
const hasError = ref(false);

const fetchTasks = async () => {
  isLoading.value = true;
  await store.dispatch('fetchTasks');
  isLoading.value = false;
}

onMounted(() => {
  fetchTasks();
});

const editTask = (task) => {
  newTask.value = task.title;
  editingTask.value = task;
};

const cancelEdit = () => {
  newTask.value = '';
  editingTask.value = null;
}

const submitForm = async () => {

  if (newTask.value === '') {
    hasError.value = true;
  } else {
    hasError.value = false;

    if (editTask) {

      // edit mode
      const editModel = {
        id: editingTask.value.id,
        title: newTask.value,
        completed: editingTask.value.completed
      };
      miniLoading.value = true;
      await store.dispatch('updateTask', editModel);
      editingTask.value = null;

    } else {

      // add mode
      const newModel = {
        id: createGUID(),
        title: newTask.value,
        completed: false
      };
      miniLoading.value = true;
      await store.dispatch('newTask', newModel);

    }

    miniLoading.value = false;
    newTask.value = '';
  }

}; // submitForm


const changeTaskStatus = async (task) => {
  task.completed = !task.completed;
  await store.dispatch('updateTask', task)
};

const deleteTask = async (id) => {
  if (window.confirm('Are you sure to delete this task?')) {
    await store.dispatch('deleteTask', id);
    toast.success('Task was deleted');
  }
}

</script>

<style scoped>
.task-item {
  background: #FAFAFA;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
  margin-bottom: 15px;
  border-radius: 5px;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 5px solid transparent;
}

.task-item .title {
  font-size: 18px;
}

.task-item.done {
  border-left-color: lightgreen;
}

.task-item.done .title {
  text-decoration: line-through;
}

.form-check {
  padding-left: 0;
}

.form-check-label {
  cursor: pointer;
}

.form-check-input {
  font-size: 25px;
  margin-right: 10px;
  margin-left: 1px;
  margin-top: 2px;
  cursor: pointer;
}
.cancel-edit {
  position: absolute;
  top: 2px;
  right: 15px;
  color: gray;
  font-size: 30px;
  cursor: pointer;
}
.cancel-edit:hover {
  color: red;
}
</style>