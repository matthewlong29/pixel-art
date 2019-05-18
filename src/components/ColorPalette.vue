<template>
  <section>
    <div class="left-column">
      <Pixel height="20" class="pixel" color="blue"/>
      <Pixel height="20" class="pixel" color="blueviolet"/>
      <Pixel height="20" class="pixel" color="chocolate"/>
      <Pixel height="20" class="pixel" color="cornflowerblue"/>
      <Pixel height="20" class="pixel" color="crimson"/>
      <Pixel height="20" class="pixel" color="darkorchid"/>
      <Pixel height="20" class="pixel" color="dodgerblue"/>
      <Pixel height="20" class="pixel" color="firebrick"/>
      <Pixel height="20" class="pixel" color="forestgreen"/>
      <Pixel height="20" class="pixel" color="fuchsia"/>
    </div>
    <div class="middle-column">
      <Pixel height="20" class="pixel" color="gold"/>
      <Pixel height="20" class="pixel" color="green"/>
      <Pixel height="20" class="pixel" color="greenyellow"/>
      <Pixel height="20" class="pixel" color="hotpink"/>
      <Pixel height="20" class="pixel" color="indigo"/>
      <Pixel height="20" class="pixel" color="khaki"/>
      <Pixel height="20" class="pixel" color="lawngreen"/>
      <Pixel height="20" class="pixel" color="lightgreen"/>
      <Pixel height="20" class="pixel" color="lime"/>
      <Pixel height="20" class="pixel" color="maroon"/>
    </div>
    <div class="right-column">
      <Pixel height="20" class="pixel" color="navy"/>
      <Pixel height="20" class="pixel" color="olive"/>
      <Pixel height="20" class="pixel" color="orange"/>
      <Pixel height="20" class="pixel" color="orangered"/>
      <Pixel height="20" class="pixel" color="plum"/>
      <Pixel height="20" class="pixel" color="rosybrown"/>
      <Pixel height="20" class="pixel" color="salmon"/>
      <Pixel height="20" class="pixel" color="springgreen"/>
      <Pixel height="20" class="pixel" color="steelblue"/>
      <Pixel height="20" class="pixel" color="tomato"/>
    </div>
  </section>
</template>

<script>
import Pixel from "@/components/Pixel";

export default {
  name: "ColorPalette",
  components: {
    Pixel
  }
};
</script>

<style lang="scss" scoped>
section {
  div {
    &.left-column,
    &.middle-column,
    &.right-column {
      display: inline-block;
      .pixel {
        border: 1px solid black;
      }
    }
  }
}
</style>
