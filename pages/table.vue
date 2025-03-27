<template>
  <div v-for="(item, index) in dataFlex" :key="index">
    <HeadTag :title="item.name" />
    <TabContents typeMode="mockup-phone" :parentName="`${item.name}_${index}`" :preview="item.preview" :json="item.json" />
  </div>
</template>

<script setup>
import dataFlex from '~/resources/data/index'
</script>
