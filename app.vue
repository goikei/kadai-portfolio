<script setup lang="ts">

</script>

<template>
  <div class="">
    <header class="sticky top-2 z-100 bg-white py-1 mx-2 mb-5 shadow-lg shadow-black/25 rounded-xl">
      <NuxtLink href="/works">
        <h1 class="text-xl text-center font-bold">ポートフォリオ</h1>
      </NuxtLink>
    </header>
    <main class="m-2 relative">
      <NuxtPage />
      <div class="fixed top-0 left-0 -z-50">
        <BackgroundAnimation />
      </div>
    </main>
  </div>
</template>
