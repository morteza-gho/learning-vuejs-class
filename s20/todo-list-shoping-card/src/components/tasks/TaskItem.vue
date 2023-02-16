<template>

  <div class="task-item" :class="task.completed ? 'done' : ''">

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

</template>

<script setup>

import { defineProps, defineEmits } from 'vue';
import { useStore } from 'vuex';
import { useToast } from 'vue-toast-notification';

const store = useStore();
const toast = useToast();

const props = defineProps({
  task: Object
});

const emmits = defineEmits(['editTask'])

const changeTaskStatus = async (task) => {
  task.completed = !task.completed;
  await store.dispatch('task/updateTask', task)
};

const editTask = (item) => {
  emmits('editTask', item);
};

const deleteTask = async (id) => {
  if (window.confirm('Are you sure to delete this task?')) {
    await store.dispatch('task/deleteTask', id);
    toast.success('Task was deleted');
  }
};

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
</style>