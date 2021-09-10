<template>
    <div v-if="visibleInternal">
        <div @click="visibleInternal = false">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: "Modal",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const visibleInternal = computed({
      get: () => props.isVisible,
      set: (value) => emit("update:visible", value),
    });
    return { visibleInternal }
  }
})
</script>