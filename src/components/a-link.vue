<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: false,
  }
})
</script>

<template>
  <a>{{text}}</a>
</template>

<style scoped>
a {
  font-weight: 500;
  color: #D9D9D9;
  position: relative;
  width: fit-content;
}

a:hover {
  cursor: pointer;
}

a::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: -3px;
  left: 0;
  background-color: #D9D9D9;
  transform-origin: bottom left;
  transition: transform 0.25s ease-out;
}

a:hover::after {
  transform: scaleX(1);
}
</style>