<template>
  <div class="">
    <div class="q-pa-md" >

    <q-form
      @submit.prevent="onSubmit"
      @reset="onReset"
      class=""
    >
      <div class="row q-gutter-xs">
        <div class="col-6">
          <q-input
            filled
            v-model="myForm.img"
            label="img"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

        </div>
        <div class="col-6">
          <q-input
            filled
            v-model="myForm.title"
            label="img"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
        </div>
      </div>
      <q-input
        filled
        v-model="myForm.summary"
        label="img"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="myForm.episode"
        label="img"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="myForm.rating"
        label="img"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="myForm.content_agents"
        label="img"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
            <q-input
        filled
        v-model="myForm.release_info"
        label="img"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
            <q-input
        filled
        v-model="myForm.cast_id"
        label="img"
        lazy-rules
      />
            <q-input
        filled
        v-model="myForm.release_info"
        label="img"
        lazy-rules
      />
<!--
      <q-date
        landscape
        v-model="date"
      >

      </q-date> -->

      <!-- <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      /> -->

      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->
      <CSMeditor @updateEditorValue="updateEditorValue"/>
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

    </div>
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import { DramaFormType } from '../../components/models'
import { defineComponent, ref } from 'vue'
import CSMeditor from '../../components/CSMeditor.vue'

// img: "81c43351a6fda797a4b69d36461c16a4417d7711.sm.jpg",
// title: "SPY X FAMILY 間諜家家酒",
// summary: "這是個世界各國都在檯面下進行激烈情報戰的時代，東國與西國，兩國之間已持續冷戰了十多年。隸屬於西國情報局間諜–黃昏，被指派一項機密任務，奉命接近威脅東西和平的危險人物，要刺探出東國國家統一黨黨魁─唐納文‧戴斯蒙德的戰爭計畫。任務內容是在一週內組好家庭並潛入戴斯蒙德兒子所就讀的名校。於是黃昏扮起精神科醫生─洛伊德‧佛傑開始組織家庭。然而他找到的女兒安妮亞是會讀心的超能力者，妻子約兒則是位暗殺者，由於利害一致，三人便互相隱瞞真實身分，並展開共同生活…",
// episode: "更新至第16集",
// rating: "5.0",
// release_info: "10/1起每週六23:00更新",
// content_agents: "木棉花",
// release_year: 2022,
// cast_id: 1,
// createdAt: "2022/10/26",
// updatedAt: "2022/10/26",

export default defineComponent({
  components: {
    CSMeditor
  },
  setup () {
    const $q = useQuasar()

    const myForm = ref<DramaFormType>({
      img: '81c43351a6fda797a4b69d36461c16a4417d7711.sm.jpg',
      title: 'SPY X FAMILY 間諜家家酒',
      summary: '這是個世界各國都在檯面下進行激烈情報戰的時代，東國與西國，兩國之間已持續冷戰了十多年。隸屬於西國情報局間諜–黃昏，被指派一項機密任務，奉命接近威脅東西和平的危險人物，要刺探出東國國家統一黨黨魁─唐納文‧戴斯蒙德的戰爭計畫。任務內容是在一週內組好家庭並潛入戴斯蒙德兒子所就讀的名校。於是黃昏扮起精神科醫生─洛伊德‧佛傑開始組織家庭。然而他找到的女兒安妮亞是會讀心的超能力者，妻子約兒則是位暗殺者，由於利害一致，三人便互相隱瞞真實身分，並展開共同生活…',
      episode: '更新至第16集',
      rating: '5.0',
      release_info: '10/1起每週六23:00更新',
      content_agents: '木棉花',
      release_year: 2022,
      cast_id: [2, 3]
      // createdAt: '',
      // updatedAt: ''
    })

    const date = ref('2022/10/31')
    return {
      date,
      myForm,
      onSubmit () {
        api.put('/dramas/1', { ...myForm.value, id: 1 }).then((res) => {
        // api.post('/dramas', myForm.value).then((res) => {
          console.log(res)
          $q.notify({
            message: 'success',
            color: 'green'
          })
        }).catch((err) => {
          $q.notify({
            message: 'error',
            color: 'danger'
          })
          console.log(err)
        })
      },
      onReset () {
        console.log('reset')

        // Object.keys(myForm.value).forEach((key: string) => {
        //   if (key === 'release_year' || key === 'cast_id') {
        //     myForm.value[key] = 0
        //   } else {
        //     myForm.value[key] = ''
        //   }
        // })
      },
      updateEditorValue (editorValue: string) {
        console.log('editorValue: ', editorValue)
      }
    }
  }
})
</script>
