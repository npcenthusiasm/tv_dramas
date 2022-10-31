<template>
  <div class="q-pa-md">

    <!-- {{ items }} -->
    <q-carousel
      animated
      v-model="slide"
      arrows
      :autoplay="4000"
      navigation
      infinite
    >
      <q-carousel-slide v-for="item in items" :key="item.id" :name="item.id" :img-src="`${item.img}`" />
      <!-- <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" /> -->
    </q-carousel>

    <!-- <img :src="items[0].img" alt=""> -->
  </div>
</template>
<script lang="ts">
// import Drama from 'src/types/Drama'
// import { HeadlineType } from 'src/types/Drama'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    items: {
      type: Array
    },
    defaultShow: {
      type: Number
    }
  },
  setup (props) {
    // console.log('props: ', props)

    const slide = ref(props.defaultShow)
    // const { items } = toRefs(props)
    // const items: Drama [] = {items } = toRefs(props)
    return {
      slide
      // items
    }
  }
})
</script>
