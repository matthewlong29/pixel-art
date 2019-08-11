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
      colorName: "black"
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
  },
  mounted() {
    const themeOne = document.querySelector("#themeOne");
    const themeTwo = document.querySelector("#themeTwo");
    const themeThree = document.querySelector("#themeThree");
    const themeFour = document.querySelector("#themeFour");
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
    /**
     * selectThemeOne.
     */
    function selectThemeOne(event) {
      if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "one");
        localStorage.setItem("theme", "one");
      } else {
        document.documentElement.setAttribute("data-theme", "one");
        localStorage.setItem("theme", "one");
      }
    }
    /**
     * selectThemeTwo.
     */
    function selectThemeTwo(event) {
      if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "two");
        localStorage.setItem("theme", "two");
      } else {
        document.documentElement.setAttribute("data-theme", "two");
        localStorage.setItem("theme", "two");
      }
    }
    /**
     * selectThemeThree.
     */
    function selectThemeThree(event) {
      if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "three");
        localStorage.setItem("theme", "three");
      } else {
        document.documentElement.setAttribute("data-theme", "three");
        localStorage.setItem("theme", "three");
      }
    }
    /**
     * selectThemeFour.
     */
    function selectThemeFour(event) {
      if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "four");
        localStorage.setItem("theme", "four");
      } else {
        document.documentElement.setAttribute("data-theme", "four");
        localStorage.setItem("theme", "four");
      }
    }
    themeOne.addEventListener("change", selectThemeOne, false);
    themeTwo.addEventListener("change", selectThemeTwo, false);
    themeThree.addEventListener("change", selectThemeThree, false);
    themeFour.addEventListener("change", selectThemeFour, false);
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu:300|VT323&display=swap");

:root {
  --primaryOne: rgb(57, 65, 75);
  --primaryTwo: rgb(31, 35, 39);
  --accent: rgb(78, 204, 163);
  --primaryOneTransparent: rgba(57, 65, 75, 0.15);
  --primaryTwoTransparent: rgba(31, 35, 39, 0.15);
  --accentTransparent: rgba(78, 204, 163, 0.15);
}

[data-theme="one"] {
  --primaryOne: rgb(57, 65, 75);
  --primaryTwo: rgb(31, 35, 39);
  --accent: rgb(78, 204, 163);
  --primaryOneTransparent: rgba(57, 65, 75, 0.15);
  --primaryTwoTransparent: rgba(31, 35, 39, 0.15);
  --accentTransparent: rgba(78, 204, 163, 0.15);
}

[data-theme="two"] {
  --primaryOne: rgb(82, 82, 82);
  --primaryTwo: rgb(49, 49, 49);
  --accent: rgb(219, 80, 89);
  --primaryOneTransparent: rgba(82, 82, 82, 0.15);
  --primaryTwoTransparent: rgba(49, 49, 49, 0.15);
  --accentTransparent: rgba(219, 80, 89, 0.15);
}

[data-theme="three"] {
  --primaryOne: rgb(250, 245, 239);
  --primaryTwo: rgb(215, 209, 201);
  --accent: rgb(103, 47, 47);
  --primaryOneTransparent: rgba(250, 245, 239, 0.15);
  --primaryTwoTransparent: rgba(215, 209, 201, 0.15);
  --accentTransparent: rgba(103, 47, 47, 0.15);
}

[data-theme="four"] {
  --primaryOne: rgb(110, 33, 66);
  --primaryTwo: rgb(148, 56, 85);
  --accent: rgb(255, 214, 146);
  --primaryOneTransparent: rgba(110, 33, 66, 0.15);
  --primaryTwoTransparent: rgba(148, 56, 85, 0.15);
  --accentTransparent: rgba(255, 214, 146, 0.15);
}

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
