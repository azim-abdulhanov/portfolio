import { defineStore } from 'pinia'

export const useContacts = defineStore('contacts', {
  state: () => ({
    contacts: [
      {
        id: 1,
        type: 'location',
        icon: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z',
        circle: 'M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
        label: 'Uzbekistan',
        value: 'Tashkent Region, Yangiyul City',
        isLink: false,
      },
      {
        id: 2,
        type: 'email',
        icon: 'M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z',
        path: 'M22 10l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10',
        label: 'Email',
        value: 'azimabdulhanov88@gmail.com',
        isLink: true,
        linkType: 'mailto',
      },
      {
        id: 3,
        type: 'phone',
        icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
        label: 'Phone',
        value: '+998 93 711-88-67',
        isLink: true,
        linkType: 'tel',
      },
    ],
  }),
  getters: {
    getAllContacts: state => state.contacts,
  },
})
