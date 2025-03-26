<template>
  <aside
    :class="[
      'fixed inset-y-0 left-0 w-64 transform bg-white shadow-lg transition-transform lg:translate-x-0 z-50',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full',
    ]"
  >
    <div class="h-full flex flex-col">
      <div class="px-4 py-4 bg-white">
        <div class="flex justify-center flex-col p-3 space-y-2 items-center">
          <div class="font-medium text-xl">FlexUI</div>
        </div>
      </div>

      <SidebarMenuSection title="Components">
        <SidebarMenuItem value-route=""> Flex 1 </SidebarMenuItem>
        <SidebarMenuItem value-route=""> Flex 2 </SidebarMenuItem>
      </SidebarMenuSection>
    </div>
  </aside>
</template>

<script setup>
const sidebarOpen = inject('sidebarOpen')
</script>
