<template>
  <section class="w-full">
    <header class="flex justify-between items-center mb-4">
      <h1 class="font-oswald text-4xl tracking-wide">{{ currentDate }}</h1>
      <button
        class="border border-gray-400 px-3 py-1 rounded hover:bg-gray-100 hover:text-black transition"
        @click="addEvent"
      >
        Add Event
      </button>
    </header>

    <section class="flex gap-2 mb-4">
      <button
        v-for="view in views"
        :key="view"
        class="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-100 hover:text-black transition"
        :class="{ 'bg-gray-200 text-black': activeView === view }"
        @click="activeView = view"
      >
        {{ view }}
      </button>
    </section>

    <section
      class="border border-gray-300 rounded-2xl w-full overflow-y-auto relative"
      style="height: 80vh;"
    >
      <h2 class="font-bold text-center mt-4 mb-2 text-xl">Tuesday</h2>

      <section class="flex">
        <section class="w-[12vw] border-r border-gray-200 pr-2">
          <section
            v-for="(hour, index) in hours"
            :key="index"
            class="h-[60px] flex flex-col justify-center text-right pr-2 text-gray-600 text-sm"
          >
            <span>{{ hour.time }}</span>
            <span>{{ hour.period }}</span>
          </section>
        </section>
        <section class="flex-1 relative">
          <section
            v-for="(event, index) in events"
            :key="index"
            class="absolute px-3 py-2 rounded text-sm text-black"
            :class="event.bg"
            :style="{
              top: `${event.start * slotHeight}px`,
              height: `${event.duration * slotHeight}px`,
              left: '1%',
              right: '1%'
            }"
          >
            {{ event.title }}
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const hours = ref([
  { time: '12:00', period: 'AM' },
  { time: '1:00', period: 'AM' },
  { time: '2:00', period: 'AM' },
  { time: '3:00', period: 'AM' },
  { time: '4:00', period: 'AM' },
  { time: '5:00', period: 'AM' },
  { time: '6:00', period: 'AM' },
  { time: '7:00', period: 'AM' },
  { time: '8:00', period: 'AM' },
  { time: '9:00', period: 'AM' },
  { time: '10:00', period: 'AM' },
  { time: '11:00', period: 'AM' },
  { time: '12:00', period: 'PM' },
  { time: '1:00', period: 'PM' },
  { time: '2:00', period: 'PM' },
  { time: '3:00', period: 'PM' },
  { time: '4:00', period: 'PM' },
  { time: '5:00', period: 'PM' },
  { time: '6:00', period: 'PM' },
  { time: '7:00', period: 'PM' },
  { time: '8:00', period: 'PM' },
  { time: '9:00', period: 'PM' },
  { time: '10:00', period: 'PM' },
  { time: '11:00', period: 'PM' },
])

const slotHeight = 60

const events = ref([
  { title: 'Database create for company', start: 0, duration: 1, bg: 'bg-cyan-100' },
  { title: 'Meet work team', start: 2, duration: 1, bg: 'bg-cyan-200' },
  { title: 'Database create for company', start: 6, duration: 1, bg: 'bg-red-200' },
])

const views = ['Day', 'Week', 'Month']
const activeView = ref('Day')

const currentDate = '17 October 2023'

function addEvent() {
  events.value.push({
    title: 'New Event',
    start: 4,
    duration: 1,
    bg: 'bg-green-200'
  })
}
</script>
