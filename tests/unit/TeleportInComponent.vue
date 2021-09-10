<template>
  <div @click="toggleVisibility" data-testid="toggleVisibility"></div>
  <Teleport to="#modal">
    <Modal v-model:isVisible="visible">
      <Button></Button>
    </Modal>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Button from './Button.vue';
import Modal from './Modal.vue';

export default defineComponent({
  components: {
    Button,
    Modal,
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