<script setup>
import { useWorks } from '@/stores/works.js'

const worksStore = useWorks()
const workItems = worksStore.getWorks
</script>

<template>
	<section class="pt-16" id="works">
		<h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200 mb-6">
			Work experience
		</h2>
		<div v-for="work in workItems" :key="work.id">
			<div class="relative flex gap-x-4">
				<div class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-neutral-400 dark:after:bg-neutral-500">
					<div class="relative z-10 w-6 h-6 flex justify-center items-center">
						<svg class="w-6 h-6 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
					</div>
				</div>
	
				<div class="mb-8 group-last:mb-0">
					<p class="text-xs text-gray-600 dark:text-neutral-400">
						{{ work.year }}
					</p>	
					<h3 class="font-semibold text-sm my-1 text-gray-800 dark:text-neutral-200">
						{{ work.company }}
					</h3>
					<p class="text-sm text-gray-600 dark:text-neutral-400">
						{{ work.description }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>