<template>
  <nav class="bg-white shadow-md">
    <div class="navbar px-4">
      <div class="navbar-start">
        <button class="btn btn-ghost lg:hidden" @click="toggleSidebar" aria-label="Toggle Sidebar">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <div class="navbar-center">
        <!-- title -->
        <span class="font-bold text-xl text-[#1A1E21]"></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
const toggleSidebar = inject('toggleSidebar')
</script>
