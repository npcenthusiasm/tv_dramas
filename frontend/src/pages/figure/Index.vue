<template>
  <q-page class="q-pa-md bg-black text-white">
    <div class="" v-if="figureTag">
      <h2 class="text-h5">{{ figureTag.name }}</h2>

      <div class="q-mb-lg">
        <div>類型：</div>
      </div>
      <div class="row q-col-gutter-md wrap">
        <div class="col-2" v-for="item in dramas" :key="item.id">
          <DramaCard class="bg-dark q-pb-md" :item="item" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import DramaCard from 'src/components/DramaCard.vue'
import { CastType, DramaType } from '../../components/models'
import { Vue, Component } from 'vue-property-decorator'
import dramaApi from 'src/apis/dramaApi'

@Component({
  components: {
    DramaCard,
  },
})
export default class FigureId extends Vue {
  dramas: DramaType[] = []
  figureTag = {} as CastType

  mounted() {
    dramaApi
      .fetchSeries(this.$route.params.id)
      .then((res) => {
        this.dramas = res.data.items
        this.figureTag = res.data.figure
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }
}
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
  background-color: #222222;
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
