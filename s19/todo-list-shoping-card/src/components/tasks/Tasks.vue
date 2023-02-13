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
            <button type="submit" class="btn btn-dark btn-lg w-100 d-flex justify-content-around"
              :disabled="miniLoading">
              <span class="spinner-grow spinner-grow-sm" v-if="miniLoading"></span>
              <i class="bi bi-check-lg" v-else></i>
              <span v-if="!editingTask">Add Task</span>
              <span v-else>Edit Task</span>
            </button>
          </div>
        </div>
        <small class="text-danger" v-if="hasError">Title is required</small>
      </form>

      <task-item v-for="task in tasks" :key="task.id" :task="task" @edit-task="onEditTask"></task-item>
    </div>

  </div>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import MainLoading from "../global/MainLoading.vue"
import { createGUID } from "../../functions.js"
import TaskItem from "./TaskItem.vue"

const store = useStore();
const isLoading = ref(false);
const miniLoading = ref(false);
const tasks = computed(() => store.getters['task/allTasks']);
const editingTask = ref(null);
const newTask = ref('');
const hasError = ref(false);

const fetchTasks = async () => {
  isLoading.value = true;
  await store.dispatch('task/fetchTasks');
  isLoading.value = false;
}

onMounted(() => {
  fetchTasks();
});

const onEditTask = (task) => {
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

    if (editingTask && editingTask.value) {

      // edit mode
      const editModel = {
        id: editingTask.value.id,
        title: newTask.value,
        completed: editingTask.value.completed
      };
      miniLoading.value = true;
      await store.dispatch('task/updateTask', editModel);
      editingTask.value = null;

    } else {

      // add mode
      const newModel = {
        id: createGUID(),
        title: newTask.value,
        completed: false
      };
      miniLoading.value = true;
      await store.dispatch('task/newTask', newModel);

    }

    miniLoading.value = false;
    newTask.value = '';
  }

}; // submitForm

</script>

<style scoped>
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