<template>
    <ul class="grid grid-cols-3 gap-x-8 gap-y-6">
        <li v-for="({ article_id, title, image_url }, i) in stories" :key="article_id"
            :class="{ 'row-span-3 col-span-2': i === 1 }" :style="{
                background: `linear-gradient(to bottom, rgba(3, 9, 19, 0.32), rgba(3, 9, 19, 0.32)), url(${image_url}) no-repeat
        center/cover`}" class="rounded-md relative h-full aspect-video min-h-40 w-full">
            <div class="flex gap-0.5 flex-col absolute bottom-2 left-4">
                <span v-if="i === 1"
                    class="capitalize px-4 py-2 bg-yellow-600 text-white max-w-max mb-2">FEATURED</span>

                <strong class="text-xl text-white font-extrabold" :class="{ 'text-4xl': i === 1 }">{{ title
                    }}</strong>
                <div class="flex gap-4 items-center w-full">
                    <p class=" text-gray-200 font-semibold text-sm" :class="{ 'text-base': i === 1 }">12th Nov,
                        2019</p>
                    <span class="flex gap-2 items-center text-gray-200 font-semibold text-sm"
                        :class="{ 'text-base': i === 1 }">
                        <ClockCircle class="w-4" />
                        <p>3 min</p>
                    </span>
                </div>
            </div>

        </li>

    </ul>
</template>

<script lang="ts" setup>
const { stories } = defineProps<{ stories: any[] }>()

</script>