import { defineStore } from 'pinia'

export const useProjects = defineStore('projects', {
	state: () => ({
		projects: [
			{
				id: 1,
				name: 'TV Flix',
				image: '/images/project1.png',
				url: 'https://tvflix-movies.vercel.app/'
			},
			{
				id: 2,
				name: 'CRUD App',
				image: '/images/project2.png',
				url: 'https://crud-app-mocha-two.vercel.app/'
			},
			{
				id: 3,
				name: 'Uz Tube',
				image: '/images/project3.png',
				url: 'https://uz-tube.vercel.app/'
			},
			{
				id: 4,
				name: 'Totembo',
				image: '/images/project4.png',
				url: 'https://totembo-neon.vercel.app/#ru'
			},
			{
				id: 5,
				name: 'Todo List',
				image: '/images/project5.png',
				url: 'https://vue-todo-list-lyart.vercel.app/'
			},
			{
				id: 6,
				name: 'Github Finder',
				image: '/images/project6.png',
				url: 'https://vue-github-finder.vercel.app/'
			},
			{
				id: 7,
				name: 'Weather',
				image: '/images/project7.png',
				url: 'https://vue-weather-seven-pi.vercel.app/'
			},
			{
				id: 8,
				name: 'Vue Blogs',
				image: '/images/project8.png',
				url: 'https://vue-blogs-lovat.vercel.app/'
			},
			{
				id: 9,
				name: 'Netflix Clone',
				image: '/images/project9.png',
				url: 'https://github.com/azim-abdulhanov/netflix-clone'
			},
		]
	}),
	getters: {
		getProjects: state => state.projects
	}
})