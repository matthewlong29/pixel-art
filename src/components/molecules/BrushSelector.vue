<template>
  <section>
    <div class="menu-button" v-on:click="toggleTool()">
      <ToolHeader text="Tool Select" v-if="!expanded" icon="plus-square" />
      <ToolHeader text="Tool Select" v-if="expanded" icon="minus-square" />
    </div>
    <div class="menu-content" v-if="expanded">
      <label for="paintBrush">
        <input type="radio" id="paintBrush" name="brushType" value="paintBrush" />
        <font-awesome-icon icon="paint-brush" />
      </label>
      <label for="pencil">
        <input type="radio" id="pencil" name="brushType" value="pencil" />
        <font-awesome-icon icon="pencil-alt" />
      </label>
      <label for="fill">
        <input type="radio" id="fill" name="brushType" value="fill" />
        <font-awesome-icon icon="fill-drip" />
      </label>
    </div>
  </section>
</template>

<script>
import ToolHeader from "@/components/atoms/ToolHeader.vue";

export default {
  name: "BrushSelector",
  components: {
    ToolHeader
  },
  data() {
    return {
      expanded: false
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
  .menu-content {
    display: flex;
    flex-wrap: wrap;
    label {
      padding: 0.5rem;
      border-radius: 6px;
      font-size: 1.2rem;
      cursor: pointer;
      input {
        display: none;
      }
      svg {
        color: var(--accent);
      }
      &:hover {
        background-color: var(--accentTransparent);
      }
    }
  }
}
</style>