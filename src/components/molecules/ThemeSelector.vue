<template>
  <section>
    <div class="menu-button" v-on:click="toggleTool()">
      <ToolHeader text="Theme" v-if="!expanded" icon="plus-square" />
      <ToolHeader text="Theme" v-if="expanded" icon="minus-square" />
    </div>
    <div class="menu-content" v-if="expanded">
      <input type="radio" id="dark" v-model="theme" value="dark" @change="submitChosenTheme()" />
      <label for="dark">Dark</label>
      <input type="radio" id="light" v-model="theme" value="light" @change="submitChosenTheme()" />
      <label for="light">Light</label>
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
}
</style>