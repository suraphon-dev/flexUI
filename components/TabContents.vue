<template>
  <div class="tabs tabs-lift py-4">
    <label class="tab">
      <input type="radio" :name="parentName" checked="checked" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-4 me-2">
        <path
          fill="currentColor"
          d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.86 8.86l-3 3.87L9 13.14L6 17h12z"
        />
      </svg>
      Preview
    </label>
    <div class="tab-content bg-base-100 border-base-300 p-6">
      <div class="text-center">
        <div class="mockup-phone shadow-xl">
          <div class="mockup-phone-camera"></div>
          <div class="mockup-phone-display" style="max-height: 700px; height: 700px">
            <img alt="wallpaper" :src="preview" />
          </div>
        </div>
      </div>
    </div>

    <label class="tab">
      <input type="radio" :name="parentName" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-4 me-2">
        <path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6z" />
      </svg>
      Json
    </label>
    <div class="tab-content bg-base-100 border-base-300 p-6">
      <div class="text-right pb-2">
        <button class="btn btn-ghost btn-sm" :class="{ 'text-green-600': copySuccess }" @click="handleCopy">
          {{ copySuccess ? 'Copied' : 'Copy' }}
        </button>
      </div>

      <div class="overflow-auto bg-slate-50 rounded p-6" style="max-height: 735px">
        <pre>{{ json }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  parentName: String,
  preview: String,
  json: Object,
})

const copySuccess = ref(false)

const handleCopy = async () => {
  try {
    const copied = JSON.stringify(props.json, null, 2)
    await navigator.clipboard.writeText(copied)
    copySuccess.value = true
    setTimeout(() => (copySuccess.value = false), 2000)
  } catch (err) {
    alert('Failed to copy text')
    console.error('Failed to copy text:', err)
  }
}
</script>
