<template>
  <AuthLayout>
    <h1 class="text-3xl mb-4 font-oswald">ToDo Py</h1>
    <p class="text-[#000000] leading-tight mb-6 text-left">
      Stay Organized, Get Things Done: Your Ultimate To-Do List App.
      A todo list app is a digital task management tool designed to help users
      organize and prioritize their daily activities and responsibilities.
    </p>
    <router-link :to="{name: 'Signup'}"
      class="block bg-[#271b67] hover:bg-[#1c173e] text-white px-6 py-2 rounded-xl w-full mb-5">
      Get Started
    </router-link>
    <p class="text-sm text-black">
      Already have an account?
      <router-link :to="{name: 'Login'}" class="text-black font-bold ml-1">Sign In</router-link>
    </p>
  </AuthLayout>
</template>

<script>
import AuthLayout from '@/components/AuthLayout.vue'

export default {
  name: 'Home',
  components: {
    AuthLayout
  }
}
</script>
