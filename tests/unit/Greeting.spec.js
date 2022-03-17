import { mount } from "@vue/test-utils";
import Greeting from "@/components/Greeting";

describe("Greeting.vue", () => {
  it("renders a greeting", () => {
    let wrapper = mount(Greeting);

    // expect(wrapper.html().includes("Vue and TDD")).toBe(true);
    expect(wrapper.text()).toMatch("Vue and TDD");
  });
});
