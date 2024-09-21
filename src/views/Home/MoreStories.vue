<template>
    <div class="flex flex-col w-full justify-center px-[12.5%] gap-4 py-12 items-center">
        <strong class="text-2xl font-extrabold text-gray-500">Explore More Stories</strong>

        <div class="grid grid-cols-3 gap-6 place-items-center w-full">
            <ImageContainer :data="stories" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ImageContainer from '@/components/ImageContainer.vue';
import { reactive } from 'vue';

const stories = reactive([{
    id: 1, title: "Food", image: "https://imgs.search.brave.com/qbYbRgZCz9jR8kGZrlkoloEUVfagSkkpzlc8b0nPAfY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL2Zp/bHRlci9ubC9pbWcv/Mzc0MTUwL1RyaXBE/b2N1bWVudC8xNTA4/NTk0NTMzXzFfa2Fu/Y2hlanVuZ2EuanBn/LndlYnA"
},
{
    id: 2, title: 'Adventure', image: "https://imgs.search.brave.com/HhT7QzSjjTQCF0htolOpYsFVrINfX2bse-w-66Rbxiw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0JSUF9MdW1i/aW5pX01heWFkZXZp/X3RlbXBsZS5qcGc"
},
{
    id: 3, title: "Tradition and Culture", image: "https://imgs.search.brave.com/lZufBJ0WIH6NRrGqXeh2FredPwJUAvgFCrwc68U_3mY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/NDU1NzA1NC9waG90/by9iYW1ib28tc3dp/bmctZm9yLWRpd2Fs/aS1mZXN0aXZhbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SlZ3TFhJNmZsYURm/d2lkcm81bFQxdkRf/YjRkaWxmZDJzVnRx/MmplcHNaRT0"
},
{
    id: 4, title: 'Religion', image: "https://imgs.search.brave.com/HhT7QzSjjTQCF0htolOpYsFVrINfX2bse-w-66Rbxiw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0JSUF9MdW1i/aW5pX01heWFkZXZp/X3RlbXBsZS5qcGc"
},
{
    id: 5, title: "Nature", image: "https://imgs.search.brave.com/lZufBJ0WIH6NRrGqXeh2FredPwJUAvgFCrwc68U_3mY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/NDU1NzA1NC9waG90/by9iYW1ib28tc3dp/bmctZm9yLWRpd2Fs/aS1mZXN0aXZhbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SlZ3TFhJNmZsYURm/d2lkcm81bFQxdkRf/YjRkaWxmZDJzVnRx/MmplcHNaRT0"
},
{
    id: 6, title: 'Tourism', image: "https://imgs.search.brave.com/HhT7QzSjjTQCF0htolOpYsFVrINfX2bse-w-66Rbxiw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0JSUF9MdW1i/aW5pX01heWFkZXZp/X3RlbXBsZS5qcGc"
},])
</script>
