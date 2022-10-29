<template>
  <q-page class="bg-dark">
    <SectionCarousel v-if="dramas.length > 0" :items="dramas"/>
    <SectionCard />
    <SectionMutltiCarousel v-if="dramas.length > 0" :items="dramas"/>
    <SectionMutltiCarousel v-if="dramas.length > 0" :items="dramas"/>

  </q-page>
</template>

<script lang="ts">
import { api } from 'src/boot/axios'
import { defineComponent, onMounted, ref } from 'vue'
import SectionCard from './SectionCard.vue'
import Drama from '../../types/Drama'
import SectionCarousel from './SectionCarousel.vue'
import SectionMutltiCarousel from './SectionMutltiCarousel.vue'

interface ResponseData {
  data: Drama []
}

export default defineComponent({
  components: {
    SectionMutltiCarousel,
    SectionCarousel,
    SectionCard
  },
  setup () {
    const dramas = ref<Drama []>([])

    onMounted(() => {
      api.get('/dramas').then((res: ResponseData) => {
        console.log('res: ', res)
        dramas.value = res.data
      }).catch((err) => {
        console.log(err)
      })
    })

    const text = ref('')
    return {
      text,
      dramas
    }
  }
})
</script>
