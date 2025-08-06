<template>
  <section class="h-full flex justify-center items-center">
    <section class="max-w-xl w-full p-6 bg-white rounded-3xl shadow text-black">
      <h1 class="text-3xl font-oswald mb-6 text-center">Task Details</h1>

      <section v-if="task">
        <p class="mb-4"><span class="font-semibold">Title:</span> {{ task.title }}</p>
        <p class="mb-4"><span class="font-semibold">Day:</span> {{ task.day }}</p>
        <p class="mb-4"><span class="font-semibold">Start Time:</span> {{ task.time }}</p>
        <p class="mb-4"><span class="font-semibold">End Time:</span> {{ task.endTime || 'Not specified' }}</p>

      </section>

      <p v-if="error" class="text-[#FF0000]">{{ error }}</p>

      <router-link
        to="/upcoming"
        class="inline-block mt-6 text-center w-full bg-black text-white p-3 rounded-xl hover:bg-gray-800 transition"
      >
        Back
      </router-link>
    </section>
  </section>
</template>

<script>
import { onMounted } from "vue"
import getOneTask from "@/composables/getOneTask"
import { useRoute } from "vue-router"

export default {
    setup() {
    const route = useRoute()

    const { task, error, load } = getOneTask("tasks", route.params.id)
    
    onMounted(() => {
        load()
    })
    
    return { task, error }
  }
}
</script>