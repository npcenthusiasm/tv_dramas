<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">
    <!-- <router-view name="navbar" /> -->
    <q-header elevated>
      <q-toolbar class="main-toolbar  ">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <div class="q-px-lg q-pt-md q-mb-md">
          <router-link to="/" class="logo-text text-white text- text-h5">TestTV</router-link>
          <!-- <div class="text-subtitle1">{{ today }}</div> -->
        </div>
        <!-- <q-img src="../statics/plant.jpg" class="header-image absolute-top "> -->

        <!-- </q-img> -->
        <!-- <q-toolbar-title>
          Apple
          <template v-slot:subtitle>
            <div>Likey</div>
          </template>
        </q-toolbar-title> -->
<!--
        <div>Quasar v{{ $q.version }}</div>
        <q-btn
          color="brown-5"
          text-color="amber"
          glossy
          label="loading"
          /> -->
        <q-space ></q-space>
        <div>
          <!-- <q-form @submit.prevent="onSubmitSearch">
            <q-input v-model="searchText" dark filled type="search" class="" debounce="500">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </q-form> -->
          <SearchAcInput />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      bordered
      side="right"
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'
import { date } from 'quasar'
import Footer from './Footer.vue'

const linksList = [
  {
    title: '精選景點',
    caption: null,
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: '美食地圖',
    caption: null,
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: '夜宿曉行',
    caption: null,
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: '登入',
    caption: null,
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: '註冊',
    caption: null,
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  }
  // {
  //   title: 'Facebook',
  //   caption: '@QuasarFramework',
  //   icon: 'public',
  //   link: 'https://facebook.quasar.dev'
  // },
  // {
  //   title: 'Quasar Awesome',
  //   caption: 'Community Quasar projects',
  //   icon: 'favorite',
  //   link: 'https://awesome.quasar.dev'
  // }
]

import { computed, defineComponent, ref, watch } from 'vue'
import { api } from 'src/boot/axios'
import SearchAcInput from 'src/components/SearchAcInput.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Footer,
    SearchAcInput,
    EssentialLink
  },

  setup () {
    const rightDrawerOpen = ref(false)
    const searchText = ref('')
    const today = computed(() => {
      console.log(date.formatDate(Date.now(), 'dddd D MMMM'))
      return date.formatDate(Date.now(), 'dddd D MMMM')
    })

    console.log('today: ', today.value)

    watch(() => searchText.value, (term) => {
      console.log('term: ', term)
      api.get(`/search_suggestions/${term}`).then((res) => {
        console.log('res: ', res)
      }).catch((err) => {
        console.log(err)
      })
    })
    return {
      searchText,
      essentialLinks: linksList,
      rightDrawerOpen,
      toggleLeftDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
      onSubmitSearch () {
        console.log('searchText.value: ', searchText.value)
      },
      today
    }
  }
})
</script>

<style lang="scss">
.main-layout {
  .main-toolbar {
    // background-color: rgba(#b40f42, 0.8);
    background-color: $main;
    // bg-main
    // bg-dark
    // opacity: 0.2;
  }
  .header-image {
    height: 100%;
    z-index: -1;
    opacity: 0.2;
    filter:  grayscale(100%);
  }

  .logo-text {
    text-decoration: none;
  }
}

</style>
