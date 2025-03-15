<script setup lang="ts">
import {CategoryInfoMap} from "~/share/utils/tagInfo";

const props = defineProps<{category: string, selected: Array<string>}>()
const categoryInfo = CategoryInfoMap[props.category]

const emit = defineEmits(['toggle'])

const isAnythingSelected = computed(() => props.selected.some(
    (tag) => categoryInfo.tags.includes(tag)
))

function onTagClick(tag: string) {
  emit('toggle', tag)
}

</script>

<template>
  <div class="group select-none">
<!--    <div>-->
<!--      <Icon :name="categoryInfo.icon" />{{ category }}-->
<!--    </div>-->
    <div
        class="*:transition-all my-0.5 *:group-hover:translate-y-0.5
        *:shadow-md *:shadow-black/50 *:group-hover:shadow-none relative z-20">
      <SimpleBadge :icon="categoryInfo.icon" :text="category" :highlighted="isAnythingSelected" />
    </div>
    <div
        class="absolute transition-opacity opacity-0 h-0 pointer-events-none
        group-hover:opacity-100 group-hover:h-auto group-hover:pointer-events-auto
        bg-white *:my-1 *:shadow-md *:shadow-black/75 z-10">
      <TagDisplay
          v-for="tag in categoryInfo.tags" :key="tag" :tag
          :highlighted="selected.includes(tag)" @click="() => onTagClick(tag)"/>
    </div>
  </div>
</template>

<style scoped>

</style>