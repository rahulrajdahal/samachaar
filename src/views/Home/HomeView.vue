<template>
  <HomeHeader />

  <div class="bg-gray-100 py-24">
    <Services />
    <Stories />
  </div>
  <WhyVisit />
  <MoreStories />
  <ThingsToDo />
</template>

<script setup lang="ts">
import HomeHeader from './HomeHeader.vue';
import MoreStories from './MoreStories.vue';
import Services from './Services.vue';
import Stories from './Stories.vue';
import ThingsToDo from './ThingsToDo.vue';
import WhyVisit from './WhyVisit.vue';
</script>
