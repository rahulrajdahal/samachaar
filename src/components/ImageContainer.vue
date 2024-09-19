<template>
    <div v-for="({ id, title, image }) in data" :key="id"
        :style="{ background: `linear-gradient(to bottom, rgba(0,0,0, 0.7), rgba(0, 0, 0, 0.7)), url(${image}) no-repeat center/cover` }"
        class="rounded-md relative h-full aspect-video max-h-32 w-full">
        <strong class="text-xl text-white font-extrabold absolute bottom-4 left-4">{{ title }}</strong>
    </div>
</template>

<script lang="ts" setup>
export type Data = { id: number, title: string, image: string }

const { data } =
    defineProps<{ data: Data[] }>()
</script>
