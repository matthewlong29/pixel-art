<template>
  <section>
    <div v-on:click="toggleTool()">
      <ToolHeader text="Canvas Size" v-if="!expanded" icon="plus-square" />
      <ToolHeader text="Canvas Size" v-if="expanded" icon="minus-square" />
    </div>
    <div v-if="expanded">
      <input type="range" min="1" max="50" v-model="gridSize" @change="submitGridSize()" />
      <h3>Canvas Size: {{gridSize}} x {{gridSize}}</h3>
    </div>
  </section>
</template>

<script>
import ToolHeader from "@/components/atoms/ToolHeader.vue";

export default {
  name: "CanvasSizeSlider",
  components: {
    ToolHeader
  },
  data() {
    return {
      gridSize: 25, // default size of 25x25
      expanded: false
    };
  },
  methods: {
    /**
     * submitGridSize
     */
    submitGridSize() {
      this.$emit("inputData", this.gridSize);
    },
    /**
     * toggleTool
     */
    toggleTool() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  input {
    width: calc(100% - 2px);
  }
  h3 {
    margin: 0;
  }
}
</style>

