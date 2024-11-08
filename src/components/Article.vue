<template>
    <div class="flex flex-col md:flex-row md:items-center gap-4">
        <img :src="story.image_url" alt="story" class="aspect-video rounded-md md:w-40 md:h-20" />
        <div class="flex flex-col gap-1">
            <strong class="font-bold text-xl">{{ story.title }}</strong>
            <span class="flex text-sm font-normal text-gray-500 items-center gap-12">
                <p>21st Oct, 2019</p>
                <span class="flex items-center gap-1">
                    <ClockCircle class="w-4" />
                    <p v-if="story?.description && readingTime(story?.description) > 0">{{
                        readingTime(story?.description)
                        }} min</p>

                    <p v-else>8 min</p>

                </span>
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { readingTime } from '@/utils';
import { ClockCircle } from 'meistericons-vue-latest';
import type { NewsArticle } from '@/stores/news';

defineProps<{ story: NewsArticle }>()
</script>
