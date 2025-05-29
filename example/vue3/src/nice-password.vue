<template>
   <div><input ref="input" type="text" :value="value" /></div>
</template>
<script setup>
import { ref , onMounted } from 'vue'
import NicePassWord from '../../../src/index.js'
// const NicePassWord = require()
const input = ref(null);
const value = ref ("1232");
let instance;
onMounted(() => {
     instance = new NicePassWord(input.value, {
        symbol: "%", 
        callback: function () {
            console.log(this)
        }
    })
    // function changeType(e) {
    //     e = e || window.event;
    //     let type = input.type === 'text' ? 'password' : 'text';
    //     input.$changeType(type);
    //     e.target.innerText = `now is ${type}`
    // }

    // function setvalue() {
    //     let value = document.querySelector('#setvalue').value;
    //     input.$setValue(value)
    // }

    // function getvalue() {
    //     document.querySelector('#showvalue').innerText = input.value;
    // }
})


</script>