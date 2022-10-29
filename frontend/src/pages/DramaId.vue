<template>
  <q-page class="bg-black text-white">
    <div class="drama-page" v-if="drama">
      <!-- {{ drama }} -->

      <div class="drama-top-info q-pa-md q-mb-lg" >
        <q-img class="drama-img full-height " :src="`${drama.img}`" />
        <div class="drama-content q-ml-md">
          <div class="text-white text-weight-medium text-h4 q-pt-xs">{{ drama.title }}</div>
          <div class="text-grey text-weight-medium q-mt-xs">{{ drama.episode }}</div>
          <div class="text-grey text-weight-medium q-mt-xs">{{ drama.rating }}</div>
          <q-btn class="q-mt-sm text-white" style="background: #FF0080;" label="播放" />
        </div>
      </div>
      <div class="drama-intro q-pa-md q-mb-lg">

        <div class="drama-intro-layout">
          <div>
            <div class="q-mb-lg">
              {{ drama.release_info }}
            </div>
            <div class="intro-casts q-mb-lg">
              <div class="intro-casts__item">
                <span class="text-grey q-mr-sm">演員</span>
                <span class="text-weight-bold">
                  <span v-for="(cast, index) in  drama.Casts" :key="cast.id">
                    <router-link class="text-white text-decoration-none" :to="{ name: 'figure-id', params: { id: cast.id} }">{{ cast.name }}</router-link>
                      <span v-if="index !== drama.Casts.length - 1">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                  </span>
                  <!-- {{ drama.Casts || '江口拓也/早見沙織/種崎敦美' }} -->
                </span>
              </div>

              <div class="intro-casts__item">
                <span class="text-grey q-mr-sm">導演</span>
                <span class="text-weight-bold">{{ drama.directors || '古橋一浩' }}</span>
              </div>

              <div class="intro-casts__item">
                <span class="text-grey q-mr-sm">編劇</span>
                <span class="text-weight-bold">{{ drama.writers || '遠藤達哉' }}</span>
              </div>

              <div class="intro-casts__item">
                <span class="text-grey q-mr-sm">類型</span>
                <span class="text-weight-bold">{{ drama.themes || '歷史軍武/免費' }}</span>
              </div>
            </div>

            <div>
              {{ drama.summary }}
            </div>

            <div>

              <div class="q-pa-md">
                <!-- <q-tabs
                  v-model="tab"
                  class="bg-dark text-white"
                >
                  <q-tab name="mails" label="分級" />
                  <q-tab name="movies" label="Movies" />
                </q-tabs> -->

                <div class="text-white text-h5 text-weight-medium q-mt-xs">
                  分集
                </div>
              </div>

              <div class="q-pa-md">
                <div class="row q-col-gutter-md">
                  <div class="col-4"  v-for="(series) in  drama.Series" :key="series.id">
                    <div class="series-item">
                      <q-img class="drama-img full-height " :src="`${series.img}`" />
                      <div class="series-overlay"></div>
                      <div class="series-content q-pa-sm q-mt-md">
                        <div class="text-white text-weight-medium q-mt-xs">{{ series.title }}</div>
                        <div class="text-white text-weight-medium q-mt-xs">{{ series.time }}</div>
                        <!-- <q-btn class="q-mt-sm text-white" style="background: #FF0080;" label="播放" /> -->
                      </div>
                      <div class="absolute-play-area">
                        <button class="play-btn">
                          <svg width="100%" height="100%" viewBox="0 0 100 100" shape-rendering="geometricPrecision">
                            <circle  class="play-back" stroke-width="3" r="44" cx="50" cy="50"></circle>
                            <circle  class="progress-bar" stroke-width="3" stroke-dasharray="276.46015351590177 276.46015351590177" stroke-dashoffset="276.46015351590177" r="44" cx="50" cy="50"></circle>
                            <polygon class="play-polygon"  points="32, 40 50, 66 66, 40"></polygon>
                            </svg>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="q-pa-md">
              <!-- <q-tabs
                v-model="tab"
                class="bg-dark text-white"
              >
                <q-tab name="mails" label="分級" />
                <q-tab name="movies" label="Movies" />
              </q-tabs> -->

              <div class="text-white text-h5 text-weight-medium q-mt-xs">
                相關影片
              </div>
            </div>

      </div>

    </div>
  </q-page >
</template>

<script lang="ts">
import { api } from 'src/boot/axios'
import Drama from 'src/types/Drama'
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'

interface ResponseData {
  data: Drama
}

export default defineComponent({
  setup () {
    const drama = ref<Drama>()
    const route = useRoute()
    const id: string = route.params.id && route.params.id.toString()

    const tab = ref('mails')
    api.get(`/dramas/${id}`).then((res: ResponseData) => {
      drama.value = res.data
    }).catch((err) => {
      console.log(err)
    })

    return {
      drama,
      tab
    }
  }
})
</script>

<style lang="scss" >

.drama-page {
  background-color: #222222 ;

  .drama-intro-layout {
    margin: 40px 0px;
    display: grid;
    grid-template-columns: minmax(62%, 100%) 330px;
    padding-right: 70px;
  }

  .drama-top-info {
    display: flex;
    background-color: #000000;

    .drama-img {
      width: 200px;
    }
    .drama-content {
      // display: flex;
      // margin-left: 12px;
    }

  }

  .series-item {
    position: relative;

    .series-overlay {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba(0,0,0,.5);
    }
    .series-content {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}

.intro-casts {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &__item {
    margin-right: 12px;
  }
}

.absolute-play-area {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
}
.play-btn {
  width: 32px;
  height: 32px;
  transform: rotate(-90deg);
  cursor: pointer;
  padding: 0px;
  border-width: 0px;
  background: transparent;
  outline: 0px;

  .play-back {
    stroke-width: 6px;
    stroke: rgba(255, 255, 255, 0.3);
    fill: rgba(0, 0, 0, 0.6);
    transition-property: all;
    transition-duration: 0.5s;
    stroke: white;
    opacity: 0.6;
    // transition: all .3s;
  }

  .play-polygon {
    fill: white;
    transition: all .5s;
  }

  &:hover {
    .play-polygon{
      fill: #FF0080;
    }

    .play-back {
      stroke: #FF0080;
    }

  }
}
</style>
