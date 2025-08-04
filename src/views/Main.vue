<template>
  <main
    class="flex min-h-screen bg-gradient-to-br from-[#111827] via-[#1f2937] to-black items-between justify-start px-12 py-5 text-white"
  >
  <Nav />
  <section class="w-[70vw]">
    <router-view />
  </section>
  </main>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Hero from '@/components/main/Hero.vue';

export default {
  components: { Nav, Hero },
};
</script>