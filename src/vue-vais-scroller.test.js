import { shallowMount } from "@vue/test-utils";
import VueVaisScroller from "./vue-vais-scroller.vue";

test("Renders", () => {
  const wrapper = shallowMount(VueVaisScroller);
  expect(wrapper.exists()).toBe(true);
});

test("Shows placeholder", () => {
  const placeholderHtml = '<div class="placeholder"></div>';

  const wrapper = shallowMount(VueVaisScroller, {
    slots: {
      placeholder: placeholderHtml,
    },
  });

  expect(wrapper.html()).toContain(placeholderHtml);
});
