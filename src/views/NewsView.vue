<script setup lang="ts">
import MoreArticlesContainer from '@/components/MoreArticlesContainer.vue';
import StoriesGrid from '@/components/StoriesGrid.vue';
import { storeToRefs } from 'pinia';
import { useNewsStore } from '@/stores/news';

const newsStore = useNewsStore()
const { featuredStories, isLoading, moreArticles } = storeToRefs(newsStore)
</script>

<template>
  <div class="bg-blue-100 px-4 md:px-[12.5%] pt-8 pb-16">
    <span v-if="isLoading">Loading...</span>
    <StoriesGrid v-else :stories="featuredStories" />
  </div>


  <span v-if="isLoading">Loading...</span>
  <MoreArticlesContainer v-else title="In other news..." :more-articles="moreArticles" />
</template>
