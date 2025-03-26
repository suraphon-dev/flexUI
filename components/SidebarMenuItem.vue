<template>
  <li :class="{ 'active-li': isActiveRoute() }" @click="directRoute" class="py-2 border-l-[5px] border-l-white">
    <div class="text-[#7F7F7F] px-2">
      <div class="flex items-center gap-2" :class="{ 'active-text': isActiveRoute() }">
        <slot></slot>
      </div>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  valueRoute: { type: String, required: true },
})

const router = useRouter()
const route = useRoute()
const toggleSidebar = inject('toggleSidebar')

const directRoute = () => {
  toggleSidebar()
  router.push(props.valueRoute)
}

const isActiveRoute = () => {
  return route.path === props.valueRoute
}
</script>

<style scoped>
.active-li {
  border-left: 5px solid #f00;
  background-color: #ffe7e7;
}

.active-text {
  color: #ff0000;
}
</style>
