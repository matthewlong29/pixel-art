<template>
  <section>
    <div v-for="pixels in columns" v-bind:key="pixels.id" class="column">
      <Pixel
        v-for="pixel in columns"
        v-bind:key="pixel.id"
        :pixelSize="pixelSize"
        class="pixel"
        :color="currentColor"
        :canvasPixel="true"
      />
    </div>
  </section>
</template>

<script>
import Pixel from "@/components/atoms/Pixel";

export default {
  name: "Canvas",
  components: {
    Pixel
  },
  props: {
    columns: { type: Number }, // rows === columns (square canvas)
    currentColor: { type: String },
    pixelSize: { type: String } // width === height (square pixel)
  }
};
</script>

<style lang="scss" scoped>
section {
  .column {
    display: inline-block;
    .pixel {
      border: 1px solid var(--fontColor);
    }
  }
}
</style>
