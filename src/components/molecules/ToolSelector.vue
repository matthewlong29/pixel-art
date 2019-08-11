<template>
  <section>
    <div class="menu-button" v-on:click="toggleTool()">
      <ToolHeader text="Tool Select" v-if="!expanded" icon="plus-square" />
      <ToolHeader text="Tool Select" v-if="expanded" icon="minus-square" />
    </div>
    <div class="menu-content" v-if="expanded">
      <input type="radio" id="pencil" name="selectedTool" value="pencil" />
      <label for="pencil">
        <font-awesome-icon icon="pencil-alt" />
      </label>
      <input type="radio" id="paintBrush" name="selectedTool" value="paintBrush" />
      <label for="paintBrush">
        <font-awesome-icon icon="paint-brush" />
      </label>
      <input type="radio" id="fill" name="selectedTool" value="fill" />
      <label for="fill">
        <font-awesome-icon icon="fill-drip" />
      </label>
    </div>
  </section>
</template>

<script>
import ToolHeader from "@/components/atoms/ToolHeader.vue";

export default {
  name: "ToolSelector",
  components: {
    ToolHeader
  },
  data() {
    return {
      expanded: false,
      selectedTool: { type: String, default: "pencil" }
    };
  },
  methods: {
    /**
     * toggleTool.
     */
    toggleTool() {
      this.expanded = !this.expanded;
    },
    /**
     * submitToolSelection.
     */
    submitToolSelection() {
      console.log(`selected ${this.selectedTool} tool`);
      this.$emit("inputData", this.selectedTool);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/placeholders";

section {
  @extend %menu-button;
  @extend %menu-content;
  .menu-content {
    display: flex;
    flex-wrap: wrap;
    label {
      padding: 0.5rem;
      border-radius: 6px;
      font-size: 1.2rem;
      cursor: pointer;

      svg {
        color: var(--accent);
      }
    }
    input {
      display: none;
      &:hover {
        background-color: var(--accentTransparent);
      }
    }
    input[type="radio"]:checked + label {
      background-color: var(--accentTransparent);
    }
  }
}
</style>