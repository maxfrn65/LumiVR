<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: false,
    default: "#"
  }
})


</script>

<template>
  <h4><a class="focus:before:content-asterisk transition-all text-white/80 hover:text-white focus:text-white" :href="url">{{text}}</a></h4>
</template>

<style scoped>
 a {
   font-size: 1rem;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
 }
</style>