<template>
  <q-header elevated>
    <q-toolbar class=" bg-secondary">
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />

      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Todo</div>
        <div class="text-subtitle1">{{ today }}</div>
      </div>
      <q-img src="../statics/plant.jpg" class="header-image absolute-top ">

      </q-img>
      <!-- <q-toolbar-title>
        Apple
        <template v-slot:subtitle>
          <div>Likey</div>
        </template>
      </q-toolbar-title> -->
<!--
      <div>Quasar v{{ $q.version }}</div>
      <q-btn
        color="brown-5"
        text-color="amber"
        glossy
        label="loading"
        /> -->

    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {

    }
  }
})
</script>
