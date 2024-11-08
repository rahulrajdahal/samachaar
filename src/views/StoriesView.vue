<script setup lang="ts">
import BackgroundImage from '@/components/BackgroundImage.vue';
import MoreArticlesContainer from '@/components/MoreArticlesContainer.vue';
import StoriesGrid from '@/components/StoriesGrid.vue';
import { useNewsStore } from '@/stores/news';
import { storeToRefs } from 'pinia';

const newsStore = useNewsStore()
const { featuredStories, isLoading, moreArticles } = storeToRefs(newsStore)

</script>

<template>
  <div class="bg-blue-100 px-4 md:px-[12.5%] pt-8 pb-40">
    <span v-if="isLoading">Loading...</span>
    <StoriesGrid v-else :stories="featuredStories" />
  </div>

  <div class="bg-blue-800 relative shadow-2xl 2xl:h-56 flex gap-4 flex-col items-center py-8">
    <h2 class="text-xl md:text-2xl text-white font-bold">Story Categories</h2>

    <div class="flex relative top-0 items-center max-2xl:justify-center gap-2 flex-wrap md:gap-10 w-fit">
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

  <span v-if="isLoading">Loading...</span>
  <MoreArticlesContainer v-else title="More Stories" container-class="pt-40" :more-articles="moreArticles" />
</template>
