<template>
  <aside
    class="fixed shadow bg-white h-[100vh] lg:h-[94vh] w-[90%] mt-0 lg:w-[20vw] lg:rounded-3xl rounded-r-3xl p-8 text-black overflow-y-auto"
  >
    <nav class="flex justify-between">
      <h1 class="font-extrabold font-oswald text-2xl" v-if="user">Hello, {{ user.displayName }}</h1>
    </nav>
    <input
      type="search"
      placeholder="Search..."
      class="mt-4 bg-gray-200 w-full rounded-xl px-5"
    />

    <h2 class="text-md font-extrabold font-oswald mt-12">Tasks</h2>
    <section class="w-full px-5 text-md text-gray-600 mt-3">
      <router-link
        :to="{ name: 'Upcoming' }"
        class="flex justify-between items-center mb-2 rounded-3xl w-full"
        :class="route.name === 'Upcoming' ? 'bg-[#DFDFDF] p-1' : ''">
        <span class="flex items-center"><i class="fas fa-angles-right mr-2"></i>Upcoming</span>
        <p class="text-sm font-semibold rounded-3xl w-10 text-center" 
          :class="route.name === 'Upcoming' ? 'bg-white' : 'bg-gray-200'">
          {{ tasks.length>99 ? '+99' : tasks.length }}
        </p>
      </router-link>

      <router-link
        :to="{ name: 'Today' }"
        class="flex justify-between items-center mb-2 rounded-3xl w-full"
        :class="route.name === 'Today' ? 'bg-[#DFDFDF] p-1' : ''">
        <span class="flex items-center"><i class="fa-solid fa-list mr-2"></i>Today</span>
        <p class="text-sm font-semibold rounded-3xl w-10 text-center" :class="route.name === 'Today' ? 'bg-white' : 'bg-gray-200'">
          {{ todayTasks.length>99 ? '+99' : todayTasks.length }}
        </p>
      </router-link>
      
      <router-link
        :to="{ name: 'Calendar' }"
        class="flex justify-between items-center mb-2 rounded-3xl w-full"
        :class="route.name === 'Calendar' ? 'bg-[#DFDFDF] p-1' : ''">
        <span class="flex items-center"><i class="fa-regular fa-calendar mr-2"></i>Calendar</span>
      </router-link>
    </section>

    <h2 class="text-md font-extrabold font-oswald mt-12">Lists</h2>
    <section class="w-full px-2 text-md text-gray-600 mt-3 mb-12 max-h-">
      <p class="w-full flex items-center bg-gray-200 rounded-xl px-1 mb-3">
        <span class="w-5 h-3 bg-[#FF0000] rounded-full mr-2"></span>Work
      </p>
      <p class="w-full flex items-center bg-gray-200 rounded-xl px-1 mb-3">
        <span class="w-5 h-3 bg-[#61FF00] rounded-full mr-2"></span>Personal
      </p>
      <p class="w-full flex items-center bg-gray-200 rounded-xl px-1 mb-3">
        <span class="w-5 h-3 bg-[#5D7DF0] rounded-full mr-2"></span>Study
      </p>
      <router-link 
      :to="{name: 'NewTask'}" 
      class="block px-2 text-gray-600 cursor-pointer text-left mb-2"
      :class="route.name === 'NewTask' ? 'bg-[#DFDFDF] p-1 rounded-3xl' : ''">
      + Add new task</router-link>
    </section>

    <button class="text-gray-600 text-lg mr-1" @click="handleSignout">
      <i class="fas fa-sign-out-alt mr-3"></i>Sign Out
    </button>
    <p class="text-red-600 px-4 text-md mb-3 font-semibold" v-if="error">
      {{ error }}
    </p>
  </aside>
</template>

<script>
import getTasks from "@/composables/getTasks";
import getUser from "@/composables/getUser";
import useSignout from "@/composables/useSignout";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  props: ['user'],
  setup() {
    const { error, signout, isPending } = useSignout()
    const router = useRouter()
    const route = useRoute()
    const {user} = getUser()
    const {tasks} = getTasks('tasks', user.value.uid)
    const todayTasks = computed(() => 
      tasks.value.filter(task => task.day === 'today')
    )

    const handleSignout = async () => {
      await signout();
      if (!error.value) router.push({ name: "Login" });
    };

    return { error, handleSignout, isPending, route, tasks, todayTasks };
  },
};
</script>