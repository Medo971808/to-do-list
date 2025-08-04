<template>
  <aside
    class="bg-white max-h-[95vh] w-[20vw] rounded-3xl p-8 overflow-y-auto overflow-x-hidden text-black mr-10"
  >
    <nav class="flex justify-between">
      <h1 class="font-extrabold font-oswald text-2xl">Menu</h1>
      <i class="fa-solid fa-bars text-2xl hidden lg:blockz"></i>
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
        <p class="text-sm font-semibold rounded-3xl w-10 text-center" :class="route.name === 'Upcoming' ? 'bg-white' : 'bg-gray-200'">15+</p>
      </router-link>

      <router-link
        :to="{ name: 'Today' }"
        class="flex justify-between items-center mb-2 rounded-3xl w-full"
        :class="route.name === 'Today' ? 'bg-[#DFDFDF] p-1' : ''">
        <span class="flex items-center"><i class="fa-solid fa-list mr-2"></i>Today</span>
        <p class="text-sm font-semibold rounded-3xl w-10 text-center" :class="route.name === 'Today' ? 'bg-white' : 'bg-gray-200'">15+</p>
      </router-link>
      
      <router-link
        :to="{ name: 'Calendar' }"
        class="flex justify-between items-center mb-2 rounded-3xl w-full"
        :class="route.name === 'Calendar' ? 'bg-[#DFDFDF] p-1' : ''">
        <span class="flex items-center"><i class="fa-regular fa-calendar mr-2"></i>Calendar</span>
      </router-link>
      <!-- <router-link class=" mb-2"><i class="fas fa-note-sticky mr-2"></i>Sticky Wall</router-link> -->
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
      <p class="px-2 text-gray-300 cursor-pointer">
        <i class="fa-solid fa-plus w-4 mr-2"></i>Add new list
      </p>
    </section>

    <button class="text-gray-600 text-lg mb-1 mr-1 w-full text-left">
      <i class="fa-solid fa-bars-staggered mr-3"></i>Settings
    </button>
    <button class="text-gray-600 text-lg mr-1" @click="handleSignout">
      <i class="fas fa-sign-out-alt mr-3"></i>Sign Out
    </button>
    <p class="text-red-600 px-4 text-md mb-3 font-semibold" v-if="error">
      {{ error }}
    </p>
  </aside>
</template>

<script>
import useSignout from "@/composables/useSignout";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const { error, signout, isPending } = useSignout()
    const router = useRouter()
    const route = useRoute()

    const handleSignout = async () => {
      await signout();
      if (!error.value) router.push({ name: "Login" });
    };

    return { error, handleSignout, isPending, route };
  },
};
</script>