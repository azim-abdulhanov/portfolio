<script setup>
import { useProjects } from '@/stores/projects.js'

const projectsStore = useProjects()
const projects = projectsStore.getProjects
</script>

<template>
	<section class='pt-16' id="projects">
		<h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200 mb-6">
			Projects
		</h2>
		<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
			<li v-for='project in projects' :key='project.id'>
				<div class="group block relative rounded-xl border border-slate-300 dark:border-slate-50 bg-slate-100 dark:bg-gray-800 p-1.5 shadow-sm hover:shadow-md hover:shadow-neutral-400 dark:hover:shadow-white overflow-hidden transition-all duration-300">
					<img
						:src="project.image"
						:alt="project.name"
						class="w-full h-full lg:h-[165px] object-cover rounded-lg"
					/>
					<p class="font-medium mt-2 px-2 text-gray-900 dark:text-neutral-100">{{ project.name }}</p>
					<div class="absolute flex items-center justify-center inset-0 opacity-0 group-hover:opacity-100 transition">
						<a 
							class="group block relative overflow-hidden rounded-full bg-neutral-100 p-2 dark:bg-neutral-100 dark:hover:bg-neutral-200 hover:bg-neutral-200 transition-all duration-200" 
							:href="project.url"
							target='_blank'
						>
							<svg class='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#000000" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
						</a>
					</div>
				</div>
			</li>
		</ul>
	</section>
</template>
