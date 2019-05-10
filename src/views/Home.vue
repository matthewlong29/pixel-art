<template>
  <div class="home">
    <Pixel msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Pixel from '@/components/Pixel.vue'

export default {
  name: 'home',
  components: {
    Pixel
  }
}
</script>
