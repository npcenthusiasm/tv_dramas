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
            <div class="row fit justify-start items-center q-gutter-md q-col-gutter no-wrap">
              <DramaCard class="col-2 bg-dark q-pb-md"  v-for="item in items.slice(0,6)" :key="item.id" :item="item"/>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-md q-col-gutter no-wrap">
              <DramaCard class="col-2 bg-dark q-pb-md"  v-for="item in items.slice(6, 12)" :key="item.id" :item="item"/>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div>
    <!-- <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide v-for="item in items.slice(0, 15)" :key="item.id" :name="item.id" :img-src="`http://localhost:8080/images/${item.img}`" />
    </q-carousel> -->
  </div>
</template>
<script lang="ts">
// import Drama from 'src/types/Drama'
import DramaCard from 'src/components/DramaCard.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    DramaCard
  },
  props: {
    items: {
      type: Array
    }
  },
  setup (props) {
    console.log('props: ', props)

    const slide = ref(1)
    console.log('props.items: ', props.items)
    // const { items } = toRefs(props)
    // const items: Drama [] = {items } = toRefs(props)
    return {
      slide
      // items
    }
  }
})
</script>
