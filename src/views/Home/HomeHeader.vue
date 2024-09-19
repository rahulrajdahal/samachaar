<template>
    <div class="h-[40rem] w-full relative" :style="activeBackground">
        <ul class="absolute right-0 top-32 py-10 bg-black bg-opacity-35">
            <li v-for="({ id, title, image }) in featuredNews" :key="id" @click="getActiveBackground(id)"
                class="px-8 py-4 w-[45rem] relative flex gap-4 items-center hover:cursor-pointer">
                <span v-if="activeHeader.id === id" class="h-full bg-white w-1 absolute left-0"></span>
                <img :src="image" :alt="title" width="60" height="60" class="aspect-square w-24 h-14" />
                <div class="flex flex-col w-full">
                    <strong class="text-lg font-bold text-white">{{ title }}</strong>
                    <div class="flex gap-4 items-center w-full">
                        <p class="text-sm text-gray-50">12th Nov, 2019</p>
                        <span class="flex gap-2 text-sm text-gray-50 items-center">
                            <ClockCircle class="w-4" />
                            <p>3 min</p>
                        </span>
                    </div>
                </div>
            </li>
        </ul>


        <div class="flex gap-3 h-full flex-col justify-end ml-24 pb-12">
            <span class="capitalize px-4 py-2 bg-yellow-600 text-white max-w-max">FEATURED</span>

            <strong class="text-3xl text-white font-extrabold">{{ activeHeader.title }}</strong>
            <div class="flex gap-8 items-center w-full">
                <p class="text-gray-200 font-semibold text-base">12th Nov, 2019</p>
                <span class="flex gap-2 items-center text-gray-200 font-semibold text-base">
                    <ClockCircle class="w-4" />
                    <p>3 min</p>
                </span>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ClockCircle } from 'meistericons-vue-latest';
import { reactive, ref } from 'vue';

const featuredNews = reactive([{
    id: 1, title: "Top 20 Reasons to Visit Nepal in 2020", image: "https://imgs.search.brave.com/qbYbRgZCz9jR8kGZrlkoloEUVfagSkkpzlc8b0nPAfY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL2Zp/bHRlci9ubC9pbWcv/Mzc0MTUwL1RyaXBE/b2N1bWVudC8xNTA4/NTk0NTMzXzFfa2Fu/Y2hlanVuZ2EuanBn/LndlYnA"
},
{
    id: 2, title: 'My Pilgrimage to the birthplace of Buddha', image: "https://imgs.search.brave.com/HhT7QzSjjTQCF0htolOpYsFVrINfX2bse-w-66Rbxiw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0JSUF9MdW1i/aW5pX01heWFkZXZp/X3RlbXBsZS5qcGc"
},
{
    id: 3, title: "Dashain - Nepal's Biggest Festival", image: "https://imgs.search.brave.com/lZufBJ0WIH6NRrGqXeh2FredPwJUAvgFCrwc68U_3mY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/NDU1NzA1NC9waG90/by9iYW1ib28tc3dp/bmctZm9yLWRpd2Fs/aS1mZXN0aXZhbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SlZ3TFhJNmZsYURm/d2lkcm81bFQxdkRf/YjRkaWxmZDJzVnRx/MmplcHNaRT0"
},])

const activeHeader = ref(featuredNews[0])

const activeBackground = reactive(
    { background: `linear-gradient(to bottom, rgba(3, 9, 19, 0.32), rgba(3, 9, 19, 0.32)), url("${featuredNews[0].image}") no-repeat center/cover` }
)


const getActiveBackground = (id: number) => {
    activeHeader.value = featuredNews.filter(news => news.id === id)[0]
    activeBackground.background = `linear-gradient(to bottom, rgba(3, 9, 19, 0.32), rgba(3, 9, 19, 0.32)), url("${activeHeader.value.image}") no-repeat center/cover`
}
</script>