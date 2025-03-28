<template>
  <div class="navbar bg-white border-b border-b-gray-100 h-20">
    <div class="flex gap-3 items-center">
      <!-- pc -->
      <div class="btn btn-ghost hidden lg:block" @click="$emit('toggle-menu')">
        <div class="h-full flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current text-black">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </div>
      <!-- mobile -->
      <div class="btn btn-ghost lg:hidden">
        <label for="my-drawer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current text-black">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      <span class="text-xl font-bold cursor-pointer" @click="router.push('/')">FlexUI</span>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
</script>
