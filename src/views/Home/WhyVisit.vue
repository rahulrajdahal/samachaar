<template>
    <div class="py-12 bg-black text-white px-[12.5%]">
        <div class="flex flex-col gap-2">
            <strong class="font-bold text-xl">Why visit Nepal?</strong>
            <p class="max-w-72 text-base font-medium">Here are the top 3 reasons why you should consider visit Nepal</p>
        </div>

        <ul class="flex items-center gap-10 mt-8">
            <li class="flex flex-col gap-2 w-full" v-for="({ id, title, image }) in reasons" :key="id">
                <img :src="image" :alt="title"
                    class="aspect-square rounded-md h-full w-full object-cover max-h-[30rem]">
                <strong class="text-base tracking-light font-bold">{{ title }}</strong>
            </li>
        </ul>
    </div>


</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const reasons = reactive([{
    id: 1, title: "People", image: "https://imgs.search.brave.com/36NZhQUzrp6tch5YblXXwQUc8H57LQ-KuxQggqLi1UU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA4/MzE2Mzk0L3Bob3Rv/L29sZC1uZXBhbGkt/bWFuLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1Ybm1ySXEt/ZEIwekRLNmZJaUxW/dFE4ci1JYWVjUU1n/a25WZnpaa09aWVM0/PQ"
},
{
    id: 2, title: 'Natural Paradise', image: "https://imgs.search.brave.com/mzETpolm-VAlIFO9qktATHymS9AIDChCIPQdbXovUYo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmF0aW9uc29ubGlu/ZS5vcmcvZ2FsbGVy/eS9OZXBhbC9TYWdh/cm1hdGhhLU5hdGlv/bmFsLVBhcmsuanBn"
},
{
    id: 3, title: "Culture", image: "https://imgs.search.brave.com/VU2wkIC1OUQ4YtIfBt9OoSh37v_7_2c8ySudhYe92Yk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWx0aXR1ZGVoaW1h/bGF5YS5jb20vbWVk/aWEvZmlsZXMvQmxv/Zy9DdWx0dXJlLUZl/c3RpdmFscy9DdWx0/dXJlX2FuZF9GZXN0/aXZhbF9pbl9OZXBh/bC5wbmc"
}
])


</script>

<style lang="scss" scoped></style>