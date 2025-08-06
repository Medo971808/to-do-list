<template>
  <section class="w-full flex flex-wrap">
    <h1 class="font-oswald text-4xl tracking-wide">Today</h1>
    <p class=" border-2 border-white rounded-lg py-1 text-xl ml-5 min-w-16 text-center mt-1" v-if="todayTasks.length > 0">{{ todayTasks.length }}</p>
    <section class="mt-10 pl-10 pr-5 py-5 border-2 border-white rounded-3xl w-full">
      <h1 class="font-oswald text-3xl mb-3">Today</h1>
      <router-link :to="{name: 'NewTask'}" class="block border-2 border-white rounded-2xl p-2 w-full text-left mb-2">+ Add new task</router-link>
      <section class="space-y-4">
        <label
          v-for="task in todayTasks"
          :key="task.id"
          class="flex items-center space-x-3"
        >
          <input type="checkbox" 
          class="accent-white w-5 h-5" 
          @change="handleDelete(task.id)"
          />
          <router-link :to="`/tasks/${task.id}`">{{ task.title }}</router-link>
        </label>
      </section>
    </section>
  </section>
</template>

<script>
import { computed, onUnmounted } from 'vue'
import getTasks from '@/composables/getTasks'
import getUser from '@/composables/getUser'

export default {
  setup() {
    const { user } = getUser()
    const { tasks, error, unsubscribe } = getTasks('tasks', user.value.uid)

    onUnmounted(() => {
      unsubscribe()
    })

    const todayTasks = computed(() => 
      tasks.value.filter(task => task.day === 'today')
    )

    return { todayTasks, error }
  }
}
</script>