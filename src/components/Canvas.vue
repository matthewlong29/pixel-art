<template>
  <section>
    <div v-for="pixels in rows" v-bind:key="pixels.id" class="row">
      <Pixel v-for="pixel in rows" v-bind:key="pixel.id" height="20" class="pixel"/>
    </div>
  </section>
</template>

<script>
import Pixel from "@/components/Pixel";

export default {
  name: "Canvas",
  components: {
    Pixel
  },
  props: {
    rows: { type: Number } // rows === columns (square canvas)
  }
};
</script>

<style lang="scss" scoped>
section {
  .row {
    display: flex;
    .pixel {
      border: 1px solid black;
    }
  }
}
</style>
