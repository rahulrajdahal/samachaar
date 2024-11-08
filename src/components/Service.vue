<template>
    <div class="text-gray-500 relative flex flex-col gap-1 max-w-80">
        <strong class="font-semibold tracking-tighter text-xl md:text-2xl uppercase">{{ service.title }}</strong>
        <p class="font-medium md:text-lg text-base">{{ service.description }}</p>
        <span class="absolute -right-24 h-full bg-gray-400 w-0.5" v-if="service.id !== 3 && width > 768" />
    </div>
</template>

<script lang="ts" setup>
import { useWindowSize } from '@/hooks/useWindowSize';

const { width } = useWindowSize()
type Service = { id: number, title: string, description: string }

defineProps<{ service: Service }>()
</script>