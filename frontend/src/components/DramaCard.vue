<template>
  <q-card class="drama-card">
    <router-link
      class="text-decoration-none block"
      :to="{ name: 'drama-id', params: { id: item.id } }"
    >
      <q-img v-if="item.img" class="full-height" :src="`${item.img}`" />
      <q-img v-else class="full-height" src="/images/default-img.png" />
      <!-- <q-img class="full-height" src="">
        <template v-slot:error>
          <img
            class="block"
            src="/images/default-img.jpeg"
            alt="default-img.jpeg"
          />
        </template>
      </q-img> -->
      <div class="q-pa-sm">
        <div class="text-white text-weight-medium q-pt-xs ellipsis">
          {{ item.title }}
        </div>
        <!-- <div class="text-grey text-weight-medium q-mt-xs">
          {{ item.episode }}
        </div> -->
        <!-- <div class="text-grey text-weight-medium q-mt-xs">
          {{ item.rating }}
        </div> -->
      </div>
    </router-link>
  </q-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { DramaType } from './models'

@Component
export default class DramaCard extends Vue {
  @Prop(Object)
  readonly item!: DramaType
}
</script>

<style lang="scss">
.drama-card {
}
</style>
