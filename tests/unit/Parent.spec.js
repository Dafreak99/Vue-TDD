import { mount } from "@vue/test-utils";
import "@testing-library/jest-dom";
import Parent from "@/components/Parent.vue";
import Child from "@/components/Child.vue";

describe("Parent", () => {
  it("does not render a span", () => {
    const wrapper = mount(Parent);

    expect(wrapper.find("span").isVisible()).toBe(false);
  });

  it("does render a span", () => {
    const wrapper = mount(Parent, {
      data() {
        return { showSpan: true };
      },
    });

    expect(wrapper.find("span").exists()).toBe(true);
  });

  it("does not render a Child component", () => {
    const wrapper = mount(Parent);

    expect(wrapper.findComponent(Child).exists()).toBe(false);
  });

  it("renders a Child component", () => {
    const wrapper = mount(Parent, {
      data() {
        return { showChild: true };
      },
    });

    // We can also use component name here
    expect(wrapper.findComponent({ name: "Child" }).exists()).toBe(true);
  });
});
