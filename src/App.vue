<template>
  <div id="app">
    <main>
      <h1>Pixel Art! Best art.. ¯\_(ツ)_/¯</h1>
      <div class="canvas-container">
        <Canvas :columns="gridSize" :pixelSize="pixelSize" :currentColor="colorName" />
      </div>
    </main>
    <aside>
      <div class="toolbar-container">
        <ThemeSelector class="theme-color" />
        <CanvasSizeSlider @inputData="updateGridSize" class="canvas-size" />
        <PixelSizeSlider @inputData="updatePixelSize" class="pixel-size" />
        <ColorPalette @clicked="updateColor" class="color-palette" />
        <DownloadArt class="download-art" />
      </div>
    </aside>
  </div>
</template>

<script>
import Canvas from "@/components/organisms/Canvas.vue";
import ThemeSelector from "@/components/molecules/ThemeSelector.vue";
import CanvasSizeSlider from "@/components/molecules/CanvasSizeSlider.vue";
import PixelSizeSlider from "@/components/molecules/PixelSizeSlider.vue";
import ColorPalette from "@/components/molecules/ColorPalette.vue";
import DownloadArt from "@/components/molecules/DownloadArt.vue";

export default {
  data() {
    return {
      gridSize: 25,
      pixelSize: "25",
      colorName: "blue"
    };
  },
  components: {
    Canvas,
    ThemeSelector,
    CanvasSizeSlider,
    ColorPalette,
    PixelSizeSlider,
    DownloadArt
  },
  methods: {
    /**
     * updatePixelSize.
     */
    updatePixelSize(val) {
      this.pixelSize = val;
    },
    /**
     * updateGridSize.
     */
    updateGridSize(val) {
      this.gridSize = parseInt(val);
    },
    /**
     * updateColor.
     */
    updateColor(val) {
      this.colorName = val;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu:300|VT323&display=swap");

html,
body {
  font-family: "Ubuntu", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "VT323", monospace;
}

%common-panel-styles {
  border: 2px solid black;
  box-shadow: 2px 2px 4px black;
}

#app {
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  main {
    margin: 16px;
    position: absolute;
    left: 0;
    top: 0;
    .canvas-container {
      @extend %common-panel-styles;
      display: inline-block;
      padding: 16px;
    }
    h1 {
      margin: 0 0 16px 0;
    }
  }
  aside {
    position: fixed;
    margin: 16px;
    right: 0;
    top: 0;
    bottom: 0;
    .toolbar-container {
      @extend %common-panel-styles;
      width: 186px;
      min-height: calc(100% - 4px);
      .theme-color,
      .canvas-size,
      .pixel-size,
      .color-palette,
      .download-art {
        border-bottom: 2px solid black;
        &:hover {
          box-shadow: 2px 2px 9px 2px
            transparentize($color: black, $amount: 0.5);
        }
      }
    }
  }
}
</style>
