<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/itemList.vue';
let message = ref('');
let i = 1;
let items = ref([
    { id: i++, name: "Piim", isDone: true },
    { id: i++, name: "Komm", isDone: true },
    { id: i++, name: "Pomm", isDone: false },
    { id: i++, name: "Plomm", isDone: false },
])

function addItem(){
    if(message.value.trim() !== ''){
        items.value.push({ id: i++, name: message.value.trim(), isDone: false });
    }
    message.value = '';
}

let doneItems = computed(() => items.value.filter(item => item.isDone));
let toDoItems = computed(() => items.value.filter(item => !item.isDone));

</script>

<template>
    <div class="container">
        <div class="field has-addons">
            <div class="control">
                <input class="input" type="text" v-model="message" @keypress.enter="addItem">
            </div>
            <div class="control">
                <button class="button is-info" @click="addItem">
                    Add Item
                </button>
            </div>
        </div>
        <div class="content">
            <ItemList :items="items" title="All items"></ItemList>
            <ItemList :items="doneItems" title="Done items"></ItemList>
            <ItemList :items="toDoItems" title="ToDo items"></ItemList>
        </div>
    </div>

</template>

<style></style>