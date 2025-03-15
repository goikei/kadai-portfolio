<script setup lang="ts">
import {TagInfoMap} from "~/share/utils/tagInfo";

const props = withDefaults(defineProps<{tag: string, highlighted?: boolean}>(), {highlighted: false})
const tagInfo = TagInfoMap[props.tag]
</script>

<template>
  <SimpleBadge :icon="tagInfo.icon" :text="tag" :highlighted />
</template>

<style scoped>

</style>