<script setup>
    defineProps(["active", 'url'])
    const emit = defineEmits(['close']);
    document.body.addEventListener('keydown', event => {
        if (event.key === "Escape"){
            emit('close');
        }
    })
</script>

<template>
    <div class="modal" :class="{'is-active': active}">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-content">
        <p class="image is-4by3">
        <img :src="url" alt="">
        </p>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
</template>