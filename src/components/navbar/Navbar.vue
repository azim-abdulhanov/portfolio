<script setup>
import { ref } from 'vue'

const links = ref([
	{ name: 'About', url: '#about' },
	{ name: 'Projects', url: '#projects' },
	{ name: 'Works', url: '#works' },
	{ name: 'Contacts', url: '#contacts' },
])

const toggleMenu = ref(false)

const toggleNavbar = () => {
	toggleMenu.value = !toggleMenu.value
}
</script>

<template>
	<header class="sticky top-0 flex flex-wrap md:justify-start md:flex-nowrap z-50">
		<nav class="mt-4 relative max-w-4xl w-full bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700 rounded-[2rem] px-6 lg:px-6 mx-3 py-3 md:flex md:items-center md:justify-between lg:mx-auto">
			<div class="flex justify-between items-center">
				<a href="/" class="text-2xl inline-block font-semibold text-gray-800 dark:text-neutral-200">
					AzimxanDev
				</a>

				<div class="md:hidden">
					<button
						@click="toggleNavbar"
						type="button"
						class="flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 transition duration-300"
					>						
						<svg v-if="!toggleMenu" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<line x1="3" x2="21" y1="6" y2="6" />
							<line x1="3" x2="21" y1="12" y2="12" />
							<line x1="3" x2="21" y1="18" y2="18" />
						</svg>
						<svg v-else xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</button>
				</div>
			</div>

			<div 
				:class="['items-center justify-between w-full md:flex md:w-auto transition-all duration-300', toggleMenu ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0']"
				class="overflow-hidden md:overflow-visible md:max-h-0 md:opacity-100 md:transition-none"
			>
				<ul class="flex flex-col md:flex-row md:items-center md:justify-end gap-y-2 md:gap-x-2 mt-3 md:mt-0 py-2 md:py-0">
					<li v-for='link in links' :key='link.name'>
						<a 
							:href="link.url"
							class="flex items-center font-medium py-1.5 md:py-1 px-2 md:px-2.5 text-gray-800 hover:bg-gray-100 rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300"
						>
							{{ link.name }}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>