<template>
  <div>
    <HeadTag title="Tag A" />
    <TabContents parentName="tag1" preview="https://img.daisyui.com/images/stock/453966.webp" :json="json1" />
  </div>
  <div>
    <HeadTag title="Tag A" />
    <TabContents parentName="tag2" preview="https://img.daisyui.com/images/stock/453966.webp" :json="json1" />
  </div>
</template>

<script setup>
import json1 from '~/resources/json/restaurant.json'
</script>
