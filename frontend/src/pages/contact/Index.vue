<template>
  <div>
    <q-page class="bg-dark text-white">
      <div class="q-pa-md">
        123
        <!-- <q-btn @click="$store.commit('SET_USER_DATA', {
          id: '123123'
        })">add</q-btn> -->

        <q-btn @click="$store.dispatch('userModule/fetchUserData', {
          id: 'fetchUserDataId',
          image: 'https://cdn.quasar.dev/img/avatar5.jpg',
          name: 'apple'
        })">add</q-btn>

        <!-- <q-btn @click="fetchUserData">add</q-btn> -->
      </div>
    </q-page>
    contact
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()
    console.log('store: ', store)

    return {
      // fetchUserData: () => store.commit('SET_USER_DATA', {
      //   id: '123123'
      // })
      store
    }
  }
})
</script>
