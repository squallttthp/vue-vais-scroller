<template>
  <div class="is-flex-col">
    <el-tooltip
      class="item"
      effect="dark"
      content="Về đầu văn bản"
      placement="right"
    >
      <el-button
        @click="$emit('up')"
        class="movefast mb-3 ml-0"
        icon="el-icon-d-arrow-left"
        circle
      ></el-button>
    </el-tooltip>
    <el-tooltip
      class="item"
      effect="dark"
      content="Tự động cuộn"
      placement="right"
    >
      <el-button
        @click="$emit('input', !value)"
        :type="value ? 'primary' : ''"
        :icon="value ? 'el-icon-video-pause' : 'el-icon-arrow-down'"
        class="mb-3 ml-0"
        circle
      ></el-button>
    </el-tooltip>
    <el-tooltip
      class="item"
      effect="dark"
      content="Về cuối văn bản"
      placement="right"
    >
      <el-button
        @click="$emit('down')"
        class="movefast ml-0"
        icon="el-icon-d-arrow-right"
        circle
      ></el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="css" scoped>
.movefast {
  transform: rotate(90deg);
}
</style>
