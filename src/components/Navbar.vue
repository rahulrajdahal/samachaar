<template>
    <header class="flex items-center justify-between px-[12.5%] py-8">
        <div class="flex items-center gap-2 text-gray-500">
            <Cloud class="text-gray-400 w-8" />
            <p>Kathmandu, 14 <sup>o</sup>C</p>
        </div>

        <h1>Logo</h1>

        <div class="flex gap-2">
            <Search class="w-8" />
            <EllipsisDoubleHB class="w-8" />
        </div>
    </header>
    <nav class="flex items-center justify-center gap-12 mb-2">
        <RouterLink v-for="({ id, title, to, active }) in links" :key="id" :to="to" class="relative text-lg font-normal"
            :class="{ 'text-blue-700 font-bold': active }" @click="getActiveLink(title)">
            {{ title }}
            <span v-if="active" class="bg-blue-400 h-1 left-0 right-0 w-full absolute -bottom-2" />
        </RouterLink>
    </nav>
</template>

<script lang="ts" setup>
import { Cloud, Search, EllipsisDoubleHB } from 'meistericons-vue-latest'
import { reactive } from 'vue';

const links = reactive([{ id: 1, title: "Home", to: "/", active: true },
{ id: 2, title: "Stories", to: "/stories", active: false },
{ id: 3, title: "news", to: "/news", active: false }
])

function getActiveLink(link) {
    links.map((li) => (li.title === link) ? li.active = true : li.active = false)
}
</script>