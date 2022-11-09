<template>
  <div class="">
    <div class="">
      <q-form @submit.prevent="onSubmitSearch">
        <q-select
          dark
          color="pink-6"
          filled
          v-model="model"
          use-input
          hide-selected
          fill-input
          input-debounce="200"
          :options="options"
          @new-value="updateNewValue"
          @input-value="inputValue"
          @update:model-value="onSubmitSearch"
          @filter="filterFn"
          @virtual-scroll="virtualScroll"
          style="width: 250px"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>

          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                沒有搜尋到任何東西..
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </q-form>
    </div>
  </div>
</template>

<script lang="ts">
// import { ref } from 'vue'
// import { api } from 'src/boot/axios'
// import { useRouter } from 'vue-router'
import dramaApi from 'src/apis/dramaApi'
import { Vue, Component } from 'vue-property-decorator'

// const stringOptions = [
//   'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
// ]

interface ResponseData {
  data: string[]
}

@Component
export default class SearchAcInput extends Vue {
  options: string[] = []
  objOptions: { name: string; id: number }[] = []
  model = ''

  filterFn(val: string, update: unknown, abort: unknown) {
    console.log(1)
    if (val.length === 0) {
      // 先這樣繞過去
      if (typeof abort === 'function') {
        abort()
        return
      }
    }

    dramaApi
      .fetchSuggestions(val)
      .then((res) => {
        console.log('res: ', res.data)
        // 先這樣繞過去
        if (typeof update === 'function') {
          update(() => {
            this.objOptions = res.data
            this.options = res.data.map((it) => it.name)
            console.log('val: ', val)
            console.log('update')
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  async onSubmitSearch() {
    console.log('onSubmitSearch')
    console.log('this.model: ', this.model)
    console.log('searchTex', this.model)
    const option = this.objOptions.find((opt) => opt.name === this.model)
    await this.$router.push({
      name: 'drama-id',
      params: { id: String(option?.id) },
    })
  }

  updateNewValue(newValue: string) {
    console.log('updateNewValue')
    console.log(newValue)
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.onSubmitSearch()
  }

  inputValue(v: string) {
    console.log('v: ', v)
  }

  virtualScroll(v: any) {
    console.log('v: ', v)
  }
  // export default {
  //   // props: {
  //   //   fetchFn: {
  //   //     type: Function
  //   //   }
  //   // },
  //   setup () {
  //     const options = ref<string []>([])
  //     const model = ref(null)
  //     const router = useRouter()

  //     return {
  //       model,
  //       options,
  //       enter () {
  //         console.log('enter')
  //       },

  //       filterFn (val: string, update: unknown, abort: unknown) {
  //         console.log(1)
  //         if (val.length === 0) {
  //           // 先這樣繞過去
  //           if (typeof abort === 'function') {
  //             abort()
  //             return
  //           }
  //         }

  //         // d
  //         api.get(`/search_suggestions/${val}`).then((res: ResponseData) => {
  //           console.log('res: ', res.data)
  //           // 先這樣繞過去
  //           if (typeof update === 'function') {
  //             update(() => {
  //               options.value = res.data
  //               console.log('val: ', val)
  //               console.log('update')

  //             // props.fetchFn().then((res) => {
  //               //   console.log('res: ', res)
  //               // }).catch((err) => {
  //               //   console.log(err)
  //               // })
  //               // const needle = val.toLowerCase()
  //               // options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
  //               // options.value
  //             })
  //           }
  //         }).catch((err) => {
  //           console.log(err)
  //         })
  //       },
  // async onSubmitSearch  () {
  //   console.log('onSubmitSearch')
  //   console.log('searchTex', model.value)
  //   await router.push({ name: 'drama-id', params: { id: '13' } })
  // }
  //     }
  //   }
}
</script>
