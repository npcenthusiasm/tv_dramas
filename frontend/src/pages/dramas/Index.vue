<template>
  <q-page class="bg-grey-10 text-white">
    <div class="q-pa-md">
      <div class="text-h5 q-mb-lg">戲劇</div>
      <!-- {{ dramas }} -->

      <div>
        <div class="q-mb-md">
          <span class="text-white text-weight-bold q-mr-sm">類別 /</span>
          <span class="text-weight-bold"></span>
        </div>

        <div class="q-mb-md">
          <span class="text-white text-weight-bold q-mr-sm">排序 /</span>
          <span class="text-weight-bold"></span>
        </div>

        <div class="q-mb-md">
          <span class="text-white text-weight-bold q-mr-sm">地區 /</span>
          <span class="text-weight-bold"></span>
        </div>

        <div class="q-mb-md">
          <span class="text-white text-weight-bold q-mr-sm">類型 /</span>
          <span class="text-weight-bold"></span>
        </div>
      </div>
      <div class="row wrap q-col-gutter-md q-mb-md">
        <div class="col-2" v-for="drama in dramas" :key="drama.id">
          <DramaCard :item="drama" class="bg-dark" />
        </div>
      </div>

      <div class="bg-grey-10 flex justify-center q-py-sm">
        <q-pagination
          v-model="current"
          :model-value="current"
          color="pink"
          :max="total_page"
          :max-pages="6"
          :boundary-numbers="false"
          @input="updatePage"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import dramaApi from 'src/apis/dramaApi'
import DramaCard from 'src/components/DramaCard.vue'
import { Vue, Component } from 'vue-property-decorator'
import { DramaType } from '../../components/models'

@Component({
  components: {
    DramaCard,
  },
})
export default class DramasPage extends Vue {
  // dramas: DramaType[] = []
  dramas: DramaType[] = []
  total = 0
  total_page = 0
  current = 1
  per_page = 12
  page = 1

  mounted() {
    this.fetchData(this.page)
    const browse = this.$route.query.browse
    if (browse) {
    }
  }

  fetchData(page: number) {
    dramaApi
      .fetchDramas(page, this.per_page)
      .then((res) => {
        console.log('res: ', res)

        this.dramas = res.data.dramas
        this.total = res.data.total
        this.total_page = res.data.total_page
      })
      .catch((err) => {
        console.log(err)
      })
  }

  updatePage(page: number) {
    this.page = page
    this.fetchData(page)
    // console.log('page: ', page)
  }
}
</script>

<style></style>
