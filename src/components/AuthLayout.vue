<template>
  <main class="flex min-h-screen bg-gradient-to-br from-[#111827] via-[#1f2937] to-black items-center justify-center p-4">
    <section class="lg:w-2/5 lg:block hidden lg:h-[87vh] lg:mr-10 lg:mb-0">
      <img src="../assets/tidyDay.png" class="w-full h-full object-cover rounded-3xl" alt="Tidy Day Logo" />
    </section>
    <section class="flex lg:w-2/5 w-full h-[60vh] lg:h-[87vh] bg-[#FFF9F9] text-center items-center justify-center p-10 rounded-3xl flex-wrap">
      <section class="w-[90%] lg:w-[75%]">
        <slot />
      </section>
    </section>
  </main>
</template>
