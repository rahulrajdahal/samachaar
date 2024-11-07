<script lang="ts" setup>
import { CursorCircleB1 } from 'meistericons-vue-latest';
</script>

<template>
    <div class="w-full py-12 px-8 h-fit max-w-[25rem] rounded-md bg-blue-600">
        <span class="mb-4 bg-yellow-400 flex items-center justify-center w-16 h-16 rounded-full">
            <CursorCircleB1 class="w-10" />
        </span>

        <strong strong class="font-semibold text-2xl text-white">
            Subscribe to our weekly newsletter
        </strong>
        <p p class="text-base mt-2 mb-8 font-medium text-white"> No spam and notifications.We only email you our
            featured
            stories
            and
            updates.
        </p>

        <form form class="flex flex-col gap-2">
            <input type="email" placeholder="Your Email Address"
                class="rounded-md bg-white border-none outline-none py-2 px-4" />
            <button type="submit" class="w-fit px-4 py-2 rounded-md bg-yellow-500 text-white text-base"> Subscribe
            </button>
        </form>
    </div>
</template>