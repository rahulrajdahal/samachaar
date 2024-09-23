<template>
    <div :style="activeBackground" class="px-[12.5%] py-14 relative flex justify-between items-center">
        <div class="flex flex-col items-center">
            <strong class="text-white text-2xl font-bold"> Things to do in Nepal </strong>
            <ul class="flex flex-col items-center gap-2 mt-4">
                <li v-for="({ title, id }) in thingsToDo" :key="id" @click="handleClick(id)"
                    :class="{ 'text-white': id == activeThing.id }"
                    class="hover:cursor-pointer font-semibold text-base text-gray-400">
                    {{ title }}
                </li>
            </ul>
        </div>

        <strong class="text-7xl text-gray-600 absolute top-36 left-[28rem]">{{ activeThing.title }}</strong>

        <div class="flex flex-col gap-8 justify-between h-full">
            <ul class="flex flex-col items-center mt-12 gap-4">
                <li v-for="({ id }) in thingsToDo" :key="id" @click="handleClick(id)"
                    :class="{ 'rounded-md h-[1.5rem] w-2 bg-white': activeThing.id === id }"
                    class="bg-gray-400 rounded-full w-2 h-2 flex self-end">
                </li>
            </ul>
            <p class="text-white max-w-[37rem] text-right">{{ activeThing.description }}</p>
        </div>

    </div>

</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const thingsToDo = reactive([{
    id: 1, description: "Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on tails (footpaths), in the countryside, while the word walking is used for shorter, particular urban walks.", title: "Trekking & Hiking", image: "https://imgs.search.brave.com/qbYbRgZCz9jR8kGZrlkoloEUVfagSkkpzlc8b0nPAfY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL2Zp/bHRlci9ubC9pbWcv/Mzc0MTUwL1RyaXBE/b2N1bWVudC8xNTA4/NTk0NTMzXzFfa2Fu/Y2hlanVuZ2EuanBn/LndlYnA"
},
{
    id: 2, description: "Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on tails (footpaths), in the countryside, while the word walking is used for shorter, particular urban walks.", title: 'Cultural and Historic Tours', image: "https://imgs.search.brave.com/HhT7QzSjjTQCF0htolOpYsFVrINfX2bse-w-66Rbxiw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0JSUF9MdW1i/aW5pX01heWFkZXZp/X3RlbXBsZS5qcGc"
},
{
    id: 3, description: "Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on tails (footpaths), in the countryside, while the word walking is used for shorter, particular urban walks.", title: "Climbing and Expedition", image: "https://imgs.search.brave.com/lZufBJ0WIH6NRrGqXeh2FredPwJUAvgFCrwc68U_3mY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/NDU1NzA1NC9waG90/by9iYW1ib28tc3dp/bmctZm9yLWRpd2Fs/aS1mZXN0aXZhbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SlZ3TFhJNmZsYURm/d2lkcm81bFQxdkRf/YjRkaWxmZDJzVnRx/MmplcHNaRT0"
},
{
    id: 4, description: "Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on tails (footpaths), in the countryside, while the word walking is used for shorter, particular urban walks.", title: 'Adventure Sports', image: "https://imgs.search.brave.com/HhT7QzSjjTQCF0htolOpYsFVrINfX2bse-w-66Rbxiw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0JSUF9MdW1i/aW5pX01heWFkZXZp/X3RlbXBsZS5qcGc"
},
{
    id: 5, description: "Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on tails (footpaths), in the countryside, while the word walking is used for shorter, particular urban walks.", title: "Nature and Wildlife", image: "https://imgs.search.brave.com/lZufBJ0WIH6NRrGqXeh2FredPwJUAvgFCrwc68U_3mY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/NDU1NzA1NC9waG90/by9iYW1ib28tc3dp/bmctZm9yLWRpd2Fs/aS1mZXN0aXZhbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SlZ3TFhJNmZsYURm/d2lkcm81bFQxdkRf/YjRkaWxmZDJzVnRx/MmplcHNaRT0"
},
{
    id: 6, description: "Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on tails (footpaths), in the countryside, while the word walking is used for shorter, particular urban walks.", title: 'Cycling and Mountain biking', image: "https://imgs.search.brave.com/HhT7QzSjjTQCF0htolOpYsFVrINfX2bse-w-66Rbxiw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0JSUF9MdW1i/aW5pX01heWFkZXZp/X3RlbXBsZS5qcGc"
},])


const activeThing = ref(thingsToDo[0])

const activeBackground = reactive(
    { background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${activeThing.value.image}") no-repeat center/cover` }
)

setInterval(() => {
    if (activeThing.value.id === 6) {
        activeThing.value = thingsToDo[0]
    } else {
        activeThing.value = thingsToDo.find(thing => thing.id == activeThing.value.id + 1)!
    }
    activeBackground.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${activeThing.value.image}") no-repeat center/cover`
}
    , 5000)


const handleClick = (id: number) => {
    activeThing.value = thingsToDo.find((thing) => thing.id === id)!
    activeBackground.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${activeThing.value.image}") no-repeat center/cover`
}


</script>