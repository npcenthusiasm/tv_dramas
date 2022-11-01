<template>
  <div class="q-pa-md">
    <q-btn-dropdown
      class="user-dropdown-btn"
      color="dark"
    >

    <template v-slot:label>
      <q-avatar

        size="lg"
        color="primary"
        text-color="white"
      >
      <img src="https://cdn.quasar.dev/img/avatar5.jpg" alt="">
      </q-avatar>

    </template>
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Settings</div>
          <q-toggle v-model="mobileData" label="Use Mobile Data" />
          <q-toggle v-model="bluetooth" label="Bluetooth" />
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img :src="$store.state.userModule.user.image">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">
            {{ $store.state.userModule.user.id }}
          </div>

          <q-btn
            class="logout-btn"
            color="primary"
            label="Logout"
            push
            size="sm"
            @click="$store.dispatch('userModule/logout')"
            v-close-popup
          />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<script>
import { ref } from 'vue'
// import { useStore } from 'vuex'

export default {
  setup () {
    // const store = useStore()

    return {
      mobileData: ref(false),
      bluetooth: ref(false)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      // user
    }
  }
}
</script>

<style lang="scss" >
.user-dropdown-btn {
  padding: 0;
  border-radius: 50%;
  .user-avatar {
    padding: none;
  }
  .q-icon {
  // ::v-deep(.q-icon) {
    display: none;
  }
}
</style>
