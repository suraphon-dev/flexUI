<template>
  <div class="flex h-screen bg-base-100">
    <TheSidebar />
    <div class="flex-1 flex flex-col">
      <TheNavbar />
      <main class="p-8 lg:ml-64 xl:ml-64">
        <div v-if="sidebarOpen" class="fixed inset-0 z-30" @click="toggleSidebar"></div>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
const sidebarOpen = ref(false)
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

provide('sidebarOpen', sidebarOpen)
provide('toggleSidebar', toggleSidebar)
</script>
