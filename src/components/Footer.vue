<template>
  <footer class="pt-12 pb-2">
    <div class="px-[12.5%] py-2 flex justify-between">

      <div>Logo</div>

      <div class="">
        <strong class="text-gray-800 text-lg uppercase font-bold">Quick Links</strong>
        <ul>
          <li v-for="({ id, link }) in quickLinks" :key="id">
            <RouterLink :to="link" class="text-gray-500 font-medium text-base">{{ link }}</RouterLink>
          </li>
        </ul>

      </div>

      <div class="">
        <strong class="text-gray-800 text-lg uppercase font-bold">Partner Links</strong>
        <ul>
          <li v-for="({ id, link }) in partnerLinks" :key="id">
            <RouterLink :to="link" class="text-gray-500 font-medium text-base">{{ link }}</RouterLink>
          </li>
        </ul>

      </div>
      <div class="">
        <strong class="text-lg  text-gray-800 uppercase font-bold">STAY IN TOUCH</strong>
        <p class="text-base text-gray-500 max-w-[30rem] mt-2">Subscribe to our Newsletter and we will inbox you featured
          stories and relevant news.</p>

        <form class="flex items-center justify-between mt-2 mb-8">
          <input type="email" placeholder="Your Email Address"
            class="border w-full border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500" />
          <button type="submit"
            class="text-white bg-blue-900 border-none outline-none px-4 py-2 rounded-md">Subscribe</button>
        </form>

        <strong class="text-lg text-gray-800 uppercase font-bold">SOCIAL MEDIA</strong>
        <ul class="flex items-center gap-4">
          <li v-for="({ id, link }) in socialLinks" :key="id">
            <component :is="link" class="w-10" />
          </li>
        </ul>

      </div>
    </div>

    <hr />
    <p class="text-gray-500 px-[12.5%] py-2">
      &copy; 2024 Samachaar. All rights reserved.
    </p>
  </footer>
</template>

<script lang="ts" setup>
import { Square11B, Square12B, Square13B } from 'meistericons-vue-latest';

const quickLinks = [{ id: 1, link: 'Home' },
{ id: 2, link: 'Stories' },
{ id: 3, link: 'News' },
{ id: 4, link: 'About Us' },
{ id: 5, link: 'Contact Us' }
]

const partnerLinks = [{ id: 1, link: 'Partner1' },
{ id: 2, link: 'Partner2' },
{ id: 3, link: 'Partner3' },
{ id: 4, link: 'Partner4' },
]

const socialLinks = [{ id: 1, link: Square11B }, { id: 2, link: Square12B }, { id: 3, link: Square13B },]

</script>
