<template>
    <div class="flex flex-col gap-4 mt-24 w-full items-center justify-center px-[12.5%]">
        <h3 class="font-bold text-2xl text-gray-700">Stories for You</h3>

        <ul class="grid grid-cols-3 gap-x-8 gap-y-6">
            <li v-for="({ id, title, image }) in stories" :key="id" :class="{ 'row-span-3 col-span-2': id === 1 }"
                :style="{
                    background: `linear-gradient(to bottom, rgba(3, 9, 19, 0.32), rgba(3, 9, 19, 0.32)), url(${image}) no-repeat
        center/cover`}" class="rounded-md relative h-full aspect-video min-h-40 w-full">
                <div class="flex gap-0.5 flex-col absolute bottom-2 left-4">
                    <span v-if="id === 1"
                        class="capitalize px-4 py-2 bg-yellow-600 text-white max-w-max mb-2">FEATURED</span>

                    <strong class="text-xl text-white font-extrabold" :class="{ 'text-4xl': id === 1 }">{{ title
                        }}</strong>
                    <div class="flex gap-4 items-center w-full">
                        <p class=" text-gray-200 font-semibold text-sm" :class="{ 'text-base': id === 1 }">12th Nov,
                            2019</p>
                        <span class="flex gap-2 items-center text-gray-200 font-semibold text-sm"
                            :class="{ 'text-base': id === 1 }">
                            <ClockCircle class="w-4" />
                            <p>3 min</p>
                        </span>
                    </div>
                </div>

            </li>

        </ul>
    </div>

</template>

<script lang="ts" setup>
import { ClockCircle } from 'meistericons-vue-latest';
import { reactive } from 'vue';


const stories = reactive([{
    id: 1, title: "Top 20 Reasons to Visit Nepal in 2020", image: "https://imgs.search.brave.com/qbYbRgZCz9jR8kGZrlkoloEUVfagSkkpzlc8b0nPAfY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL2Zp/bHRlci9ubC9pbWcv/Mzc0MTUwL1RyaXBE/b2N1bWVudC8xNTA4/NTk0NTMzXzFfa2Fu/Y2hlanVuZ2EuanBn/LndlYnA"
},
{
    id: 2, title: 'My Pilgrimage to the birthplace of Buddha', image: "https://imgs.search.brave.com/HhT7QzSjjTQCF0htolOpYsFVrINfX2bse-w-66Rbxiw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0JSUF9MdW1i/aW5pX01heWFkZXZp/X3RlbXBsZS5qcGc"
},
{
    id: 3, title: "Dashain - Nepal's Biggest Festival", image: "https://imgs.search.brave.com/lZufBJ0WIH6NRrGqXeh2FredPwJUAvgFCrwc68U_3mY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/NDU1NzA1NC9waG90/by9iYW1ib28tc3dp/bmctZm9yLWRpd2Fs/aS1mZXN0aXZhbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SlZ3TFhJNmZsYURm/d2lkcm81bFQxdkRf/YjRkaWxmZDJzVnRx/MmplcHNaRT0"
},
{
    id: 4, title: 'My Pilgrimage to the birthplace of Buddha', image: "https://imgs.search.brave.com/HhT7QzSjjTQCF0htolOpYsFVrINfX2bse-w-66Rbxiw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0JSUF9MdW1i/aW5pX01heWFkZXZp/X3RlbXBsZS5qcGc"
},])


</script>

<style lang="scss" scoped></style>