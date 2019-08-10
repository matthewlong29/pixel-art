<template>
  <section>
    <div v-on:click="toggleTool()">
      <ToolHeader text="Download" v-if="!expanded" icon="plus-square"/>
      <ToolHeader text="Download" v-if="expanded" icon="minus-square"/>
    </div>
    <div v-if="expanded">
      <h3>Enter Name:</h3>
      <input type="text" name id>
    </div>
  </section>
</template>

<script>
import ToolHeader from "@/components/atoms/ToolHeader.vue";

export default {
  name: "DownloadArt",
  data() {
    return {
      expanded: false
    }
  },
  components: {
    ToolHeader
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
</style>
