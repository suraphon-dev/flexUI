<template>
  <div>
    <div class="flex items-center gap-3 pb-4 text-sm font-bold">
      <a
        class="bg-base-100 hover:bg-primary/10 text-base-content/50 hover:text-base-content border-primary/5 hover:border-primary/10 hover:shadow-base-200 inline-grid size-6 place-content-center rounded-sm border hover:shadow-sm"
        href="#buttons-ghost-and-button-link"
      >
        <svg class="size-3" fill="currentColor" width="12" height="12" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"
          ></path>
        </svg>
      </a>
      <h4 class="text-lg font-medium">Tag</h4>
    </div>

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

      <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>
      <label class="tab">
        <input type="radio" name="my_tabs_4" checked="checked" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-4 me-2">
          <path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6z" />
        </svg>
        Json
      </label>
      <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>
    </div>
  </div>
</template>

<script setup></script>
