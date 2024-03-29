<script setup>
defineProps({
  text: {
    type: String,
    default: 'Button Label'
  },
  atClick: {
    type: String,
  }
})
</script>

<template>
  <a class="px-6 py-4 backdrop-blur-sm bg-white/10 border-[0.5px] border-white/30 rounded-full" href="#">{{text}}</a>
</template>

<style>
a {
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>