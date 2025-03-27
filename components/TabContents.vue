<template>
  <div class="tabs tabs-lift">
    <label class="tab">
      <input type="radio" name="my_tabs_4" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-4 me-2">
        <path
          fill="currentColor"
          d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.86 8.86l-3 3.87L9 13.14L6 17h12z"
        />
      </svg>
      Preview
    </label>

    <div class="tab-content bg-base-100 border-base-300 p-6">
      <pre>{{ preview }}</pre>
    </div>
    <label class="tab">
      <input type="radio" name="my_tabs_4" checked="checked" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-4 me-2">
        <path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6z" />
      </svg>
      Json
    </label>
    <div class="tab-content bg-base-100 border-base-300 p-6">
      <pre>{{ json }}</pre>
    </div>
  </div>
</template>

<script setup>
defineProps({
   preview: String,
   json: String,
})
</script>
