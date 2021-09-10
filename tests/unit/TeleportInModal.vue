<template>
  <div @click="toggleVisibility" data-testid="toggleVisibility"></div>
  <ModalWithTeleport v-model:isVisible="visible">
    <Button></Button>
  </ModalWithTeleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Button from './Button.vue';
import ModalWithTeleport from './ModalWithTeleport.vue';

export default defineComponent({
  components: {
    Button,
    ModalWithTeleport,
  },
  setup() {
    const visible = ref<boolean>(false)

    const toggleVisibility = (() => {
      visible.value = !visible.value
    })
    return { visible, toggleVisibility}
  }
})
</script>