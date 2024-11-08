import { fetchNews } from "@/api";
import { useQuery } from "@tanstack/vue-query";
import { defineStore } from "pinia";
import { computed } from "vue";

export type NewsArticle = { title: string, article_id: string, image_url: string, description?: string }

export const useNewsStore = defineStore('news', () => {
    const { isLoading, data } = useQuery({ queryKey: ['stories'], queryFn: fetchNews })

    const featuredStories = computed(() => (data.value as NewsArticle[])?.slice(0, 4))
    const moreArticles = computed(() => (data.value as NewsArticle[])?.slice(4, 10))


    return {
        isLoading,
        featuredStories,
        moreArticles,
    }
})