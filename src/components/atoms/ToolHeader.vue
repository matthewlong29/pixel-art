<template>
  <div class="open-container">
    <h2>{{text}}</h2>
    <font-awesome-icon :icon="icon"/>
  </div>
</template>

<script>
export default {
  name: "ToolHeader",
  props: {
    icon: { type: String },
    text: { type: String }
  }
};
</script>

<style lang="scss" scoped>
.open-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  cursor: pointer;
  h2 {
    margin: 0;
  }
}
</style>
