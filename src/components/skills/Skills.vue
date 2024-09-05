<script setup>
import { useSkills } from '@/stores/skills.js'

const skillsStore = useSkills()
const skills = skillsStore.getSkills
</script>

<template>
	<section class="pt-10">
		<h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200 mb-6">
			Skills
		</h2>
		<ul class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
			<li 
				v-for="skill in skills" 
				:key='skill.id' 
				class='bg-neutral-200 items-center rounded-lg shadow-sm border flex p-3 dark:bg-neutral-100'
			>
				<img :src="skill.icon" :alt="skill.name" class="w-8 h-8 flex mx-auto">
			</li>
		</ul>
	</section>
</template>