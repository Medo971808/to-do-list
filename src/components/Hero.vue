<template>
    <section class="h-full flex items-center justify-center">
        <section class="h-[50vh] lg:h-[95vh] w-[90vw] lg:w-[70vw] bg-white rounded-3xl flex flex-col items-center justify-center text-center text-black">
            <h1 class=" font-oswald font-bold text-4xl mb-10">Wellcome to Tidy Day</h1>
            <p class="w-[70vw] lg:w-[40vw] mb-10 text-sm lg:text-lg">
                A to-do app is a simple, user-friendly digital tool designed to help individuals and teams 
                organize tasks and manage their daily activities efficiently. Users can create, edit, and prioritize tasks, 
                set deadlines or reminders, categorize items, and track their progress, all within an intuitive and accessible interface. 
                These apps are essential for improving productivity, 
                reducing stress, and ensuring that important responsibilities are not forgotten.
            </p>
            <router-link :to="{ name: 'Upcoming'}"
                class="font-oswald w-[30vw] h-10 text-2xl flex justify-center items-center rounded-lg bg-[#271b67] hover:bg-[#1c173e] text-white">
                Go to tasks
            </router-link>
        </section>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>