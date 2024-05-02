<template>
  <Suspense>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </Suspense>
</template>
<script setup>
import { RouterView } from "vue-router"
</script>
