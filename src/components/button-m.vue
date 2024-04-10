<script setup>
defineProps({
  text: {
    type: String,
    required: true,
    default: 'Button Label'
  },
  url: {
    type: String,
    required: false,
    default: "#"
  }
})
</script>

<template>
  <a class="px-6 py-4 backdrop-blur-sm bg-white/10 border-[0.5px] border-white/30 rounded-full hover:bg-white/20 transition-all active:bg-white/10 w-fit">{{text}}</a>
</template>

<style>
a {
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

a:hover {
  cursor: pointer;
}
</style>