<template>
  <div>
    <div class="navbar bg-white border-b border-b-gray-100 h-20">
      <div class="flex gap-3 items-center">
        <!-- pc -->
        <div class="btn btn-ghost hidden lg:block" @click="toggleMenu = !toggleMenu">
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
        <span class="text-xl font-bold">FlexUI</span>
      </div>
    </div>

    <div class="drawer bg-white">
      <input id="drawer-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content p-6">
        <slot />
      </div>

      <div class="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div v-show="toggleMenu" class="drawer-side shadow">
          <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 w-64 min-h-full bg-white text-base-content">
            <li>
              <details open>
                <summary>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      fill="black"
                      d="M5.75 7.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm5.25.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z"
                    />
                    <path
                      fill="black"
                      d="M6.25 0h2A.75.75 0 0 1 9 .75V3.5h3.25a2.25 2.25 0 0 1 2.25 2.25V8h.75a.75.75 0 0 1 0 1.5h-.75v2.75a2.25 2.25 0 0 1-2.25 2.25h-8.5a2.25 2.25 0 0 1-2.25-2.25V9.5H.75a.75.75 0 0 1 0-1.5h.75V5.75A2.25 2.25 0 0 1 3.75 3.5H7.5v-2H6.25a.75.75 0 0 1 0-1.5ZM3 5.75v6.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75Z"
                    />
                  </svg>
                  <span class="text-black">Table</span>
                </summary>

                <ul>
                  <li v-for="(item, index) in menu" :key="index">
                    <div>{{ item.name }}</div>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'FlexUI',
})

const toggleMenu = ref(true)
const menu = ref([{ name: 'Example 1' }, { name: 'Example 2' }])
</script>
