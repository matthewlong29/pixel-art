<template>
  <div>
    <div
      :style="{ width: `${height}px`, height: `${height}px`, backgroundColor: `${color}`}"
      v-bind:class="{'partiallyVisible': active && !clicked, 'fullyInvisible': !active && !clicked, 'fullyVisible': clicked}"
      @mouseenter="!clicked ? active = !active : null"
      @mouseleave="!clicked ? active = !active : null"
      @mousedown="clicked = true"
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
    height: { type: String }, // height === width (square pixel)
    color: { type: String }
  }
};
</script>

<style scoped lang="scss">
div {
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
