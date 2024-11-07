<script setup lang="ts">
import StoriesGrid from '@/components/StoriesGrid.vue';
import Story from '@/components/Story.vue';
import { useQuery } from '@tanstack/vue-query';
import { CursorCircleB } from 'meistericons-vue-latest';
import { computed } from 'vue';

const { data, isLoading } = useQuery({
  queryKey: ['stories']
})

const featuredStories = computed(() => data.value?.slice(0, 4))
const moreStories = computed(() => data.value?.slice(4, 10))
</script>

<template>
  <div class="bg-blue-100 px-[12.5%] pt-8 pb-16">
    <span v-if="isLoading">Loading...</span>

    <StoriesGrid v-else :stories="featuredStories" />
  </div>



  <div class="flex justify-between gap-28 px-[12.5%] pt-10 pb-20 bg-blue-100">
    <div class="flex flex-col gap-10 w-full">
      <div class="flex items-center w-full justify-between">
        <h3 class="font-extrabold text-3xl">
          In other News...
        </h3>

        <span class="flex gap-6 items-center">
          <RouterLink to="recent" class="text-blue-500 text-lg">
            Recent
          </RouterLink>
          <RouterLink to="popular" class="text-gray-500 text-lg">
            Popular
          </RouterLink>
        </span>
      </div>

      <div class="flex flex-col gap-8">
        <Story v-for="story in moreStories" :key="story.article_id" :story="story" />
      </div>

    </div>

    <div class="w-full py-12 px-8 h-fit max-w-[25rem] rounded-md bg-blue-600">
      <span class="mb-4 bg-yellow-400 flex items-center justify-center w-16 h-16 rounded-full">
        <CursorCircleB class="w-10" />
      </span>

      <strong class="font-semibold text-2xl text-white">
        Subscribe to our weekly newsletter
      </strong>
      <p class="text-base mt-2 mb-8 font-medium text-white">No spam and notifications. We only email you our featured
        stories
        and
        updates.
      </p>

      <form class="flex flex-col gap-2">
        <input type="email" placeholder="Your Email Address"
          class="rounded-md bg-white border-none outline-none py-2 px-4" />
        <button type="submit" class="w-fit px-4 py-2 rounded-md bg-yellow-500 text-white text-base">Subscribe</button>
      </form>
    </div>
  </div>
</template>
