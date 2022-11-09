<template>
  <q-page class="bg-dark text-white">
    <!-- <SectionCarousel
      v-if="headlines.length > 0"
      :items="headlines"
      :defaultShow="headlines[0].id"
    /> -->
    <!-- {{ dramas }}
    {{ headlines }} -->
    <SectionMutltiCarousel
      v-if="dramas.length > 0"
      :items="dramas.slice(0, 12)"
    />
    <SectionMutltiCarousel
      v-if="dramas.length > 0"
      :items="dramas.slice(12, 24)"
    />
  </q-page>
</template>

<script lang="ts">
// import { api } from 'src/boot/axios'
// import { defineComponent, onMounted, ref } from 'vue'
// @Component({

// })

// import SectionCard from './SectionCard.vue'
import { DramaType, HeadlineType } from '../../components/models'
// import SectionCarousel from './SectionCarousel.vue'
import SectionMutltiCarousel from '../../components/SectionMutltiCarousel.vue'
// import { Vue } from 'vue-property-decorator'
import { Vue, Component } from 'vue-property-decorator'
import dramaApi from 'src/apis/dramaApi'

interface ResponseData {
  data: DramaType[]
}

interface ResponseHeadlinesData {
  data: HeadlineType[]
}

@Component({
  components: {
    SectionMutltiCarousel,
  },
})
export default class PageIndex extends Vue {
  dramas: DramaType[] = []
  headlines: HeadlineType[] = []

  beforeCreate() {
    console.log('beforeCreate')
  }

  created() {
    console.log('created')
  }

  mounted() {
    console.log('mounted')
    console.log('this: ', this)

    this.$axios
      .get('/home')
      .then((res: ResponseHeadlinesData) => {
        console.log('res: ', res)
        this.headlines = res.data
      })
      .catch((err) => {
        console.log(err)
      })

    dramaApi
      .fetchDramas()
      .then((res) => {
        console.log('res: ', res)
        this.dramas = res.data.dramas
      })
      .catch((err) => {
        console.log(err)
      })

    // this.$axios
    //   .get('/dramas')
    //   .then((res: ResponseData) => {
    //     console.log('res: ', res)
    //     this.dramas = res.data
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }
  // headlines: HeadlineType[] = [
  //   {
  //     id: 1,
  //     summary: '123',
  //     titleId: '4',
  //     dominantColor: '#dddddd',
  //     img: '1',
  //     topic: '1',
  //     deeplink: '1',
  //     createdAt: '1',
  //     updatedAt: '1',
  //     displayName: '123',
  //   },
  // ]
}
</script>
