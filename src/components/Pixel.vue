<template>
  <div :style="{ width: `${height}px`, height: `${height}px` }"></div>
</template>

<script>
export default {
  name: "Pixel",
  props: {
    height: { type: String } // height === width (square pixel)
  }
};
</script>

<style scoped lang="scss">
div {
  &:hover {
    background-color: black;
  }
}
</style>
