<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '@/components/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'
import Content from '@/components/content/Content.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})
</script>

<template>
  <div class='bg-[#f3f4f6] dark:bg-[#111827]'>
    <Navbar />
    <div>
      <Loader v-if="isLoading" />
      <Content v-else />
    </div>
    <Footer />
  </div>
</template>
