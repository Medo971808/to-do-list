<template>
  <main class="flex min-h-screen bg-gradient-to-br from-[#111827] via-[#1f2937] to-black items-center justify-center p-4">
    <section class="lg:w-2/5 lg:block hidden lg:h-[87vh] lg:mr-10 lg:mb-0">
      <img src="../assets/todolist.png" class="w-full h-full object-cover rounded-3xl" alt="To-do List" />
    </section>
    <section class="flex lg:w-2/5 w-full h-[80vh] lg:h-[87vh] bg-[#FFF9F9] text-center items-center justify-center p-10 rounded-3xl flex-wrap">
      <section v-if="!showSignup && !showLogin" class="w-[75%]">
        <h1 class="text-3xl mb-4 font-oswald">ToDo Py</h1>
        <p class="text-[#000000] leading-tight mb-6 text-left">
          Stay Organized, Get Things Done: Your Ultimate To-Do List App.
          A todo list app is a digital task management tool designed to help users
          organize and prioritize their daily activities and responsibilities.
        </p>
        <button
          class="block bg-[#271b67] hover:bg-[#1c173e] text-white px-6 py-2 rounded-xl w-full mb-5"
          @click="switchToSignup">
          Get Started
        </button>
        <p class="text-sm text-black">
          Already have an account?
          <button class="text-black font-bold ml-1" @click="switchToLogin">Sign In</button>
        </p>
      </section>
      <Signup v-if="showSignup" @switchToLogin="switchToLogin" />
      <Login v-if="showLogin" @switchToSignup="switchToSignup" />
    </section>
  </main>
</template>

<script>
import { ref } from 'vue';
import Signup from '@/components/home/Signup';
import Login from '@/components/home/Login';

export default {
  components: { Signup, Login },
  setup(){
    const showSignup = ref(false)
    const showLogin = ref(false)

    const switchToLogin = () => {
      showSignup.value = false
      showLogin.value = true
    }

    const switchToSignup = () => {
      showLogin.value = false
      showSignup.value = true
    }

    return { showSignup, showLogin, switchToLogin, switchToSignup }
  }
}
</script>