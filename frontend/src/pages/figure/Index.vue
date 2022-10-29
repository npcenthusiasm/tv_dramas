<template>
  <q-page class="q-pa-md bg-black text-white">
    <div class="" v-if="figureTag" >
      <h2 class="text-h5 ">{{ figureTag.name }}</h2>

      <div class="q-mb-lg">
        <div>類型：</div>

      </div>
      <div class="row q-col-gutter-md wrap">
        <div class="col-2" v-for="item in dramas" :key="item.id">
          <DramaCard class="bg-dark q-pb-md"  :item="item"/>
        </div>
      </div>

      <div >

      </div>
    </div>
  </q-page >
</template>

<script lang="ts">
import { api } from 'src/boot/axios'
import DramaCard from 'src/components/DramaCard.vue'
import Drama from 'src/types/Drama'
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'

interface Tag {
  id: number;
  name: string
}

interface ResponseData {
  data: {
    items: Drama []
    figure: Tag
  }
}

export default defineComponent({
  components: {
    DramaCard
  },
  setup () {
    const dramas = ref<Drama []>([])
    const figureTag = ref<Tag>({
      id: -1,
      name: ''
    })
    const route = useRoute()
    const id: string = (route.params.id && route.params.id.toString())
    // const id: string = route.params.id && route.params.id.toString()

    api.get(`/figures/${id}`).then((res: ResponseData) => {
      console.log('res: ', res)
      dramas.value = res.data.items
      figureTag.value = res.data.figure
    }).catch((err) => {
      console.log(err)
    })

    return {
      figureTag,
      dramas
    }
  }
})
</script>

<style lang="scss" scoped>

.drama-item {
  display: flex;

  .drama-img {
    width: 200px;
  }
  .drama-content {
    // display: flex;
    // margin-left: 12px;
  }

}
.drama-intro {
  background-color: #222222 ;
}

.intro-casts {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &__item {
    margin-right: 12px;
  }
}
</style>
