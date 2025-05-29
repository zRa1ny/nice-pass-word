

<template>
  <div>
    <nice-password :value={value} @change="handleChange"  @input="handleChange" @blur="handleblur"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NicePassword from './nice-password.vue'
const value = ref("sa12315&^")
</script>


