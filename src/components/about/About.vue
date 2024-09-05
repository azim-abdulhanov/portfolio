<script setup>
import { useSocialLinks } from '@/stores/social-links.js'

const socialLinksStore = useSocialLinks()
const socialLinks = socialLinksStore.getSocialLinks
</script>

<template>
	<section id='about'>
    <h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200 mb-6">
			About me
		</h2>
		<div class="flex flex-col sm:flex-row items-center gap-x-4">
      <img 
        class="rounded-full w-24 h-24 object-cover mb-2" 
        src="https://avatars.githubusercontent.com/u/133730471?s=400&u=cb2e2fb0af4aea884a2b05209ef913a17f4a315e&v=4" 
        alt="Avatar"
      >
      <div class="flex flex-col gap-1">
        <h1 class="text-xl font-medium text-gray-800 dark:text-neutral-200">
          Azimxan Abdulhanov
        </h1>
        <p class="text-md text-gray-600 dark:text-neutral-400 text-center sm:text-start">
          Frontend Developer
        </p>
      </div>
    </div>

    <div class="mt-5">
      <p class="text-md text-gray-600 dark:text-neutral-400 text-center sm:text-start">
        I'm a frontend developer with over 1.5 years of experience creating visually appealing and functional solutions. My experience spans UI, developing medium and complex custom applications, helping clients bring their digital ideas to life.
      </p>
      <ul class="mt-5 flex flex-col gap-y-3">
        <li
          v-for='social in socialLinks'
          :key='social.id'  
          class="flex items-center gap-x-2.5"
        >   
          <img :src="social.icon" :alt="social.name" class="w-5 h-5 dark:invert">
          <a 
            :href="social.url"
            target='_blank'
            class="text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-300 transition duration-300" 
          >
            {{ social.name }}
          </a>
        </li>
      </ul>
    </div>
	</section>
</template>