import { defineStore } from 'pinia'

export const useSkills = defineStore('skills', {
	state: () => ({
		skills: [
			{
				id: 1,
				name: 'HTML',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
			},
			{
				id: 2,
				name: 'CSS',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
			},
			{
				id: 3,
				name: 'JavaScript',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
			},
			{
				id: 4,
				name: 'Vue.js',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
			},
			{
				id: 5,
				name: 'React.js',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
			},
			{
				id: 6,
				name: 'Next.js',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
			},
			{
				id: 7,
				name: 'Tailwind CSS',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
			},
			{
				id: 8,
				name: 'Node.js',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
			},
			{
				id: 9,
				name: 'MongoDB',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
			},
			{
				id: 10,
				name: 'Git',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
			},
			{
				id: 11,
				name: 'GitHub',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
			},
			{
				id: 12,
				name: 'SCSS',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
			},
		]
	}),
	getters: {
		getSkills: state => state.skills
	}
})
