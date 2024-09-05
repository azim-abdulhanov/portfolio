<script setup>
import { ref, watchEffect } from 'vue'
import { useSocialLinks } from '@/stores/social-links.js'

const socialStore = useSocialLinks()
const socialLinks = socialStore.getSocialLinks

const isDarkMode = ref(localStorage.getItem('theme') === 'dark')

const applyTheme = (isDark) => {
  const root = document.documentElement
  if (isDark) {
    root.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    root.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// Инициализация темы при загрузке
applyTheme(isDarkMode.value)

// Следим за изменениями темы
watchEffect(() => applyTheme(isDarkMode.value))

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}
</script>

<template>
	<footer class="w-full max-w-4xl mx-auto">
		<div class="py-6 px-4 border-t border-gray-300">
			<div class="flex flex-wrap justify-between items-center gap-2">
				<div>
					<p class="text-md font-medium text-gray-600 dark:text-neutral-200">
						© 2024 Azimxan
					</p>
				</div>

				<ul class="flex flex-wrap items-center gap-x-4">
					<li
						class="inline-block relative"
						v-for="social in socialLinks"
						:key="social.id"
					>
						<a
							:href="social.url"
							target="_blank"
							class="bg-black dark:bg-white"
						>
							<img
								:src="social.icon"
								:alt="social.name"
								class="size-5 dark:invert"
							/>
						</a>
					</li>

					<li class="inline-block">
						<button
							@click="toggleDarkMode"
							class="relative flex justify-center items-center size-7 border border-gray-300 text-gray-500 rounded-full hover:bg-gray-300 dark:border-neutral-400 dark:text-neutral-400 dark:hover:bg-neutral-200 transition-all duration-300"
						>
							<svg v-if="!isDarkMode" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
							</svg>
							<svg v-if="isDarkMode" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="4" />
								<path d="M12 2v2" />
								<path d="M12 20v2" />
								<path d="m4.93 4.93 1.41 1.41" />
								<path d="m17.66 17.66 1.41 1.41" />
								<path d="M2 12h2" />
								<path d="M20 12h2" />
								<path d="m6.34 17.66-1.41 1.41" />
								<path d="m19.07 4.93-1.41 1.41" />
							</svg>
						</button>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>
