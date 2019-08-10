<template>
  <section>
    <div v-on:click="toggleTool()">
      <ToolHeader text="Pixel Size" v-if="!expanded" icon="plus-square" />
      <ToolHeader text="Pixel Size" v-if="expanded" icon="minus-square" />
    </div>
    <div v-if="expanded">
      <input type="range" min="1" max="50" v-model="pixelSize" @change="submitPixelSize()" />
      <h3>Pixel Size: "{{pixelSize}}px"</h3>
    </div>
  </section>
</template>

<script>
import ToolHeader from "@/components/atoms/ToolHeader.vue";

export default {
  name: "PixelSizeSlider",
  components: {
    ToolHeader
  },
  data() {
    return {
      pixelSize: 25, // default size of 25px
      expanded: false
    };
  },
  methods: {
    /**
     * submitPixelSize.
     */
    submitPixelSize() {
      this.$emit("inputData", this.pixelSize);
    },
    /**
     * toggleTool.
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

