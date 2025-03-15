<script setup lang="ts">
import {CategoryInfoMap} from '~/share/utils/tagInfo';
import vScroll from '~/directives/scroll'

const { data: works } = await useAsyncData(
    () => queryCollection('works').all()
)

const selected = ref([] as Array<string>)
const searchText = ref('')

function onToggle(tag: string) {
  const index = selected.value.indexOf(tag)
  if (index === -1) {
    selected.value.push(tag)
  } else {
    selected.value.splice(index, 1)
  }
}

const filtered = computed(() => works.value?.filter(
    work => selected.value.every(item => work.tags.includes(item))
        && work.title.includes(searchText.value)
))
</script>

<template>
  <div>
    <div class="my-1">
      <UInput
          v-model="searchText"
          icon="material-symbols:search"
          size="sm"
          leading
          placeholder="Search..."
      />
    </div>
    タグ：<div class="inline-flex *:mx-2">
      <TagSelector v-for="category in Object.keys(CategoryInfoMap)" :key="category" :category :selected @toggle="onToggle" />
    </div>

    <div class="flex flex-wrap">
<!--      <TransitionGroup>-->
        <div v-for="work in filtered" :key="work.id" v-scroll class="m-3 min-w-fit grow transition-all duration-1000 ease-in-out anim-hidden">
          <WorkDisplay :name="work.title" :tags="work.tags" :desc="work.description"/>
        </div>
      <div v-if="!filtered || filtered?.length === 0" class="text-gray-400 text-center w-full">
        <Icon name="material-symbols:mood-bad" class="text-8xl" /><br>
        <p class="text-4xl font-semibold">Not found!</p>
        <p>検索条件を変えてください。</p>
      </div>
<!--      </TransitionGroup>-->
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss';
.anim-shown {
  @apply opacity-100 translate-y-0;
}
.anim-hidden{
  @apply opacity-0 translate-y-5;
}
</style>