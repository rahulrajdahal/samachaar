<template>
  <HomeHeader />

  <div class="bg-gray-100 py-24">
    <div class="flex flex-col md:flex-row items-center justify-center max-md:gap-8 md:justify-evenly">
      <Service v-for="service in services" :key="service.id" :service="service" />
    </div>


    <div class="flex flex-col gap-4 mt-24 w-full items-center justify-center px-[12.5%]">
      <h3 class="font-bold text-2xl text-gray-700">Stories for You</h3>
      <span v-if="isLoading">Loading...</span>
      <StoriesGrid v-else :stories="featuredStories" direction="right" />
    </div>
  </div>
  <WhyVisit />
  <MoreStories />
  <ThingsToDo />
</template>

<script setup lang="ts">
import HomeHeader from './HomeHeader.vue';
import MoreStories from './MoreStories.vue';
import ThingsToDo from './ThingsToDo.vue';
import WhyVisit from './WhyVisit.vue';
import Service from '@/components/Service.vue';
import StoriesGrid from '@/components/StoriesGrid.vue';
import { useNewsStore } from '@/stores/news';
import { storeToRefs } from 'pinia';

const newsStore = useNewsStore()
const { featuredStories, isLoading } = storeToRefs(newsStore)

const services = [
  { id: 1, title: "STORIES", description: "The Magic of Tihar - Nepal's Festival of Lights." },
  { id: 2, title: "NEWS", description: "Mr.Thapa joins in as the new head for the trip platform." },
  { id: 3, title: "TRAVEL", description: "Top 20 Destinations for Extreme Adventure." },
]
</script>
