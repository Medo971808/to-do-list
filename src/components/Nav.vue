<template>
    <aside class=" bg-white max-h-[88vh] w-[20vw] rounded-3xl p-8 overflow-y-scroll overflow-x-hidden">
      <nav class="flex justify-between">
        <h1 class="font-extrabold font-oswald text-2xl">Menu</h1>
        <i class="fa-solid fa-bars text-2xl"></i>
      </nav>
      <input
        type="search"
        placeholder="Search..."
        class="mt-4 bg-gray-200 w-full rounded-xl px-5"
      />
      
      <h2 class="text-md font-extrabold font-oswald mt-12">Tasks</h2>
      <section class="w-full px-5 text-md text-gray-600 mt-3">
        <article class="text-center flex justify-between mb-2">
          <p><i class="fas fa-angles-right mr-2"></i>Upcoming</p>
          <p class="text-sm font-semibold bg-gray-200 rounded-md w-6">15+</p>
        </article>

        <article class="text-center flex justify-between mb-2">
          <p><i class="fa-solid fa-list mr-2"></i>Today</p>
          <p class="text-sm font-semibold bg-gray-200 rounded-md w-6">8</p>
        </article>

          <p class=" mb-2"><i class="fa-regular fa-calendar mr-2"></i>Calendar</p>
          <p class=" mb-2"><i class="fas fa-note-sticky mr-2"></i>Sticky Wall</p>
      </section>

      <h2 class="text-md font-extrabold font-oswald mt-12">Lists</h2>
      <section class="w-full px-2 text-md text-gray-600 mt-3 mb-12 max-h-">
        <p class=" w-full flex items-center bg-gray-200 rounded-xl px-1 mb-3"><span class="w-5 h-3 bg-[#FF0000] rounded-full mr-2"></span>Work</p>
        <p class=" w-full flex items-center bg-gray-200 rounded-xl px-1 mb-3"><span class="w-5 h-3 bg-[#61FF00] rounded-full mr-2"></span>Personal</p>
        <p class=" w-full flex items-center bg-gray-200 rounded-xl px-1 mb-3"><span class="w-5 h-3 bg-[#5D7DF0] rounded-full mr-2"></span>Study</p>
        <p class="px-2 text-gray-300 cursor-pointer"><i class="fa-solid fa-plus w-4 mr-2"></i>Add new list</p>
      </section>
      
      <p class="text-gray-600 text-lg mb-1 mr-1 w-full"><i class="fa-solid fa-bars-staggered mr-3"></i>Settings</p>
      <p class="text-gray-600 text-lg mr-1"><i class="fas fa-sign-out-alt mr-3"></i>Sign Out</p>
    </aside>
    
</template>

<script>
export default {

}
</script>