<template>
  <div>
    <Navbar @toggle-menu="toggleMenu = !toggleMenu" />

    <div class="drawer bg-white">
      <input id="drawer-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content p-6">
        <slot />
      </div>

      <div class="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <Sidebar :isOpen="toggleMenu" :menu="menu" />
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({ title: 'FlexUI' })
const toggleMenu = ref(true)
const menu = ref([
  { name: 'Example 1', url: '/table' },
  { name: 'ShowCase', url: '/showcase' },
])
</script>
