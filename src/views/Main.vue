<template>
  <section
    class="flex min-h-screen bg-gradient-to-br from-[#111827] via-[#1f2937] to-black items-between justify-start px-12 py-5 text-white"
  >
  <Nav :user="user"/>
  <main class="ml-[23vw] w-[70vw]">
  <router-view />
</main>
  </section>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Hero from '@/components/main/Hero.vue';
import getUser from '@/composables/getUser';

export default {
  components: { Nav, Hero },
  setup() {
    const {user} = getUser()

    return { user }
  }
};
</script>