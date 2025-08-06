<template>
  <main class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-4">
    <section class="bg-white rounded-3xl shadow-2xl w-full max-w-xl px-10 py-12 text-gray-800 text-center">
      <img
        src="@/assets/medo.jpg"
        alt="Mohamed Abedy"
        class="w-32 h-32 mx-auto rounded-full mb-6 object-cover border-4 border-gray-300 shadow-md"
      />

      <h1 class="text-3xl font-bold mb-2">Mohamed Abedy</h1>
      
      <p class="text-base text-gray-600 mb-6">
        Frontend Developer with a passion for building modern and responsive user interfaces using 
        <span class="font-semibold text-black">Vue.js</span> and 
        <span class="font-semibold text-black">Tailwind CSS</span>.
        I focus on creating clean, accessible, and performance-optimized web apps with a great user experience.
      </p>

      <section class="flex justify-center space-x-6 text-2xl text-gray-500 mb-6">
        <a
          href="https://github.com/Medo971808"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-black transition-colors duration-200"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/medo.abedy"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-blue-700 transition-colors duration-200"
        >
          <i class="fab fa-facebook"></i>
        </a>
      </section>

      <router-link 
        to="/" 
        class="inline-block mt-4 text-sm text-gray-500 hover:text-gray-700 transition duration-150"
      >
        ← Back to Home
      </router-link>
    </section>
  </main>
</template>
