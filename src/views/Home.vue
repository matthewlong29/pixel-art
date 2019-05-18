<template>
  <main>
    <CanvasSizeSlider @inputData="updateSize"/>
    <Canvas :columns="gridSize"/>
    <ColorPalette/>
  </main>
</template>

<script>
import Canvas from "@/components/Canvas.vue";
import CanvasSizeSlider from "@/components/CanvasSizeSlider.vue";
import ColorPalette from "@/components/ColorPalette.vue";

export default {
  name: "home",
  data() {
    return {
      gridSize: 25
    };
  },
  components: {
    Canvas,
    CanvasSizeSlider,
    ColorPalette
  },
  methods: {
    updateSize(val) {
      this.gridSize = parseInt(val);
    }
  },
  watch: {}
};
</script>