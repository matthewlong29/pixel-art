<template>
  <section>
    <div v-on:click="toggleTool()">
      <ToolHeader text="Pixel Size" v-if="!expanded" icon="plus-square"/>
      <ToolHeader text="Pixel Size" v-if="expanded" icon="minus-square"/>
    </div>
    <div v-if="expanded">
      <input type="range" min="1" max="50" v-model="gridSize" @change="submitSize()">
      <h3>Pixel Size: "{{gridSize}}px"</h3>
    </div>
  </section>
</template>

<script>
import ToolHeader from "@/components/partials/ToolHeader.vue";

export default {
  name: "PixelSizeSlider",
  components: {
    ToolHeader
  },
  data() {
    return {
      gridSize: 25,
      expanded: false
    };
  },
  methods: {
    submitSize() {
      this.$emit("inputData", this.gridSize);
    },
    toggleTool() {
      this.expanded = !this.expanded;
      console.log(this.expanded === true ? "expanded" : "not expanded");
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

