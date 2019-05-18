<template>
  <div>
    <div
      :style="{ width: `${height}px`, height: `${height}px`, backgroundColor: `${color}`}"
      v-bind:class="{'partiallyVisible': active, 'fullyInvisible': !active}"
      @mouseenter="active = !active"
      @mouseleave="active = !active"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Pixel",
  data() {
    return {
      active: false
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
