<template>
  <q-card class="drama-card">
    <router-link class="text-decoration-none block" :to="{ name: 'drama-id', params: { id: item.id } }">
      <q-img class="full-height" :src="`${item.img}`" />
      <div class="text-white text-weight-medium q-pt-xs">{{ item.title }}</div>
      <div class="text-grey text-weight-medium q-mt-xs">{{ item.episode }}</div>
      <div class="text-grey text-weight-medium q-mt-xs">{{ item.rating }}</div>
    </router-link>
  </q-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    item: {
      type: Object
    }
  },
  setup () {
    return {

    }
  }
})
</script>

<style lang="scss" >
.drama-card {

}
</style>
