<script setup lang="ts">
defineProps<{ name: string, tags: string[], desc: string, image?: string }>()
</script>

<template>
  <CardSection class="transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50">
    <img v-if="image" :src="image" class="max-h-70 w-100 max-w-full m-auto object-contain">
    <NuxtLink :href="`/works/${name}`">
      <h2 class="text-2xl font-medium mb-2">{{ name }}</h2>
      <p>{{ desc.replaceAll("\\n", "") }}</p>
      Tags:
      <div class="inline-flex *:m-0.5">
        <TagDisplay v-for="tag in tags" :key="tag" :tag="tag" />
      </div>
    </NuxtLink>
  </CardSection>
</template>
