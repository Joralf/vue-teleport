import { mount } from '@vue/test-utils'
import TeleportInModal from './TeleportInModal.vue'
import Button from './Button.vue';
import ModalWithTeleport from './ModalWithTeleport.vue';

beforeEach(() => {
  // create teleport target
  const el = document.createElement('div')
  el.id = 'modal'
  document.body.appendChild(el)
})

afterEach(() => {
  // clean up
  document.body.outerHTML = ''
})


test('When modal is closed, button cannot be found', async () => {
  const wrapper = mount(TeleportInModal)
    
  const button = wrapper.findComponent(Button)
  expect(button.exists()).toBe(false)
});

test('When modal opened, button can be found with getComponent', async () => {
  const wrapper = mount(TeleportInModal)
  await wrapper.get('[data-testid="toggleVisibility"]').trigger("click")
    
  const modal = wrapper.findComponent(ModalWithTeleport)
  expect(modal.exists()).toBe(true)
    
  const button = modal.getComponent({name: "Button"});
  expect(button.exists()).toBe(true);
});

// THIS TEST FAILS BUT SHOULD SUCCEED?
test('When modal opened, button can be found with get', async () => {
  const wrapper = mount(TeleportInModal)
  await wrapper.get('[data-testid="toggleVisibility"]').trigger("click")
    
  const modal = wrapper.findComponent(ModalWithTeleport)
  expect(modal.exists()).toBe(true)
    
  const button = modal.get('[data-testid="button"');
  expect(button.exists()).toBe(true);
});