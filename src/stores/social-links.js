import { defineStore } from 'pinia'

export const useSocialLinks = defineStore('socialLinks', {
	state: () => ({
		socialLinks: [
			{
				id: 1,
				name: '@azimxan',
				icon: '/public/images/telegram.svg',
				url: 'https://t.me/azimkhan_abdulkhanov'
			},
			{ 
				id: 2,
				name: '@abdulkhanov__a', 
				icon: '/public/images/instagram.svg',
				url: 'https://www.instagram.com/abdulkhanov__a/' 
			},
			{ 
				id: 3,
				name: 'azimkhan-abdulkhanov', 
				icon: '/public/images/linkedin.svg',
				url: 'https://www.linkedin.com/in/azimkhan-abdulkhanov-6ab0b6314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
			},
			{
				id: 4,
				name: 'azim-abdulhanov', 
				icon: '/public/images/github.svg',
				url: 'https://github.com/azim-abdulhanov' 
			},
		]
	}),
	getters: {
		getSocialLinks: state => state.socialLinks
	},
})