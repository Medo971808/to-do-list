<template>
  <section
    class="relative flex min-h-screen bg-gradient-to-br from-[#111827] via-[#1f2937] to-black items-between justify-start px-3 lg:px-12 py-5 text-white"
  >
    <section class="top-0 left-0 flex items-center h-14 w-full fixed bg-[#8B5CF6] px-5 lg:hidden">
      <i
        class="fa-solid fa-bars text-2xl w-full z-50 cursor-pointer"
        @click="showNav = true"
      ></i>
    </section>

    <Nav v-if="!showNav" :user="user" class="hidden lg:block" />

    <transition name="slide">
      <section
        v-if="showNav"
        class="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex justify-start"
      >
        <section
          class="w-[75%] sm:w-[60%] md:w-[40%] h-full transform transition-transform duration-300 ease-in-out"
        >
          <Nav :user="user" />
        </section>

        <section class="flex-1" @click="showNav = false"></section>
      </section>
    </transition>

    <main
      :class="[
        'transition-all duration-300',
        showNav ? 'blur-sm pointer-events-none' : ''
      ]"
      class="lg:ml-[23vw] lg:w-[70vw] w-[100vw] mt-12 lg:mt-0"
    >
      <router-view />
    </main>
  </section>
</template>

<script>
import { ref } from 'vue'
import Nav from '@/components/Nav.vue'
import Hero from '@/components/Hero.vue'
import getUser from '@/composables/getUser'

export default {
  components: { Nav, Hero },
  setup() {
    const { user } = getUser()
    const showNav = ref(false)

    return { user, showNav }
  }
}
</script>

<style scoped>
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
</style>
