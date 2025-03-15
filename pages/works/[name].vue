<script setup lang="ts">
const {name} = useRoute().params
const {data} = await useAsyncData(() =>
queryCollection('works').where('title', '=', name).first())
if (data === null) {
  throw createError({
    statusCode: 404,
    fatal: true
  })
}
const work = data as unknown as Record<string, unknown>
</script>

<template>
  <ContentRenderer :value="work" />
</template>

<style scoped>

</style>