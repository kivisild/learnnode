<script setup>
    import {ref} from 'vue';
  import LeafletMap from '../components/LeafletMap.vue';

  let center  = ref([59.4269, 24.7434]);
</script>

<template>
    <button class="button is-primary" @click="center=[59.390434, 24.652186]">Go to home</button>
    <LeafletMap :center="center" :zoom="19"></LeafletMap>
    <LeafletMap :center="[59.68, 24.1]" :zoom="19"></LeafletMap>
</template>
