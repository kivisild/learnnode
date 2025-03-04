<script setup>
import {ref} from 'vue';
import axios from 'axios';

let joke = ref('');

try{
    let response = await axios.get("https://api.chucknorris.io/jokes/random");
    joke.value = response.data.value;
}
catch(err){
    console.log(err)
}


// axios.get("https://api.chucknorris.io/jokes/random").then(res => {
//     joke.value = response.data.value;
// }).catch(err =>{
//     console.log(err)
// })

//axios.get("https://api.chucknorris.io/jokes/random").then(res => {
    //joke.value = response.data.value;
//});


</script>

<template>
    {{ joke }}
</template>