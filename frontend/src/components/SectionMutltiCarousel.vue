<template>
  <div class="q-pa-md">
    <div class="text-white text-h5 text-bold q-mb-lg">熱播排行榜</div>

    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="white"
      padding
      arrows
      height="400px"
      class="bg-dark shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-col-gutter-md no-wrap">
          <div
            class="col-6 col-sm-2"
            v-for="item in items.slice(0, 6)"
            :key="item.id"
          >
            <DramaCard class="bg-dark" :item="item" />
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-col-gutter-md no-wrap">
          <div
            class="col-6 col-sm-2"
            v-for="item in items.slice(6, 12)"
            :key="item.id"
          >
            <DramaCard class="bg-dark" :item="item" />
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script lang="ts">
// import Drama from 'src/types/Drama'
import DramaCard from 'src/components/DramaCard.vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

import { DramaType } from '../components/models'

@Component({
  components: {
    DramaCard,
  },
})
export default class SectionCarousel extends Vue {
  @Prop(Array)
  readonly items!: DramaType[]

  slide = 1
}
</script>
