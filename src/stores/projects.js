import { defineStore } from 'pinia'

export const useProjects = defineStore('projects', {
	state: () => ({
		projects: [
			{
				id: 1,
				name: 'TV Flix',
				description: 'lorem ipsum dolor sit amet',
				image: '/public/images/project1.png',
				url: 'https://tvflix-movies.vercel.app/'
			},
			{
				id: 2,
				name: 'CRUD App',
				description: 'lorem ipsum dolor sit amet',
				image: '/public/images/project2.png',
				url: 'https://crud-app-mocha-two.vercel.app/'
			},
			{
				id: 3,
				name: 'Uz Tube',
				description: 'lorem ipsum dolor sit amet',
				image: '/public/images/project3.png',
				url: 'https://uz-tube.vercel.app/'
			},
			{
				id: 4,
				name: 'Totembo',
				description: 'lorem ipsum dolor sit amet',
				image: '/public/images/project4.png',
				url: 'https://totembo-neon.vercel.app/#ru'
			},
			{
				id: 5,
				name: 'Todo List',
				description: 'lorem ipsum dolor sit amet',
				image: '/public/images/project5.png',
				url: 'https://vue-todo-list-lyart.vercel.app/'
			},
			{
				id: 6,
				name: 'Github Finder',
				description: 'lorem ipsum dolor sit amet',
				image: '/public/images/project6.png',
				url: 'https://vue-github-finder.vercel.app/'
			},
			{
				id: 7,
				name: 'Weather',
				description: 'lorem ipsum dolor sit amet',
				image: '/public/images/project7.png',
				url: 'https://vue-weather-seven-pi.vercel.app/'
			},
			{
				id: 8,
				name: 'Vue Blogs',
				description: 'lorem ipsum dolor sit amet',
				image: '/public/images/project8.png',
				url: 'https://vue-blogs-lovat.vercel.app/'
			},
		]
	}),
	getters: {
		getProjects: state => state.projects
	}
})