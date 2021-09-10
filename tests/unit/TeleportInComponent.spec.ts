import { mount } from '@vue/test-utils'
import TeleportInComponent from './TeleportInComponent.vue'
import Button from './Button.vue';
import Modal from './Modal.vue';

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
  const wrapper = mount(TeleportInComponent)
    
  const button = wrapper.findComponent(Button)
  expect(button.exists()).toBe(false)
});

test('When modal opened, button can be found with getComponent', async () => {
  const wrapper = mount(TeleportInComponent)
  await wrapper.get('[data-testid="toggleVisibility"]').trigger("click")
    
  const modal = wrapper.findComponent(Modal)
  expect(modal.exists()).toBe(true)
    
  const button = modal.getComponent({name: "Button"});
  expect(button.exists()).toBe(true);
});

test('When modal opened, button can be found with get', async () => {
  const wrapper = mount(TeleportInComponent)
  await wrapper.get('[data-testid="toggleVisibility"]').trigger("click")
    
  const modal = wrapper.findComponent(Modal)
  expect(modal.exists()).toBe(true)
    
  const button = modal.get('[data-testid="button"');
  expect(button.exists()).toBe(true);
});