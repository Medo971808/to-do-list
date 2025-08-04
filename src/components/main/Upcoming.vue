<template>
  <section class=" flex flex-wrap w-full">
    <h1 class="font-oswald text-3xl">Upcoming</h1>
    <p class=" border-2 border-white rounded-lg py-1 text-xl ml-5 w-16 text-center">18</p>
    <section class="border-2 p-10 border-white rounded-3xl w-full mt-5">
      <h1 class="font-oswald text-3xl mb-3">Today</h1>
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
    <section class="w-[45%] mt-10 pl-10 pr-5 py-5 border-2 border-white rounded-3xl">
      <h1 class="font-oswald text-3xl mb-3">Tomorrow</h1>
      <button class="border-2 border-white rounded-2xl p-2 w-full text-left mb-2">+ Add new task</button>
      <section class="space-y-4">
        <label class="flex items-center space-x-3">
          <input type="checkbox" class="accent-white w-5 h-5">
          <span>Work teem</span>
        </label>
  
        <label class="flex items-center space-x-3">
          <input type="checkbox" class="accent-white w-5 h-5">
          <span>Job interview</span>
        </label>
      </section>
    </section>
    <section class="w-[51%] ml-10 mt-10 pl-10 pr-5 py-5 border-2 border-white rounded-3xl h-[39vh]">
      <h1 class="font-oswald text-3xl mb-3">This Week</h1>
      <button class="border-2 border-white rounded-2xl p-2 w-full text-left mb-2">+ Add new task</button>
      <section class="space-y-4">
        <label class="flex items-center space-x-3">
          <input type="checkbox" class="accent-white w-5 h-5">
          <span>Research content ideas</span>
        </label>
  
        <label class="flex items-center space-x-3">
          <input type="checkbox" class="accent-white w-5 h-5">
          <span>Consult accountant</span>
        </label>
  
        <label class="flex items-center space-x-3">
          <input type="checkbox" class="accent-white w-5 h-5">
          <span>Print business card</span>
        </label>
      </section>
    </section>
  </section>
</template>

<script>
export default {}
</script>
