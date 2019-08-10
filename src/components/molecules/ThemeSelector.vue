<template>
  <section>
    <div class="menu-button" v-on:click="toggleTool()">
      <ToolHeader text="Theme" v-if="!expanded" icon="plus-square" />
      <ToolHeader text="Theme" v-if="expanded" icon="minus-square" />
    </div>
    <div class="menu-content" v-if="expanded">
      <div class="theme-option">
        <label for="themeOne">
          <input
            type="radio"
            id="themeOne"
            v-model="theme"
            value="themeOne"
            @change="submitChosenTheme()"
          />
          <div style="background: #39414b"></div>
          <div style="background: #1f2327"></div>
          <div style="background: #4ecca3"></div>
        </label>
      </div>
      <div class="theme-option">
        <label for="themeTwo">
          <input
            type="radio"
            id="themeTwo"
            v-model="theme"
            value="themeTwo"
            @change="submitChosenTheme()"
          />
          <div style="background: #525252"></div>
          <div style="background: #313131"></div>
          <div style="background: #db5059"></div>
        </label>
      </div>
      <div class="theme-option">
        <label for="themeThree">
          <input
            type="radio"
            id="themeThree"
            v-model="theme"
            value="themeThree"
            @change="submitChosenTheme()"
          />
          <div style="background: #faf5ef"></div>
          <div style="background: #d7d1c9"></div>
          <div style="background: #672f2f"></div>
        </label>
      </div>
      <div class="theme-option">
        <label for="themeFour">
          <input
            type="radio"
            id="themeFour"
            v-model="theme"
            value="themeFour"
            @change="submitChosenTheme()"
          />
          <div style="background: #6e2142"></div>
          <div style="background: #943855"></div>
          <div style="background: #ffd692"></div>
        </label>
      </div>
    </div>
  </section>
</template>

<script>
import ToolHeader from "@/components/atoms/ToolHeader.vue";

export default {
  name: "ThemeSelector",
  components: {
    ToolHeader
  },
  data() {
    return {
      theme: "",
      expanded: false
    };
  },
  methods: {
    /**
     * submitChosenTheme.
     */
    submitChosenTheme() {
      this.$emit("inputData", this.theme);
      console.log(`chosen theme: ${this.theme}`);
    },
    /**
     * toggleTool.
     */
    toggleTool() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/placeholders";

section {
  @extend %menu-button;
  @extend %menu-content;
  .theme-option {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    label {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 4px 0px;
      div {
        display: inline-block;
        padding: 8px 17px;
        margin: 2px;
        border: 1px dashed black;
        border-radius: 4px;
      }
      input {
        margin: 0 5px 0 0;
      }
    }
  }
}
</style>