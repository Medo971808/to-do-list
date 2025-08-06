<template>
  <section class="flex flex-wrap w-full">
    <h1 class="font-oswald text-3xl">Upcoming</h1>
    <p
      class="border-2 border-white rounded-lg py-1 text-xl ml-5 min-w-16 text-center mt-1"
      v-if="tasks.length > 0"
    >
      {{ tasks.length }}
    </p>

    <section class="border-2 p-10 border-white rounded-3xl w-full mt-5">
      <h1 class="font-oswald text-3xl mb-3">Today</h1>
      <router-link
        :to="{ name: 'NewTask' }"
        class="block border-2 border-white rounded-2xl p-2 w-full text-left mb-2"
        >+ Add new task</router-link
      >
      <section class="space-y-4">
        <label
          v-for="task in tasks.filter((t) => t.day === 'today')"
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

    <section
      class="w-full lg:w-[45%] mt-10 pl-10 pr-5 py-5 border-2 border-white rounded-3xl"
    >
      <h1 class="font-oswald text-3xl mb-3">Tomorrow</h1>
      <router-link
        :to="{ name: 'NewTask' }"
        class="block border-2 border-white rounded-2xl p-2 w-full text-left mb-2"
      >
        + Add new task
      </router-link>

      <section class="space-y-4">
        <label
          v-for="task in tasks.filter((t) => t.day === 'tomorrow')"
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

    <section
      class="w-full lg:w-[51%] lg:ml-10 mt-10 pl-10 pr-5 py-5 border-2 border-white rounded-3xl"
    >
      <h1 class="font-oswald text-3xl mb-3">This Week</h1>
      <router-link
        :to="{ name: 'NewTask' }"
        class="block border-2 border-white rounded-2xl p-2 w-full text-left mb-2"
        >+ Add new task</router-link
      >
      <section class="space-y-4">
        <label
          v-for="task in tasks.filter((t) => t.day === 'week')"
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
import getTasks from "@/composables/getTasks"
import getUser from "@/composables/getUser"
import deleteTask from "@/composables/DeleteTask"
import { onUnmounted } from "vue"

export default {
  setup() {
    const { user } = getUser()
    const { tasks, error, unsubscribe } = getTasks("tasks", user.value.uid)

    onUnmounted(() => {
      unsubscribe()
    })

    const handleDelete = async (taskId) => {
      const { remove } = deleteTask("tasks", taskId)
      await remove()

      const index = tasks.value.findIndex((t) => t.id === taskId)
      if (index !== -1) {
        tasks.value.splice(index, 1)
      }
    }
    console.log(tasks.value,'hi')

    return { tasks, error, handleDelete }
  },
}
</script>
