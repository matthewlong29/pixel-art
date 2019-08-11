<template>
  <section>
    <div class="menu-button" v-on:click="toggleTool()">
      <ToolHeader text="Theme" v-if="!expanded" icon="plus-square" />
      <ToolHeader text="Theme" v-if="expanded" icon="minus-square" />
    </div>
    <div class="menu-content" v-if="expanded">
      <input type="radio" id="themeOne" name="themeNumber" value="themeOne" />
      <label for="themeOne">
        <div style="background: #39414b"></div>
        <div style="background: #1f2327"></div>
        <div style="background: #4ecca3"></div>
      </label>
      <input type="radio" id="themeTwo" name="themeNumber" value="themeTwo" />
      <label for="themeTwo">
        <div style="background: #525252"></div>
        <div style="background: #313131"></div>
        <div style="background: #db5059"></div>
      </label>
      <input type="radio" id="themeThree" name="themeNumber" value="themeThree" />
      <label for="themeThree">
        <div style="background: #faf5ef"></div>
        <div style="background: #d7d1c9"></div>
        <div style="background: #672f2f"></div>
      </label>
      <input type="radio" id="themeFour" name="themeNumber" value="themeFour" />
      <label for="themeFour">
        <div style="background: #042f4b"></div>
        <div style="background: #fbc99d"></div>
        <div style="background: #ed1250"></div>
      </label>
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
      expanded: true
    };
  },
  methods: {
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
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px -16px;
    padding: 2px 16px;
    flex-wrap: wrap;
    cursor: pointer;
    div {
      display: inline-block;
      padding: 8px 17px;
      margin: 2px;
      border: 1px dashed var(--backgroundOne);
      border-radius: 4px;
      flex-grow: 1;
    }
    &:hover {
      background-color: var(--accentTransparent);
    }
  }
  input {
    display: none;
    margin: 0 5px 0 0;
  }
  input[type="radio"]:checked + label {
    background-color: var(--accentTransparent);
  }
}
</style>