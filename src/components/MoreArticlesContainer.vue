<template>
    <div :class="containerClass"
        class="flex flex-col xl:flex-row justify-between px-4 gap-14 md:gap-28 md:px-[12.5%] pt-10 pb-20 bg-blue-100">
        <div class="flex flex-col gap-10 w-full">
            <div class="flex items-center w-full justify-between">
                <h3 class="font-extrabold text-xl md:text-3xl">
                    {{ title }}
                </h3>

                <span class="flex gap-6 items-center">
                    <RouterLink to="recent" class="text-blue-500 text-base md:text-lg">
                        Recent
                    </RouterLink>
                    <RouterLink to="popular" class="text-gray-500 text-base md:text-lg">
                        Popular
                    </RouterLink>
                </span>
            </div>

            <div class="flex flex-col gap-8">
                <Article v-for="article in moreArticles" :key="article.article_id" :story="article" />
            </div>

        </div>
        <WeeklyNewsletter />
    </div>
</template>

<script lang="ts" setup>
import type { NewsArticle } from '@/utils';
import Article from './Article.vue';
import WeeklyNewsletter from './WeeklyNewsletter.vue';

defineProps<{ moreArticles: NewsArticle[], title: string, containerClass?: string }>()
</script>