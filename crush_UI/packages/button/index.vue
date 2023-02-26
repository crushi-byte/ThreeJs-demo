<template>
  <div :class="crushClass">
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'cButton'
  }
</script>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: "default"
  }
})
const crushClass = computed( () => {
  return ['c-button',`c-button-${props.type}`];
})
</script>

<style lang="less" scoped>
button {
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;
}
.c-button {
  button {
    padding: 12px 24px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
}
.c-button-default {
  button {
    background: #b4b0b0;
  }
}
.c-button-success {
  button {
    background: #67c23a;
  }
}
.c-button-warning {
  button {
    background: #e6a23c;
  }
}
</style>
