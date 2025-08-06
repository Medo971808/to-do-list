<template>
  <section
    class="relative flex min-h-screen bg-gradient-to-br from-[#111827] via-[#1f2937] to-black items-between justify-start px-12 py-5 text-white"
  >
    <i
      :class="showNav ? 'hidden' : ''"
      class="fixed fa-solid fa-bars text-2xl block lg:hidden mr-6 z-50 cursor-pointer"
      @click="showNav = true"
    ></i>

    <Nav v-if="!showNav" :user="user" class="hidden lg:block" />

    <transition name="slide">
      <div
        v-if="showNav"
        class="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex justify-start"
      >
        <div
          class="w-[75%] sm:w-[60%] md:w-[40%] h-full transform transition-transform duration-300 ease-in-out"
        >
          <Nav :user="user" />
        </div>

        <div class="flex-1" @click="showNav = false"></div>
      </div>
    </transition>

    <main
      :class="[
        'transition-all duration-300',
        showNav ? 'blur-sm pointer-events-none' : ''
      ]"
      class="lg:ml-[23vw] lg:w-[70vw] w-[100vw] ml-10"
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
