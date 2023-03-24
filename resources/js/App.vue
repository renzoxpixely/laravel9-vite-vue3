<template>
  <v-container class="counter">
    <h1>{{ count }}</h1>
    <v-btn color="blue" @click="incrementCount">Increment</v-btn>
    <h1>Hola mundo</h1>
    <h1>Hola mundo</h1>
    <h1>Hola mundo</h1>
    <img src="https://cdn.shopify.com/s/files/1/0268/6861/files/husky-siberiano-bosque_edaaae94-40fa-4d86-a905-4d9df2b63232_480x480.jpg?v=1635350551">

    <router-view></router-view>
  </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    function incrementCount() {
      count.value++;
    }

    return {
      count,
      incrementCount
    }
  }
}
</script>
The changes made
