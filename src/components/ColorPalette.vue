<template>
  <section>
    <div v-on:click="toggleTool()">
      <ToolHeader text="Color Palette" v-if="!expanded" icon="plus-square"/>
      <ToolHeader text="Color Palette" v-if="expanded" icon="minus-square"/>
    </div>
    <div v-if="expanded">
      <div class="chosen-color-container">
        <Pixel
          class="chosen-color-pixel pixel"
          height="68"
          color="black"
          v-on:click.native="setColor('black')"
        />
        <Pixel
          class="chosen-color-pixel pixel"
          height="68"
          color="white"
          v-on:click.native="setColor('white')"
        />
      </div>
      <div class="column">
        <Pixel height="20" class="pixel" color="Pink" v-on:click.native="setColor('Pink')"/>
        <Pixel height="20" class="pixel" color="LightPink" v-on:click.native="setColor('LightPink')"/>
        <Pixel height="20" class="pixel" color="HotPink" v-on:click.native="setColor('HotPink')"/>
        <Pixel height="20" class="pixel" color="DeepPink" v-on:click.native="setColor('DeepPink')"/>
        <Pixel
          height="20"
          class="pixel"
          color="PaleVioletRed"
          v-on:click.native="setColor('PaleVioletRed')"
        />
        <Pixel
          height="20"
          class="pixel"
          color="MediumVioletRed"
          v-on:click.native="setColor('MediumVioletRed')"
        />
        <Pixel height="20" class="pixel" color="Lavender" v-on:click.native="setColor('Lavender')"/>
        <Pixel height="20" class="pixel" color="Thistle" v-on:click.native="setColor('Thistle')"/>
        <Pixel height="20" class="pixel" color="Plum" v-on:click.native="setColor('Plum')"/>
        <Pixel height="20" class="pixel" color="Orchid" v-on:click.native="setColor('Orchid')"/>
        <Pixel height="20" class="pixel" color="Violet" v-on:click.native="setColor('Violet')"/>
        <Pixel height="20" class="pixel" color="Fuchsia" v-on:click.native="setColor('Fuchsia')"/>
        <Pixel height="20" class="pixel" color="Magenta" v-on:click.native="setColor('Magenta')"/>
        <Pixel
          height="20"
          class="pixel"
          color="MediumOrchid"
          v-on:click.native="setColor('MediumOrchid')"
        />
        <Pixel height="20" class="pixel" color="DarkOrchid" v-on:click.native="setColor('DarkOrchid')"/>
        <Pixel height="20" class="pixel" color="DarkViolet" v-on:click.native="setColor('DarkViolet')"/>
        <Pixel height="20" class="pixel" color="BlueViolet" v-on:click.native="setColor('BlueViolet')"/>
        <Pixel height="20" class="pixel" color="DarkMagenta" v-on:click.native="setColor('DarkMagenta')"/>
        <Pixel height="20" class="pixel" color="Purple" v-on:click.native="setColor('Purple')"/>
        <Pixel
          height="20"
          class="pixel"
          color="MediumPurple"
          v-on:click.native="setColor('MediumPurple')"
        />
      </div>
      <div class="column">
        <Pixel
          height="20"
          class="pixel"
          color="MediumSlateBlue"
          v-on:click.native="setColor('MediumSlateBlue')"
        />
        <Pixel height="20" class="pixel" color="SlateBlue" v-on:click.native="setColor('SlateBlue')"/>
        <Pixel
          height="20"
          class="pixel"
          color="DarkSlateBlue"
          v-on:click.native="setColor('DarkSlateBlue')"
        />
        <Pixel
          height="20"
          class="pixel"
          color="RebeccaPurple"
          v-on:click.native="setColor('RebeccaPurple')"
        />
        <Pixel height="20" class="pixel" color="Indigo" v-on:click.native="setColor('Indigo')"/>
        <Pixel height="20" class="pixel" color="LightSalmon" v-on:click.native="setColor('LightSalmon')"/>
        <Pixel height="20" class="pixel" color="Salmon" v-on:click.native="setColor('Salmon')"/>
        <Pixel height="20" class="pixel" color="DarkSalmon" v-on:click.native="setColor('DarkSalmon')"/>
        <Pixel height="20" class="pixel" color="LightCoral" v-on:click.native="setColor('LightCoral')"/>
        <Pixel height="20" class="pixel" color="IndianRed" v-on:click.native="setColor('IndianRed')"/>
        <Pixel height="20" class="pixel" color="Crimson" v-on:click.native="setColor('Crimson')"/>
        <Pixel height="20" class="pixel" color="Red" v-on:click.native="setColor('Red')"/>
        <Pixel height="20" class="pixel" color="FireBrick" v-on:click.native="setColor('FireBrick')"/>
        <Pixel height="20" class="pixel" color="DarkRed" v-on:click.native="setColor('DarkRed')"/>
        <Pixel height="20" class="pixel" color="Orange" v-on:click.native="setColor('Orange')"/>
        <Pixel height="20" class="pixel" color="DarkOrange" v-on:click.native="setColor('DarkOrange')"/>
        <Pixel height="20" class="pixel" color="Coral" v-on:click.native="setColor('Coral')"/>
        <Pixel height="20" class="pixel" color="Tomato" v-on:click.native="setColor('Tomato')"/>
        <Pixel height="20" class="pixel" color="OrangeRed" v-on:click.native="setColor('OrangeRed')"/>
        <Pixel height="20" class="pixel" color="Gold" v-on:click.native="setColor('Gold')"/>
      </div>

      <div class="column">
        <Pixel height="20" class="pixel" color="Yellow" v-on:click.native="setColor('Yellow')"/>
        <Pixel height="20" class="pixel" color="LightYellow" v-on:click.native="setColor('LightYellow')"/>
        <Pixel
          height="20"
          class="pixel"
          color="LemonChiffon"
          v-on:click.native="setColor('LemonChiffon')"
        />
        <Pixel
          height="20"
          class="pixel"
          color="LightGoldenRodYellow"
          v-on:click.native="setColor('LightGoldenRodYellow')"
        />
        <Pixel height="20" class="pixel" color="PapayaWhip" v-on:click.native="setColor('PapayaWhip')"/>
        <Pixel height="20" class="pixel" color="Moccasin" v-on:click.native="setColor('Moccasin')"/>
        <Pixel height="20" class="pixel" color="PeachPuff" v-on:click.native="setColor('PeachPuff')"/>
        <Pixel
          height="20"
          class="pixel"
          color="PaleGoldenRod"
          v-on:click.native="setColor('PaleGoldenRod')"
        />
        <Pixel height="20" class="pixel" color="Khaki" v-on:click.native="setColor('Khaki')"/>
        <Pixel height="20" class="pixel" color="DarkKhaki" v-on:click.native="setColor('DarkKhaki')"/>
        <Pixel height="20" class="pixel" color="GreenYellow" v-on:click.native="setColor('GreenYellow')"/>
        <Pixel height="20" class="pixel" color="Chartreuse" v-on:click.native="setColor('Chartreuse')"/>
        <Pixel height="20" class="pixel" color="LawnGreen" v-on:click.native="setColor('LawnGreen')"/>
        <Pixel height="20" class="pixel" color="Lime" v-on:click.native="setColor('Lime')"/>
        <Pixel height="20" class="pixel" color="LimeGreen" v-on:click.native="setColor('LimeGreen')"/>
        <Pixel height="20" class="pixel" color="PaleGreen" v-on:click.native="setColor('PaleGreen')"/>
        <Pixel height="20" class="pixel" color="LightGreen" v-on:click.native="setColor('LightGreen')"/>
        <Pixel
          height="20"
          class="pixel"
          color="MediumSpringGreen"
          v-on:click.native="setColor('MediumSpringGreen')"
        />
        <Pixel height="20" class="pixel" color="SpringGreen" v-on:click.native="setColor('SpringGreen')"/>
        <Pixel
          height="20"
          class="pixel"
          color="MediumSeaGreen"
          v-on:click.native="setColor('MediumSeaGreen')"
        />
      </div>
      <div class="column">
        <Pixel height="20" class="pixel" color="SeaGreen" v-on:click.native="setColor('SeaGreen')"/>
        <Pixel height="20" class="pixel" color="ForestGreen" v-on:click.native="setColor('ForestGreen')"/>
        <Pixel height="20" class="pixel" color="Green" v-on:click.native="setColor('Green')"/>
        <Pixel height="20" class="pixel" color="DarkGreen" v-on:click.native="setColor('DarkGreen')"/>
        <Pixel height="20" class="pixel" color="YellowGreen" v-on:click.native="setColor('YellowGreen')"/>
        <Pixel height="20" class="pixel" color="OliveDrab" v-on:click.native="setColor('OliveDrab')"/>
        <Pixel
          height="20"
          class="pixel"
          color="DarkOliveGreen"
          v-on:click.native="setColor('DarkOliveGreen')"
        />
        <Pixel
          height="20"
          class="pixel"
          color="MediumAquaMarine"
          v-on:click.native="setColor('MediumAquaMarine')"
        />
        <Pixel
          height="20"
          class="pixel"
          color="DarkSeaGreen"
          v-on:click.native="setColor('DarkSeaGreen')"
        />
        <Pixel
          height="20"
          class="pixel"
          color="LightSeaGreen"
          v-on:click.native="setColor('LightSeaGreen')"
        />
        <Pixel height="20" class="pixel" color="DarkCyan" v-on:click.native="setColor('DarkCyan')"/>
        <Pixel height="20" class="pixel" color="Teal" v-on:click.native="setColor('Teal')"/>
        <Pixel height="20" class="pixel" color="Aqua" v-on:click.native="setColor('Aqua')"/>
        <Pixel height="20" class="pixel" color="Cyan" v-on:click.native="setColor('Cyan')"/>
        <Pixel height="20" class="pixel" color="LightCyan" v-on:click.native="setColor('LightCyan')"/>
        <Pixel
          height="20"
          class="pixel"
          color="PaleTurquoise"
          v-on:click.native="setColor('PaleTurquoise')"
        />
        <Pixel height="20" class="pixel" color="Aquamarine" v-on:click.native="setColor('Aquamarine')"/>
        <Pixel height="20" class="pixel" color="Turquoise" v-on:click.native="setColor('Turquoise')"/>
        <Pixel
          height="20"
          class="pixel"
          color="MediumTurquoise"
          v-on:click.native="setColor('MediumTurquoise')"
        />
        <Pixel
          height="20"
          class="pixel"
          color="DarkTurquoise"
          v-on:click.native="setColor('DarkTurquoise')"
        />
      </div>
      <div class="column">
        <Pixel height="20" class="pixel" color="CadetBlue" v-on:click.native="setColor('CadetBlue')"/>
        <Pixel height="20" class="pixel" color="SteelBlue" v-on:click.native="setColor('SteelBlue')"/>
        <Pixel
          height="20"
          class="pixel"
          color="LightSteelBlue"
          v-on:click.native="setColor('LightSteelBlue')"
        />
        <Pixel height="20" class="pixel" color="LightBlue" v-on:click.native="setColor('LightBlue')"/>
        <Pixel height="20" class="pixel" color="PowderBlue" v-on:click.native="setColor('PowderBlue')"/>
        <Pixel
          height="20"
          class="pixel"
          color="LightSkyBlue"
          v-on:click.native="setColor('LightSkyBlue')"
        />
        <Pixel height="20" class="pixel" color="SkyBlue" v-on:click.native="setColor('SkyBlue')"/>
        <Pixel
          height="20"
          class="pixel"
          color="CornflowerBlue"
          v-on:click.native="setColor('CornflowerBlue')"
        />
        <Pixel height="20" class="pixel" color="DeepSkyBlue" v-on:click.native="setColor('DeepSkyBlue')"/>
        <Pixel height="20" class="pixel" color="DodgerBlue" v-on:click.native="setColor('DodgerBlue')"/>
        <Pixel height="20" class="pixel" color="RoyalBlue" v-on:click.native="setColor('RoyalBlue')"/>
        <Pixel height="20" class="pixel" color="Blue" v-on:click.native="setColor('Blue')"/>
        <Pixel height="20" class="pixel" color="MediumBlue" v-on:click.native="setColor('MediumBlue')"/>
        <Pixel height="20" class="pixel" color="DarkBlue" v-on:click.native="setColor('DarkBlue')"/>
        <Pixel height="20" class="pixel" color="Navy" v-on:click.native="setColor('Navy')"/>
        <Pixel
          height="20"
          class="pixel"
          color="MidnightBlue"
          v-on:click.native="setColor('MidnightBlue')"
        />
        <Pixel height="20" class="pixel" color="Cornsilk" v-on:click.native="setColor('Cornsilk')"/>
        <Pixel
          height="20"
          class="pixel"
          color="BlanchedAlmond"
          v-on:click.native="setColor('BlanchedAlmond')"
        />
        <Pixel height="20" class="pixel" color="Bisque" v-on:click.native="setColor('Bisque')"/>
        <Pixel height="20" class="pixel" color="NavajoWhite" v-on:click.native="setColor('NavajoWhite')"/>
      </div>
      <div class="column">
        <Pixel height="20" class="pixel" color="Wheat" v-on:click.native="setColor('Wheat')"/>
        <Pixel height="20" class="pixel" color="BurlyWood" v-on:click.native="setColor('BurlyWood')"/>
        <Pixel height="20" class="pixel" color="Tan" v-on:click.native="setColor('Tan')"/>
        <Pixel height="20" class="pixel" color="RosyBrown" v-on:click.native="setColor('RosyBrown')"/>
        <Pixel height="20" class="pixel" color="SandyBrown" v-on:click.native="setColor('SandyBrown')"/>
        <Pixel height="20" class="pixel" color="GoldenRod" v-on:click.native="setColor('GoldenRod')"/>
        <Pixel
          height="20"
          class="pixel"
          color="DarkGoldenRod"
          v-on:click.native="setColor('DarkGoldenRod')"
        />
        <Pixel height="20" class="pixel" color="Peru" v-on:click.native="setColor('Peru')"/>
        <Pixel height="20" class="pixel" color="Chocolate" v-on:click.native="setColor('Chocolate')"/>
        <Pixel height="20" class="pixel" color="Olive" v-on:click.native="setColor('Olive')"/>
        <Pixel height="20" class="pixel" color="SaddleBrown" v-on:click.native="setColor('SaddleBrown')"/>
        <Pixel height="20" class="pixel" color="Sienna" v-on:click.native="setColor('Sienna')"/>
        <Pixel height="20" class="pixel" color="Brown" v-on:click.native="setColor('Brown')"/>
        <Pixel height="20" class="pixel" color="Maroon" v-on:click.native="setColor('Maroon')"/>
        <Pixel height="20" class="pixel" color="White" v-on:click.native="setColor('White')"/>
        <Pixel height="20" class="pixel" color="HoneyDew" v-on:click.native="setColor('HoneyDew')"/>
        <Pixel height="20" class="pixel" color="MintCream" v-on:click.native="setColor('MintCream')"/>
        <Pixel height="20" class="pixel" color="Azure" v-on:click.native="setColor('Azure')"/>
        <Pixel height="20" class="pixel" color="AliceBlue" v-on:click.native="setColor('AliceBlue')"/>
        <Pixel height="20" class="pixel" color="GhostWhite" v-on:click.native="setColor('GhostWhite')"/>
      </div>
      <div class="column">
        <Pixel height="20" class="pixel" color="WhiteSmoke" v-on:click.native="setColor('WhiteSmoke')"/>
        <Pixel height="20" class="pixel" color="SeaShell" v-on:click.native="setColor('SeaShell')"/>
        <Pixel height="20" class="pixel" color="Beige" v-on:click.native="setColor('Beige')"/>
        <Pixel height="20" class="pixel" color="OldLace" v-on:click.native="setColor('OldLace')"/>
        <Pixel height="20" class="pixel" color="FloralWhite" v-on:click.native="setColor('FloralWhite')"/>
        <Pixel height="20" class="pixel" color="Ivory" v-on:click.native="setColor('Ivory')"/>
        <Pixel
          height="20"
          class="pixel"
          color="AntiqueWhite"
          v-on:click.native="setColor('AntiqueWhite')"
        />
        <Pixel height="20" class="pixel" color="Linen" v-on:click.native="setColor('Linen')"/>
        <Pixel
          height="20"
          class="pixel"
          color="LavenderBlush"
          v-on:click.native="setColor('LavenderBlush')"
        />
        <Pixel height="20" class="pixel" color="MistyRose" v-on:click.native="setColor('MistyRose')"/>
        <Pixel height="20" class="pixel" color="Gainsboro" v-on:click.native="setColor('Gainsboro')"/>
        <Pixel height="20" class="pixel" color="LightGray" v-on:click.native="setColor('LightGray')"/>
        <Pixel height="20" class="pixel" color="Silver" v-on:click.native="setColor('Silver')"/>
        <Pixel height="20" class="pixel" color="DarkGray" v-on:click.native="setColor('DarkGray')"/>
        <Pixel height="20" class="pixel" color="DimGray" v-on:click.native="setColor('DimGray')"/>
        <Pixel height="20" class="pixel" color="Gray" v-on:click.native="setColor('Gray')"/>
        <Pixel
          height="20"
          class="pixel"
          color="LightSlateGray"
          v-on:click.native="setColor('LightSlateGray')"
        />
        <Pixel height="20" class="pixel" color="SlateGray" v-on:click.native="setColor('SlateGray')"/>
        <Pixel
          height="20"
          class="pixel"
          color="DarkSlateGray"
          v-on:click.native="setColor('DarkSlateGray')"
        />
        <Pixel height="20" class="pixel" color="Black" v-on:click.native="setColor('Black')"/>
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
      expanded: false,
      colorName: "white"
    };
  },
  methods: {
    toggleTool() {
      this.expanded = !this.expanded;
      console.log(this.expanded === true ? "expanded" : "not expanded");
    },
    setColor(colorName) {
      this.colorName = colorName;
      this.$emit("clicked", this.colorName);
      console.log(`color set to ${this.colorName}`);
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
