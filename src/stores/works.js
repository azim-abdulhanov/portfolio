import { defineStore } from 'pinia'

export const useWorks = defineStore('works', {
	state: () => ({
		works: [
			{
				id: 1,
				year: '2023 - Present',
				company: 'Upwork | Frontend Developer',
				description: 'I work in Upwork at the position of Frontend Developer participated in the development of web sites.',
			},
			{
				id: 2,
				year: '2022 - 2023',
				company: 'Sammi-MERN | Fullstack Developer',
				description: 'At this school, I developed fullstack web applications.',
			},
			{
				id: 3,
				year: '2021 - 2022',
				company: 'Neo Camp',
				description: 'I interned at this company in the position of Frontend Developer.',
			},
		]
	}),
	getters: {
		getWorks: state => state.works
	},
})