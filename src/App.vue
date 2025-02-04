<script setup>
import { ref } from 'vue';
import Modal from './components/Modal.vue';
import imgModal from './components/imgModal.vue'

let modalActive = ref(false);
let modalActive2 = ref(false);
let modalActive3 = ref(false);


</script>

<template>
    <div class="container">
        <section class="section">
            <div class="buttons">
                <button class="button is-primary" @click="modalActive=true">Modal Activate</button>
                <button class="button is-warning is-outlined" @click="modalActive2=true">Modal activate 2</button>
            </div>
            
        </section>
    </div>

    <imgModal :active="modalActive" @close="modalActive=false" url="https://picsum.photos/200/300"></imgModal>
    <imgModal :active="modalActive2" @close="modalActive2=false" url="https://picsum.photos/200/300"></imgModal>



</template>

<style></style>