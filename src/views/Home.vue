<template>
  <main>
    <CanvasSizeSlider @inputData="updateSize"></CanvasSizeSlider>
    <Canvas :columns="gridSize"/>
  </main>
</template>

<script>
import Canvas from "@/components/Canvas.vue";
import CanvasSizeSlider from "@/components/CanvasSizeSlider.vue";

export default {
  name: "home",
  data() {
    return {
      gridSize: 25
    };
  },
  components: {
    Canvas,
    CanvasSizeSlider
  },
  methods: {
    updateSize(val) {
      this.gridSize = parseInt(val);
    }
  },
  watch: {}
};
</script>