<template>
    <div :style="{ background: `linear-gradient(to bottom, rgba(0,0,0, 0.7), rgba(0, 0, 0, 0.7)), url(${image}) no-repeat center/cover` }"
        class="rounded-md relative aspect-video w-32 h-40 md:w-[12rem] md:h-[16rem]">

        <div class="flex flex-col absolute bottom-4 left-4">
            <strong class="text-base md:text-xl text-white font-bold">{{ title }}</strong>
            <strong class="text-xs md:text-sm text-gray-400 font-medium">{{ count }} Stories</strong>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{ image: string, title: string, count: number }>()
</script>