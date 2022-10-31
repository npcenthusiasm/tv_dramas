<template>
  <q-page class="bg-dark">
    <SectionCarousel v-if="headlines.length > 0" :items="headlines" :defaultShow="headlines[0].id"/>
    <SectionCard />
    <SectionMutltiCarousel v-if="dramas.length > 0" :items="dramas"/>
    <SectionMutltiCarousel v-if="dramas.length > 0" :items="dramas"/>

  </q-page>
</template>

<script lang="ts">
import { api } from 'src/boot/axios'
import { defineComponent, onMounted, ref } from 'vue'
import SectionCard from './SectionCard.vue'
import Drama, { HeadlineType } from '../../types/Drama'
import SectionCarousel from './SectionCarousel.vue'
import SectionMutltiCarousel from './SectionMutltiCarousel.vue'

interface ResponseData {
  data: Drama []
}
interface ResponseHeadlinesData {
  data: HeadlineType []
}

export default defineComponent({
  components: {
    SectionMutltiCarousel,
    SectionCarousel,
    SectionCard
  },
  setup () {
    const dramas = ref<Drama []>([])
    const headlines = ref<HeadlineType []>([])

    onMounted(() => {
      api.get('/home').then((res: ResponseHeadlinesData) => {
        console.log('res: ', res)
        headlines.value = res.data
      }).catch((err) => {
        console.log(err)
      })

      api.get('/dramas').then((res: ResponseData) => {
        console.log('res: ', res)
        dramas.value = res.data
      }).catch((err) => {
        console.log(err)
      })
    })

    return {
      headlines,
      dramas
    }
  }
})
</script>
