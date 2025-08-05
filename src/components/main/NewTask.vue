<template>
  <section class="h-full flex justify-center items-center">
    <section class="max-w-xl w-full p-6 bg-white rounded-3xl shadow text-black">
      <h1 class="text-3xl font-oswald mb-6 text-center">Add New Task</h1>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <section>
          <label class="block mb-2 font-semibold">Task Title</label>
          <input
            v-model="title"
            type="text"
            class="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter task title"
            required
          />
        </section>

        <section>
          <label class="block mb-2 font-semibold">Day</label>
          <select
            v-model="day"
            class="w-full border border-gray-300 rounded-lg p-2"
            required
          >
            <option disabled value="">Select day</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="week">This Week</option>
          </select>
        </section>

        <section class="flex gap-4">
          <section class="flex-1">
            <label class="block mb-2 font-semibold">Start Time</label>
            <input
              v-model="time"
              type="time"
              class="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </section>
          <section class="flex-1">
            <label class="block mb-2 font-semibold">End Time</label>
            <input
              v-model="endTime"
              type="time"
              class="w-full border border-gray-300 rounded-lg p-2"
            />
          </section>
        </section>

        <button
          type="submit"
          class="w-full bg-black text-white p-3 rounded-xl hover:bg-gray-800 transition"
          :class="isPending ? 'disabled' : ''"
        >
          Save Task
        </button>

        <p v-if="error" class="text-[#FF0000]">{{ error }}</p>
      </form>
    </section>
  </section>
</template>

<script>
import { ref } from "vue";
import useAddTask from "@/composables/useAddTask";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";
import { serverTimestamp } from "firebase/firestore";

export default {
  setup() {
    const title = ref("");
    const day = ref("");
    const time = ref("");
    const endTime = ref("");

    const router = useRouter();
    const { addTask, error, isPending } = useAddTask("tasks");
    const { user } = getUser();

    const handleSubmit = async () => {
      if (!user.value) {
        error.value = "User not logged in";
        return;
      }

      await addTask({
        title: title.value,
        day: day.value,
        time: time.value,
        endTime: endTime.value,
        userId: user.value.uid,
        createdAt: serverTimestamp(),
        completed: false,
      });

      if (!error.value) {
        title.value = "";
        day.value = "";
        time.value = "";
        endTime.value = "";
        router.push({ name: "Upcoming" });
      }
    };

    return {
      title,
      day,
      time,
      endTime,
      handleSubmit,
      error,
      isPending,
    };
  },
};
</script>
