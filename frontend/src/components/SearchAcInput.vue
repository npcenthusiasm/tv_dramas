<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-form @submit.prevent="onSubmitSearch">
        <q-select
          dark
          filled
          v-model="model"
          use-input
          hide-selected
          fill-input
          input-debounce="200"
          :options="options"
          @update:model-value="onSubmitSearch"
          @filter="filterFn"
          style="width: 250px;"
        >
        <template v-slot:append>
          <q-icon name="search" />
        </template>

          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                No results
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </q-form>
    </div>
  </div>
</template>

<script lang="ts">

import { ref } from 'vue'
import { api } from 'src/boot/axios'
import { useRouter } from 'vue-router'

// const stringOptions = [
//   'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
// ]

interface ResponseData {
  data: string []
}
export default {
  // props: {
  //   fetchFn: {
  //     type: Function
  //   }
  // },
  setup () {
    const options = ref<string []>([])
    const model = ref(null)
    const router = useRouter()

    return {
      model,
      options,
      enter () {
        console.log('enter')
      },

      filterFn (val: string, update: unknown, abort: unknown) {
        console.log(1)
        if (val.length === 0) {
          // 先這樣繞過去
          if (typeof abort === 'function') {
            abort()
            return
          }
        }

        // d
        api.get(`/search_suggestions/${val}`).then((res: ResponseData) => {
          console.log('res: ', res.data)
          // 先這樣繞過去
          if (typeof update === 'function') {
            update(() => {
              options.value = res.data
              console.log('val: ', val)
              console.log('update')

            // props.fetchFn().then((res) => {
              //   console.log('res: ', res)
              // }).catch((err) => {
              //   console.log(err)
              // })
              // const needle = val.toLowerCase()
              // options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
              // options.value
            })
          }
        }).catch((err) => {
          console.log(err)
        })
      },
      async onSubmitSearch  () {
        console.log('onSubmitSearch')
        console.log('searchTex', model.value)
        await router.push({ name: 'drama-id', params: { id: '13' } })
      }
    }
  }
}
</script>
