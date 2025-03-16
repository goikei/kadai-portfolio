<script setup lang="ts">
import type {ColorSchemes} from "~/share/utils/colorSchemes";

withDefaults(defineProps<{text: string, icon?: string, highlighted?: boolean, color?: string}>(), {color: "gray"})
const colorVariants: Record<ColorSchemes, {highlight: string, normal: string}> = {
  'gray': {
    highlight: 'bg-gray-800 border-gray-200 text-gray-200',
    normal: 'bg-gray-100 border-gray-800 text-gray-800',
  },
}
</script>

<template>
  <div
      :class="'border rounded-lg px-1 py-1/2 select-none '
      + colorVariants[color][highlighted ? 'highlight' : 'normal']">
    <Icon v-if="icon" :name="icon" class="align-text-middle" />
    <span>{{ text }}</span>
  </div>
</template>
