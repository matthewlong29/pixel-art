<template>
  <section>
    <input
      type="range"
      min="1"
      max="50"
      v-model="gridSize"
      @change="submitSize"
    >
    <h3>Canvas Size: {{gridSize}} x {{gridSize}}</h3>
  </section>
</template>

<script>
export default {
  name: "CanvasSizeSlider",
  data() {
    return {
      gridSize: 25
    };
  },
  methods: {
    submitSize() {
      console.log(this.gridSize);
      this.$emit("inputData", this.gridSize);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
