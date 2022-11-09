<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">
    <!-- <router-view name="navbar" /> -->
    <q-header elevated>
      <q-toolbar class="main-toolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <div class="q-px-lg q-pt-md q-mb-md">
          <router-link to="/" class="logo-text text-white text- text-h5"
            >TestTV</router-link
          >
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
        <q-tabs shrink stretch>
          <!-- <q-tab name="tab1" label="戲劇" /> -->
          <q-route-tab :to="{ name: 'dramas' }" exact label="戲劇" />

          <q-tab name="tab2" label="動畫" />
          <q-tab name="tab3" label="精選" />
          <q-tab name="tab4" label="免費專區" />
        </q-tabs>
        <q-space></q-space>
        <div class="q-mr-md">
          <SearchAcInput />
        </div>

        <div class="q-mr-md">
          <q-btn color="pink" v-if="$store.getters['userModule/user'].id === ''"
            >註冊</q-btn
          >
        </div>
        <div>
          <q-btn v-if="$store.getters['userModule/user'].id === ''">登入</q-btn>
          <UserDropdown v-else />
        </div>
        <!-- <div>
          <q-btn v-if="$store.getters['userModule/user'].id === ''">登入</q-btn>
          <UserDropdown v-else/>
        </div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered side="right">
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

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
import { Vue, Component } from 'vue-property-decorator'
import EssentialLink from 'components/EssentialLink.vue'
import SearchAcInput from 'src/components/SearchAcInput.vue'
import UserDropdown from 'src/components/user/UserDropdown.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
]

@Component({
  components: {
    EssentialLink,
    SearchAcInput,
    UserDropdown,
  },
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false
  essentialLinks = linksData

  toggleLeftDrawer() {
    this.leftDrawerOpen = !this.leftDrawerOpen
  }
}
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
    filter: grayscale(100%);
  }

  .logo-text {
    text-decoration: none;
  }
}
</style>
