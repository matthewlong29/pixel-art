<template>
  <div id="app">
    <main>
      <h1>
        Pixel Art! Best art..
        <span>¯\_(ツ)_/¯</span>
      </h1>
      <div class="canvas-container">
        <Canvas :columns="gridSize" :pixelSize="pixelSize" :currentColor="colorName" />
      </div>
    </main>
    <aside>
      <div class="toolbar-container">
        <ThemeSelector class="theme-color" />
        <CanvasSizeSlider @inputData="updateGridSize" class="canvas-size" />
        <PixelSizeSlider @inputData="updatePixelSize" class="pixel-size" />
        <BrushSelector class="brush-selector" />
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
import BrushSelector from "@/components/molecules/BrushSelector.vue";

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
    BrushSelector,
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
  --backgroundOne: rgb(57, 65, 75);
  --backgroundTwo: rgb(31, 35, 39);
  --fontColor: rgb(253, 253, 253);
  --accent: rgb(78, 204, 163);
  --backgroundOneTransparent: rgba(57, 65, 75, 0.15);
  --backgroundTwoTransparent: rgba(31, 35, 39, 0.15);
  --fontColorTransparent: rgb(253, 253, 253, 0.35);
  --accentTransparent: rgba(78, 204, 163, 0.15);
}

[data-theme="one"] {
  --backgroundOne: rgb(57, 65, 75);
  --backgroundTwo: rgb(31, 35, 39);
  --fontColor: rgb(253, 253, 253);
  --accent: rgb(78, 204, 163);
  --backgroundOneTransparent: rgba(57, 65, 75, 0.15);
  --backgroundTwoTransparent: rgba(31, 35, 39, 0.15);
  --fontColorTransparent: rgb(253, 253, 253, 0.35);
  --accentTransparent: rgba(78, 204, 163, 0.15);
}

[data-theme="two"] {
  --backgroundOne: rgb(82, 82, 82);
  --backgroundTwo: rgb(49, 49, 49);
  --fontColor: rgb(231, 228, 228);
  --accent: rgb(219, 80, 89);
  --backgroundOneTransparent: rgba(82, 82, 82, 0.15);
  --backgroundTwoTransparent: rgba(49, 49, 49, 0.15);
  --fontColorTransparent: rgb(231, 228, 228, 0.35);
  --accentTransparent: rgba(219, 80, 89, 0.15);
}

[data-theme="three"] {
  --backgroundOne: rgb(250, 245, 239);
  --backgroundTwo: rgb(215, 209, 201);
  --fontColor: rgb(29, 29, 29);
  --accent: rgb(103, 47, 47);
  --backgroundOneTransparent: rgba(250, 245, 239, 0.15);
  --backgroundTwoTransparent: rgba(215, 209, 201, 0.15);
  --fontColorTransparent: rgb(29, 29, 29, 0.35);
  --accentTransparent: rgba(103, 47, 47, 0.15);
}

[data-theme="four"] {
  --backgroundOne: rgb(4, 47, 75);
  --backgroundTwo: rgb(251, 201, 157);
  --fontColor: rgb(231, 228, 228);
  --accent: rgb(237, 18, 80);
  --backgroundOneTransparent: rgba(4, 47, 75, 0.15);
  --backgroundTwoTransparent: rgba(251, 201, 157, 0.15);
  --fontColorTransparent: rgba(231, 228, 228, 0.35);
  --accentTransparent: rgba(237, 18, 80, 0.15);
}

html,
body {
  font-family: "Ubuntu", sans-serif;
  background-color: var(--backgroundOne);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "VT323", monospace;
  color: var(--fontColor);
}

p,
a,
span {
  font-family: "Ubuntu", sans-serif;
  color: var(--fontColor);
}

%common-panel-styles {
  border: 2px solid var(--fontColor);
  box-shadow: 2px 2px 4px var(--fontColorTransparent);
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
      span {
        color: var(--accent);
      }
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
      .brush-selector,
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
