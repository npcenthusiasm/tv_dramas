<template>
  <q-page class="bg-dark">
    <SectionCarousel v-if="dramas.length > 0" :items="dramas"/>
    email: {{ email }}
    <q-btn @click="alert">open dialog</q-btn>

    <q-input bottom-slots v-model="text" placeholder="輸入城市/景點 或是想去的地方" counter maxlength="12" :dense="dense">
      <template v-slot:before>
        <q-icon name="flight_takeoff" />
      </template>

      <template v-slot:append>
        <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
        <q-icon name="search" />
      </template>

      <template v-slot:hint>
        Field hint
      </template>
    </q-input>

    <SectionCard />
    <SectionMutltiCarousel v-if="dramas.length > 0" :items="dramas"/>
    <SectionMutltiCarousel v-if="dramas.length > 0" :items="dramas"/>

  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar'
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
    const $q = useQuasar()
    const dramas = ref<Drama []>([])

    const email = ref<string>('')

    onMounted(() => {
      api.get('/dramas').then((res: ResponseData) => {
        console.log('res: ', res)
        dramas.value = res.data
      }).catch((err) => {
        console.log(err)
      })
    })

    function alert () {
      $q.dialog({
        title: '請選擇',
        message: 'Some message',
        prompt: {
          model: '',
          type: 'text'
        },
        cancel: true,
        persistent: true
      }).onOk((data: string) => {
        console.log('onOk')
        console.log(data)
        email.value = data
      }).onCancel(() => {
        console.log('cancel')
      }).onDismiss(() => {
        console.log('onDismiss')
      })
    }

    const text = ref('')
    return {
      email,
      text,
      alert,
      dramas
    }
  }
})
</script>
