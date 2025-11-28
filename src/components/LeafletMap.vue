<script setup>
    import L from 'leaflet'
    import {onMounted, useId, watch} from 'vue';
    import 'leaflet/dist/leaflet.css'
    
    import 'leaflet/dist/images/marker-icon-2x.png'
    import 'leaflet/dist/images/marker-icon.png'
    import 'leaflet/dist/images/marker-shadow.png'
    
    const {center, zoom} = defineProps(['center', 'zoom']);
    const id ='map' + useId();
    let map;
    

onMounted(() => {
    map = L.map(id).setView(center, zoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([59.42680, 24.74348]).addTo(map);
    var homeMarker = L.marker([59.390434,24.652186]).addTo(map);
    var polygoncoords = [[59.390276, 24.652524], [59.390269, 24.651907], [59.390538, 24.651912], [59.390543, 24.652433]];
    var polygon = L.polygon(polygoncoords, {color: 'red'}).addTo(map);
});

watch(() => center, (center, oldCenter) => {
    console.log(center, oldCenter);
    map.panTo(center);
})
</script>

<template>
    <div :id="id"></div>
</template>

<style scoped>
    div{
        height:90vh;
    }
</style>