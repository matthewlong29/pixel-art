<template>
  <section>
    <div v-on:click="toggleTool()">
      <ToolHeader text="Color Palette" v-if="!expanded" icon="plus-square"/>
      <ToolHeader text="Color Palette" v-if="expanded" icon="minus-square"/>
    </div>
    <div v-if="expanded">
      <div class="chosen-color-container">
        <Pixel class="chosen-color-pixel pixel" height="68" color="blue"/>
        <Pixel class="chosen-color-pixel pixel" height="68" color="red"/>
      </div>
      <div class="column">
        <Pixel height="20" class="pixel" color="Pink"/>
        <Pixel height="20" class="pixel" color="LightPink"/>
        <Pixel height="20" class="pixel" color="HotPink"/>
        <Pixel height="20" class="pixel" color="DeepPink"/>
        <Pixel height="20" class="pixel" color="PaleVioletRed"/>
        <Pixel height="20" class="pixel" color="MediumVioletRed"/>
        <Pixel height="20" class="pixel" color="Lavender"/>
        <Pixel height="20" class="pixel" color="Thistle"/>
        <Pixel height="20" class="pixel" color="Plum"/>
        <Pixel height="20" class="pixel" color="Orchid"/>
        <Pixel height="20" class="pixel" color="Violet"/>
        <Pixel height="20" class="pixel" color="Fuchsia"/>
        <Pixel height="20" class="pixel" color="Magenta"/>
        <Pixel height="20" class="pixel" color="MediumOrchid"/>
        <Pixel height="20" class="pixel" color="DarkOrchid"/>
        <Pixel height="20" class="pixel" color="DarkViolet"/>
        <Pixel height="20" class="pixel" color="BlueViolet"/>
        <Pixel height="20" class="pixel" color="DarkMagenta"/>
        <Pixel height="20" class="pixel" color="Purple"/>
        <Pixel height="20" class="pixel" color="MediumPurple"/>
      </div>
      <div class="column">
        <Pixel height="20" class="pixel" color="MediumSlateBlue"/>
        <Pixel height="20" class="pixel" color="SlateBlue"/>
        <Pixel height="20" class="pixel" color="DarkSlateBlue"/>
        <Pixel height="20" class="pixel" color="RebeccaPurple"/>
        <Pixel height="20" class="pixel" color="Indigo"/>
        <Pixel height="20" class="pixel" color="LightSalmon"/>
        <Pixel height="20" class="pixel" color="Salmon"/>
        <Pixel height="20" class="pixel" color="DarkSalmon"/>
        <Pixel height="20" class="pixel" color="LightCoral"/>
        <Pixel height="20" class="pixel" color="IndianRed"/>
        <Pixel height="20" class="pixel" color="Crimson"/>
        <Pixel height="20" class="pixel" color="Red"/>
        <Pixel height="20" class="pixel" color="FireBrick"/>
        <Pixel height="20" class="pixel" color="DarkRed"/>
        <Pixel height="20" class="pixel" color="Orange"/>
        <Pixel height="20" class="pixel" color="DarkOrange"/>
        <Pixel height="20" class="pixel" color="Coral"/>
        <Pixel height="20" class="pixel" color="Tomato"/>
        <Pixel height="20" class="pixel" color="OrangeRed"/>
        <Pixel height="20" class="pixel" color="Gold"/>
      </div>

      <div class="column">
        <Pixel height="20" class="pixel" color="Yellow"/>
        <Pixel height="20" class="pixel" color="LightYellow"/>
        <Pixel height="20" class="pixel" color="LemonChiffon"/>
        <Pixel height="20" class="pixel" color="LightGoldenRodYellow"/>
        <Pixel height="20" class="pixel" color="PapayaWhip"/>
        <Pixel height="20" class="pixel" color="Moccasin"/>
        <Pixel height="20" class="pixel" color="PeachPuff"/>
        <Pixel height="20" class="pixel" color="PaleGoldenRod"/>
        <Pixel height="20" class="pixel" color="Khaki"/>
        <Pixel height="20" class="pixel" color="DarkKhaki"/>
        <Pixel height="20" class="pixel" color="GreenYellow"/>
        <Pixel height="20" class="pixel" color="Chartreuse"/>
        <Pixel height="20" class="pixel" color="LawnGreen"/>
        <Pixel height="20" class="pixel" color="Lime"/>
        <Pixel height="20" class="pixel" color="LimeGreen"/>
        <Pixel height="20" class="pixel" color="PaleGreen"/>
        <Pixel height="20" class="pixel" color="LightGreen"/>
        <Pixel height="20" class="pixel" color="MediumSpringGreen"/>
        <Pixel height="20" class="pixel" color="SpringGreen"/>
        <Pixel height="20" class="pixel" color="MediumSeaGreen"/>
      </div>
      <div class="column">
        <Pixel height="20" class="pixel" color="SeaGreen"/>
        <Pixel height="20" class="pixel" color="ForestGreen"/>
        <Pixel height="20" class="pixel" color="Green"/>
        <Pixel height="20" class="pixel" color="DarkGreen"/>
        <Pixel height="20" class="pixel" color="YellowGreen"/>
        <Pixel height="20" class="pixel" color="OliveDrab"/>
        <Pixel height="20" class="pixel" color="DarkOliveGreen"/>
        <Pixel height="20" class="pixel" color="MediumAquaMarine"/>
        <Pixel height="20" class="pixel" color="DarkSeaGreen"/>
        <Pixel height="20" class="pixel" color="LightSeaGreen"/>
        <Pixel height="20" class="pixel" color="DarkCyan"/>
        <Pixel height="20" class="pixel" color="Teal"/>
        <Pixel height="20" class="pixel" color="Aqua"/>
        <Pixel height="20" class="pixel" color="Cyan"/>
        <Pixel height="20" class="pixel" color="LightCyan"/>
        <Pixel height="20" class="pixel" color="PaleTurquoise"/>
        <Pixel height="20" class="pixel" color="Aquamarine"/>
        <Pixel height="20" class="pixel" color="Turquoise"/>
        <Pixel height="20" class="pixel" color="MediumTurquoise"/>
        <Pixel height="20" class="pixel" color="DarkTurquoise"/>
      </div>
      <div class="column">
        <Pixel height="20" class="pixel" color="CadetBlue"/>
        <Pixel height="20" class="pixel" color="SteelBlue"/>
        <Pixel height="20" class="pixel" color="LightSteelBlue"/>
        <Pixel height="20" class="pixel" color="LightBlue"/>
        <Pixel height="20" class="pixel" color="PowderBlue"/>
        <Pixel height="20" class="pixel" color="LightSkyBlue"/>
        <Pixel height="20" class="pixel" color="SkyBlue"/>
        <Pixel height="20" class="pixel" color="CornflowerBlue"/>
        <Pixel height="20" class="pixel" color="DeepSkyBlue"/>
        <Pixel height="20" class="pixel" color="DodgerBlue"/>
        <Pixel height="20" class="pixel" color="RoyalBlue"/>
        <Pixel height="20" class="pixel" color="Blue"/>
        <Pixel height="20" class="pixel" color="MediumBlue"/>
        <Pixel height="20" class="pixel" color="DarkBlue"/>
        <Pixel height="20" class="pixel" color="Navy"/>
        <Pixel height="20" class="pixel" color="MidnightBlue"/>
        <Pixel height="20" class="pixel" color="Cornsilk"/>
        <Pixel height="20" class="pixel" color="BlanchedAlmond"/>
        <Pixel height="20" class="pixel" color="Bisque"/>
        <Pixel height="20" class="pixel" color="NavajoWhite"/>
      </div>
      <div class="column">
        <Pixel height="20" class="pixel" color="Wheat"/>
        <Pixel height="20" class="pixel" color="BurlyWood"/>
        <Pixel height="20" class="pixel" color="Tan"/>
        <Pixel height="20" class="pixel" color="RosyBrown"/>
        <Pixel height="20" class="pixel" color="SandyBrown"/>
        <Pixel height="20" class="pixel" color="GoldenRod"/>
        <Pixel height="20" class="pixel" color="DarkGoldenRod"/>
        <Pixel height="20" class="pixel" color="Peru"/>
        <Pixel height="20" class="pixel" color="Chocolate"/>
        <Pixel height="20" class="pixel" color="Olive"/>
        <Pixel height="20" class="pixel" color="SaddleBrown"/>
        <Pixel height="20" class="pixel" color="Sienna"/>
        <Pixel height="20" class="pixel" color="Brown"/>
        <Pixel height="20" class="pixel" color="Maroon"/>
        <Pixel height="20" class="pixel" color="White"/>
        <Pixel height="20" class="pixel" color="HoneyDew"/>
        <Pixel height="20" class="pixel" color="MintCream"/>
        <Pixel height="20" class="pixel" color="Azure"/>
        <Pixel height="20" class="pixel" color="AliceBlue"/>
        <Pixel height="20" class="pixel" color="GhostWhite"/>
      </div>
      <div class="column">
        <Pixel height="20" class="pixel" color="WhiteSmoke"/>
        <Pixel height="20" class="pixel" color="SeaShell"/>
        <Pixel height="20" class="pixel" color="Beige"/>
        <Pixel height="20" class="pixel" color="OldLace"/>
        <Pixel height="20" class="pixel" color="FloralWhite"/>
        <Pixel height="20" class="pixel" color="Ivory"/>
        <Pixel height="20" class="pixel" color="AntiqueWhite"/>
        <Pixel height="20" class="pixel" color="Linen"/>
        <Pixel height="20" class="pixel" color="LavenderBlush"/>
        <Pixel height="20" class="pixel" color="MistyRose"/>
        <Pixel height="20" class="pixel" color="Gainsboro"/>
        <Pixel height="20" class="pixel" color="LightGray"/>
        <Pixel height="20" class="pixel" color="Silver"/>
        <Pixel height="20" class="pixel" color="DarkGray"/>
        <Pixel height="20" class="pixel" color="DimGray"/>
        <Pixel height="20" class="pixel" color="Gray"/>
        <Pixel height="20" class="pixel" color="LightSlateGray"/>
        <Pixel height="20" class="pixel" color="SlateGray"/>
        <Pixel height="20" class="pixel" color="DarkSlateGray"/>
        <Pixel height="20" class="pixel" color="Black"/>
      </div>
    </div>
  </section>
</template>

<script>
import Pixel from "@/components/Pixel";
import ToolHeader from "@/components/partials/ToolHeader.vue";

export default {
  name: "ColorPalette",
  components: {
    Pixel,
    ToolHeader
  },
  data() {
    return {
      expanded: false
    };
  },
  methods: {
    toggleTool() {
      this.expanded = !this.expanded;
      console.log(this.expanded === true ? "expanded" : "not expanded");
    }
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
  .chosen-color-container {
    display: flex;
    .chosen-color-pixel {
      margin-bottom: 2px;
      border: 4px solid black;
      width: 68px;
      &:first-of-type {
        margin-right: 2px;
      }
    }
  }
}
</style>
