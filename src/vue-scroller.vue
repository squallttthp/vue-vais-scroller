<template>
  <div v-if="buttonType === 'fab'">
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
      v-if="!disableAutoScroll"
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
  <div v-else>
    <el-tooltip
      class="item"
      effect="dark"
      content="Về đầu văn bản"
      placement="top"
    >
      <el-button
        @click="$emit('up')"
        size="mini"
        class="movefast"
        icon="el-icon-d-arrow-left"
      >Cuộn lên đầu</el-button>
    </el-tooltip>
    <el-tooltip
      v-if="!disableAutoScroll"
      class="item"
      effect="dark"
      content="Tự động cuộn"
      placement="top"
    >
      <el-button
        @click="$emit('input', !value)"
        size="mini"
        :icon="value ? 'el-icon-video-pause' : 'el-icon-arrow-down'"
      >{{ value ? 'Tắt tự động cuộn' : 'Bật tự động cuộn' }}</el-button>
    </el-tooltip>
    <el-tooltip
      class="item"
      effect="dark"
      content="Về cuối văn bản"
      placement="top"
    >
      <el-button
        @click="$emit('down')"
        size="mini"
        class="movefast"
        icon="el-icon-d-arrow-right"
      >Cuộn xuống cuối</el-button>
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
    disableAutoScroll: {
      type: Boolean,
      default: false,
    },
    buttonType: {
      type: String,
      default: 'fab', // default, fab
    },
  },
};
</script>

<style scoped>
.movefast {
  transform: rotate(90deg);
}
</style>
