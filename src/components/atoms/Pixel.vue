<template>
  <div>
    <div
      v-if="canvasPixel && toolName == 'pencil'"
      :style="{ width: `${pixelSize}px`, height: `${pixelSize}px`, backgroundColor: `${savedColor}`}"
      v-bind:class="{'partiallyVisible': active && !clicked, 'fullyInvisible': !active && !clicked, 'fullyVisible': clicked}"
      @mouseenter="!clicked ? active = !active : null"
      @mouseleave="!clicked ? active = !active : null"
      @mousedown="clicked = true; savedColor = color"
    ></div>
    <div
      v-else-if="canvasPixel && toolName == 'paintBrush'"
      :style="{ width: `${pixelSize}px`, height: `${pixelSize}px`, backgroundColor: `${savedColor}`}"
      v-bind:class="{'partiallyVisible': active && !clicked, 'fullyInvisible': !active && !clicked, 'fullyVisible': clicked}"
      @mouseenter="paint"
      @mouseleave="!clicked ? active = false : null"
      @mousedown="clicked = true; savedColor = color"
    ></div>
    <div
      v-else-if="canvasPixel && toolName == 'fill'"
      :style="{ width: `${pixelSize}px`, height: `${pixelSize}px`, backgroundColor: `${savedColor}`}"
      v-bind:class="{'partiallyVisible': active && !clicked, 'fullyInvisible': !active && !clicked, 'fullyVisible': clicked}"
      @mouseenter="!clicked ? active = !active : null"
      @mouseleave="!clicked ? active = !active : null"
      @mousemove="clicked = true; savedColor = color"
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
      clicked: false,
      savedColor: this.color
    };
  },
  props: {
    pixelSize: { type: String }, // pixelSize === width (square pixel)
    color: { type: String, default: "white" },
    canvasPixel: { type: Boolean }, // indicates pixel is for the canvas only
    toolName: {
      type: String
    }
  },
  watch: {
    color: function (newColor) {
      if (!this.clicked) {
        this.savedColor = newColor;
      }
    }
  },
  methods: {
    paint: function (evt) {
      this.active = true;
      if (evt.buttons === 1) {
        this.clicked = true;
      }
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
