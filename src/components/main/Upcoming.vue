<template>
  <section class=" flex flex-wrap w-full">
    <h1 class="font-oswald text-3xl">Upcoming</h1>
    <p class=" border-2 border-white rounded-lg py-1 text-xl ml-5 w-16 text-center mt-1" v-if="tasks.length > 0">{{ tasks.length }}</p>

    <section class="border-2 p-10 border-white rounded-3xl w-full mt-5">
      <h1 class="font-oswald text-3xl mb-3">Today</h1>
      <router-link :to="{name: 'NewTask'}" class="block border-2 border-white rounded-2xl p-2 w-full text-left mb-2">+ Add new task</router-link>
      <section class="space-y-4">
        <label
          v-for="task in tasks.filter(t => t.day === 'today')"
          :key="task.id"
          class="flex items-center space-x-3"
        >
          <input type="checkbox" class="accent-white w-5 h-5">
          <span>{{ task.title }}</span>
        </label>
      </section>
    </section>
    
    <section class="w-[45%] mt-10 pl-10 pr-5 py-5 border-2 border-white rounded-3xl">
      <h1 class="font-oswald text-3xl mb-3">Tomorrow</h1>
      <router-link :to="{ name: 'NewTask' }" class="block border-2 border-white rounded-2xl p-2 w-full text-left mb-2">
        + Add new task
      </router-link>

      <section class="space-y-4">
        <label
          v-for="task in tasks.filter(t => t.day === 'tomorrow')"
          :key="task.id"
          class="flex items-center space-x-3"
        >
          <input type="checkbox" class="accent-white w-5 h-5">
          <span>{{ task.title }}</span>
        </label>
      </section>
    </section>
    
    <section class="w-[51%] ml-10 mt-10 pl-10 pr-5 py-5 border-2 border-white rounded-3xl">
      <h1 class="font-oswald text-3xl mb-3">This Week</h1>
      <router-link :to="{name: 'NewTask'}" class="block border-2 border-white rounded-2xl p-2 w-full text-left mb-2">+ Add new task</router-link>
      <section class="space-y-4">
        <label
          v-for="task in tasks.filter(t => t.day === 'week')"
          :key="task.id"
          class="flex items-center space-x-3"
        >
          <input type="checkbox" class="accent-white w-5 h-5">
          <span>{{ task.title }}</span>
        </label>
      </section>
    </section>
    
  </section>
</template>

<script>
import getTasks from '@/composables/getTasks';
import getUser from '@/composables/getUser';

export default {
  setup() {
    const {user} = getUser()
    const {tasks, error} = getTasks('tasks', user.value.uid)

    return { tasks, error }
  }
}
</script>
