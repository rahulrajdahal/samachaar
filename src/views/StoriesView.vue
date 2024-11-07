<script setup lang="ts">
import BackgroundImage from '@/components/BackgroundImage.vue';
import StoriesGrid from '@/components/StoriesGrid.vue';
import Story from '@/components/Story.vue';
import { useQuery } from '@tanstack/vue-query';
import { CursorCircleB } from 'meistericons-vue-latest';
import { computed } from 'vue';

const { data, isLoading } = useQuery({
  queryKey: ['stories'], queryFn: async () => {
    const response = await fetch(`${import.meta.env.VITE_NEWS_URL}/latest?apikey=${import.meta.env.VITE_NEWS_API_KEY}&country=np`)
    const data = await response.json();
    return data.results;
  }
})

const featuredStories = computed(() => data.value?.slice(0, 4))
const moreStories = computed(() => data.value?.slice(4, 10))
</script>

<template>
  <div class="bg-blue-100 px-[12.5%] pt-8 pb-40">
    <span v-if="isLoading">Loading...</span>

    <StoriesGrid v-else :stories="featuredStories" />
  </div>

  <div class="bg-blue-800 relative shadow-2xl h-56 flex gap-4 flex-col items-center py-8">
    <h2 class="text-2xl text-white font-bold">Story Categories</h2>

    <div class="flex relative top-0 items-center gap-10 w-fit">
      <BackgroundImage title="Food" :count=32
        image="https://imgs.search.brave.com/Vk-QiJ8i5_AfIUFUtb6kLOrPg0iSBVVnGouUaq7Yau4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODg2NDQ1MjUyNzMt/ZjM3YjYwZDc4NTEy/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1YeDhibVZ3/WVd4cEpUSXdabTl2/Wkh4bGJud3dmSHd3/Zkh4OE1BPT0" />
      <BackgroundImage title="Religion" :count=14
        image="https://imgs.search.brave.com/2AUvoC6KOv5_Kd983nUlT3e6u2iRWKJRPCtszHt_dhQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d29ybGRhdGxhcy5j/b20vci93MTIwMC91/cGxvYWQvYmQvY2Iv/ZDcvcGFzaHVwYXRp/bmF0aC10ZW1wbGUu/anBn" />
      <BackgroundImage title="Adventure" :count=13
        image="https://imgs.search.brave.com/7KZH856DrfB1FzkMCWggL53yY-KSTOQvyWpvtHJjYlM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvOTAx/MjA0OS5qcGc" />
      <BackgroundImage title="Nature" :count=55
        image="https://imgs.search.brave.com/hw1iKceaScj5owSG6gkQTunPYhdb7Fl2X4RDml6G4cA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzI1LzU2Lzgz/LzM2MF9GXzgyNTU2/ODM0OV9wVEZya2k0/a01PY2NOT2M5T0Zw/VHJBOERHV1BTZmYz/eS5qcGc" />
      <BackgroundImage title="Tourism" :count=32
        image="https://imgs.search.brave.com/7EictZUhD9-GJEFBrRitBu1fHTIK-XWMu4oJRgrZY1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dG91cm9waWEuY29t/L2dmeC9iLzIwMTgv/MDUvY2hpdHdhbl9u/YXRpb25hbF9wYXJr/LmpwZw" />
      <BackgroundImage title="Culture" :count=122
        image="https://imgs.search.brave.com/eU6Up632lAK-Qi45XnQkHczOFbhCRusj4OOq4V5bh9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXBhc2FsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/MS9UZXJhaS1OZXBh/bC0xMy1pbWFnZS1w/YXNhbC0yMDI0LTAx/LTI2LTYwMHg0MDAu/anBn" />
    </div>
  </div>

  <div class="flex justify-between gap-28 px-[12.5%] pt-40 pb-20 bg-blue-100">
    <div class="flex flex-col gap-10 w-full">
      <div class="flex items-center w-full justify-between">
        <h3 class="font-extrabold text-3xl">
          More Stories
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
