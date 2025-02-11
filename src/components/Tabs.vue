<script setup>
import { ref } from 'vue';
import {useRoute, useRouter} from 'vue-router';

const router = useRouter();
const route = useRoute();


</script>

<template>
    <div class="tabs is-centered">
  <ul>
    <li v-for="(item, key) in $router.getRoutes()" items :class="{'is-active': key==active}">
    <RouterLink :to="item.path">{{ item.name }}</RouterLink>
    </li>
  </ul>
</div>
</template>