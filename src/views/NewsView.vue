<script setup lang="ts">
import MoreArticlesContainer from '@/components/MoreArticlesContainer.vue';
import StoriesGrid from '@/components/StoriesGrid.vue';
import type { NewsArticle } from '@/utils';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';

const { data, isLoading } = useQuery({
  queryKey: ['stories']
})

const featuredStories = computed(() => (data.value as NewsArticle[])?.slice(0, 4))
const moreStories = computed(() => (data.value as NewsArticle[])?.slice(4, 10))
</script>

<template>
  <div class="bg-blue-100 px-4 md:px-[12.5%] pt-8 pb-16">
    <span v-if="isLoading">Loading...</span>

    <StoriesGrid v-else :stories="featuredStories" />
  </div>


  <span v-if="isLoading">Loading...</span>
  <MoreArticlesContainer title="In other news..." :more-articles="moreStories" />
</template>
