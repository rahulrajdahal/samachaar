<template>
    <header class="flex items-center justify-between px-4 md:px-[12.5%] py-8">
        <div v-if="width > 768" class="flex items-center gap-2 text-gray-500">
            <Cloud class="text-gray-400 w-8" />
            <p>Kathmandu, 14 <sup>o</sup>C</p>
        </div>

        <router-link to="/" class="text-xl md:text-4xl font-black">Samachaar</router-link>

        <EllipsisVCircle class="w-8" v-if="width < 768" />
        <div v-if="width > 768" class="flex gap-2">
            <Search class="w-8" />
            <EllipsisDoubleHB class="w-8" />
        </div>
    </header>
    <nav class="flex items-center justify-center gap-12">
        <router-link v-for="({ id, title, to }) in links" :key="id" :to="to"
            active-class="text-blue-700 font-bold border-b border-b-4 border-blue-400"
            class="relative text-lg font-normal">
            {{ title }}
        </router-link>
    </nav>
</template>

<script lang="ts" setup>
import { EllipsisDoubleHB, EllipsisVCircle, Search } from 'meistericons-vue-latest';
import { reactive, ref, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';

const links = reactive([{ id: 1, title: "Home", to: "/" },
{ id: 2, title: "Stories", to: "/stories" },
{ id: 3, title: "News", to: "/news" }
])

const width = ref(window.innerWidth)

const handleWindowSize = () => {
    width.value = window.innerWidth
}

watchEffect((onCleanup) => {
    window.addEventListener('resize', handleWindowSize)

    onCleanup(() => { window.removeEventListener('resize', handleWindowSize) })
})

</script>