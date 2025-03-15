<script setup lang="ts">
defineProps<{ name:string, tags: string[], desc: string }>()
</script>

<template>
  <div class="border border-gray-200 rounded-xl p-4 shadow-lg shadow-black/25">
    <NuxtLink :href="`/works/${name}`">
      <h2 class="text-2xl font-medium mb-2">{{ name }}</h2>
      <p>{{ desc }}</p>
      Tags:
      <div class="inline-flex">
        <TagDisplay v-for="tag in tags" :key="tag" :tag="tag" />
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>