<template>
  <main
    class="flex min-h-screen bg-gradient-to-br from-[#111827] via-[#1f2937] to-black items-between justify-between px-12 py-10"
  >
  <Nav />
  <section class="h-[88vh] w-[70vw] bg-white rounded-3xl"></section>
  </main>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  components: { Nav },
};
</script>