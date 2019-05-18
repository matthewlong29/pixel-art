<template>
  <section>
    <div v-for="pixels in columns" v-bind:key="pixels.id" class="column">
      <Pixel
        v-for="pixel in columns"
        v-bind:key="pixel.id"
        height="20"
        class="pixel"
        color="black"
      />
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
    columns: { type: Number } // rows === columns (square canvas)
  }
};
</script>

<style lang="scss" scoped>
section {
  .column {
    display: inline-block;
    .pixel {
      border: 1px solid black;
    }
  }
}
</style>
