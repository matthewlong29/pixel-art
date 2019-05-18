<template>
  <section>
    <Pixel height="20" class="pixel"/>
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
.pixel {
  border: 1px solid black;
}
</style>
