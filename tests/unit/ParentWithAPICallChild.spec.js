import { mount, config, shallowMount } from "@vue/test-utils";
import ParentWithAPICallChild from "@/components/ParentWithAPICallChild";
import ComponentWithAsyncCall from "@/components/ComponentWithAsyncCall.vue";

describe("ParentWithAPICallChild.vue", () => {
  it("renders with mount and does initialize API call", () => {
    const wrapper = mount(ParentWithAPICallChild);
    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true);
  });

  it("renders with mount and doesn't initialize API call", () => {
    const wrapper = mount(ParentWithAPICallChild, {
      stubs: {
        ComponentWithAsyncCall: true,
      },
    });

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true);
  });

  // We can also use shallowMount for automatically stubbing
  it("renders with shallowMount and does not initialize API call", () => {
    const wrapper = shallowMount(ParentWithAPICallChild);

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true);
  });
});
