<script setup>
import { useContacts } from '@/stores/contacts.js'

const contactsStore = useContacts()
const contacts = contactsStore.getAllContacts
</script>

<template>
  <section class="pt-16" id="contacts">
    <h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200 mb-6">
			Contacts
		</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-12">
      <div class="w-full h-80 lg:h-full bg-neutral-300 border rounded-lg overflow-hidden relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d631.8511497403647!2d69.06117880341883!3d41.12126171243828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae7baa3624215b%3A0xff4d428930726164!2z0K_QvdCz0LjRjtC70YwsINCi0LDRiNC60LXQvdGC0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1724915911402!5m2!1sru!2s"
          class="absolute inset-0 w-full h-full" 
          frameborder="0" 
          title="map"
          style="filter: grayscale(1) opacity(0.6);"
        >
				</iframe>
      </div>

      <div class="flex flex-col gap-10">
        <div v-for="(contact, index) in contacts" :key="index" class="flex gap-4">
          <svg class="w-5 h-5 text-gray-600 dark:text-neutral-400 flex items-center justify-center mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path :d="contact.icon" class='flex justify-center mx-auto items-center text-center' />
            <path v-if="contact.circle" :d="contact.circle"  class='flex justify-center mx-auto items-center text-center'/>
            <path v-if="contact.path" :d="contact.path"  class='flex justify-center mx-auto items-center text-center'/>
          </svg>

          <div class="grow">
            <p class="text-sm text-gray-600 dark:text-neutral-400">{{ contact.label }}</p>
            <address 
							v-if="!contact.isLink" 
							class="text-gray-800 dark:text-neutral-200 font-medium not-italic"
						>
              {{ contact.value }}
            </address>
            <a 
							v-else 
							:href="`${contact.linkType}:${contact.value}`" 
							target="_blank" 
							class="font-medium text-gray-800 dark:text-neutral-200 hover:text-gray-600 dark:hover:text-neutral-400 transition duration-200"
						>
              {{ contact.value }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

