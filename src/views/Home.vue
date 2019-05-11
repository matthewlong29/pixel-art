<template>
  <Canvas :rows="25"/>
</template>

<script>
import Canvas from "@/components/Canvas.vue";

export default {
  name: "home",
  components: {
    Canvas
  }
};
</script>