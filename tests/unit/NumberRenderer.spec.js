import { mount } from "@vue/test-utils";
import NumberRenderer from "@/components/NumberRenderer";

describe("NumberRenderer.vue", () => {
  it("renders even numbers", () => {
    const wrapper = mount(NumberRenderer, {
      propsData: {
        even: true,
      },
    });

    expect(wrapper.text()).toBe("2, 4, 6, 8");
  });

  it("renders odds numbers", () => {
    // Access directly to the computed properites
    const localThis = { even: false };

    expect(NumberRenderer.computed.numbers.call(localThis)).toBe(
      "1, 3, 5, 7, 9"
    );
  });
});
