<template>
  <div class="flex items-center gap-3  text-sm font-bold">
    <a href="#">
      <svg class="size-3" fill="currentColor" width="12" height="12" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"
        ></path>
      </svg>
    </a>
    <h4 class="text-lg font-medium">{{ title }}</h4>
  </div>
</template>

<script setup>
defineProps({
  title: String,
})
</script>
