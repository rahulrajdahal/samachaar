<template>
    <div :style="{ background: `linear-gradient(to bottom, rgba(0,0,0, 0.7), rgba(0, 0, 0, 0.7)), url(${image}) no-repeat center/cover` }"
        class="rounded-md relative w-[12rem] h-[16rem]">

        <div class="flex flex-col absolute bottom-4 left-4">
            <strong class="text-xl text-white font-bold">{{ title }}</strong>
            <strong class="text-sm text-gray-400 font-medium">{{ count }} Stories</strong>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{ image: string, title: string, count: number }>()
</script>