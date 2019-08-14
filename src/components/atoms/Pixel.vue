<template>
  <div>
    <div
      v-if="canvasPixel && toolName == 'pencil'"
      :style="{ width: `${pixelSize}px`, height: `${pixelSize}px`, backgroundColor: `${color}`}"
      v-bind:class="{'partiallyVisible': active && !clicked, 'fullyInvisible': !active && !clicked, 'fullyVisible': clicked}"
      @mouseenter="!clicked ? active = !active : null"
      @mouseleave="!clicked ? active = !active : null"
      @mousedown="clicked = true"
    ></div>
    <div
      v-else-if="canvasPixel && toolName == 'paintBrush'"
      :style="{ width: `${pixelSize}px`, height: `${pixelSize}px`, backgroundColor: `${color}`}"
      v-bind:class="{'partiallyVisible': active && !clicked, 'fullyInvisible': !active && !clicked, 'fullyVisible': clicked}"
      @mouseenter="!clicked ? active = !active : null"
      @mouseleave="!clicked ? active = !active : null"
      @mousemove="clicked = true"
    ></div>
    <div
      v-else-if="canvasPixel && toolName == 'fillBucket'"
      :style="{ width: `${pixelSize}px`, height: `${pixelSize}px`, backgroundColor: `${color}`}"
      v-bind:class="{'partiallyVisible': active && !clicked, 'fullyInvisible': !active && !clicked, 'fullyVisible': clicked}"
      @mouseenter="!clicked ? active = !active : null"
      @mouseleave="!clicked ? active = !active : null"
      @mousemove="clicked = true"
    ></div>
    <div
      v-else
      :style="{ width: `${pixelSize}px`, height: `${pixelSize}px`, backgroundColor: `${color}`}"
      class="fullyVisible"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Pixel",
  data() {
    return {
      active: false,
      clicked: false
    };
  },
  props: {
    pixelSize: { type: String }, // pixelSize === width (square pixel)
    color: { type: String, default: "white" },
    canvasPixel: { type: Boolean }, // indicates pixel is for the canvas only
    toolName: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
div {
  cursor: pointer;
  .fullyVisible {
    opacity: 1;
  }
  .partiallyVisible {
    opacity: 0.5;
  }
  .fullyInvisible {
    opacity: 0;
  }
}
</style>
