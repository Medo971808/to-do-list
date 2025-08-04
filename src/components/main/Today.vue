<template>
  <section class=" flex flex-wrap w-full">
    <h1 class="font-oswald text-4xl tracking-wide">Today</h1>
    <p class=" border-2 border-white rounded-lg py-1 text-xl ml-5 w-16 text-center">8</p>
    <section class="border-2 p-10 border-white rounded-3xl w-full mt-5 h-[85vh]">
      <h1 class="font-oswald text-4xl tracking-wide mb-3">Today</h1>
      <button class="border-2 border-white rounded-2xl p-2 w-full text-left mb-2">+ Add new task</button>
      <section class="space-y-4">
        <label class="flex items-center space-x-3">
          <input type="checkbox" class="accent-white w-5 h-5">
          <span>Database create for company</span>
        </label>

        <label class="flex items-center space-x-3">
          <input type="checkbox" class="accent-white w-5 h-5">
          <span>Websites templates</span>
        </label>

        <label class="flex items-center space-x-3">
          <input type="checkbox" class="accent-white w-5 h-5">
          <span>Meet work team</span>
        </label>
      </section>
    </section>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>