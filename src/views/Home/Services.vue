<template>
    <ul class="flex items-center justify-evenly">
        <li v-for="({ id, title, description }) in services" :key="id"
            class="text-gray-500 flex relative flex-col gap-1 max-w-[15%]">
            <strong class="font-semibold tracking-tighter text-md uppercase">{{ title }}</strong>
            <p class="font-medium text-base">{{ description }}</p>
            <span class="absolute -right-24 h-full bg-gray-400 w-0.5" v-if="id !== 3" />
        </li>
    </ul>
</template>

<script lang="ts" setup>
const services = [
    { id: 1, title: "STORIES", description: "The Magic of Tihar - Nepal's Festival of Lights." },
    { id: 2, title: "NEWS", description: "Mr. Thapa joins in as the new head for the trip platform." },
    { id: 3, title: "TRAVEL", description: "Top 20 Destinations for Extreme Adventure." },
]
</script>
