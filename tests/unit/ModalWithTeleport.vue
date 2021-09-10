<template>
  <Teleport to="#modal">
    <div v-if="visibleInternal">
        <div @click="visibleInternal = false">
          <slot></slot>
        </div>
    </div>
  </Teleport>

</template>

<script>
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: "ModalWithTeleport",
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