import { mount } from "@vue/test-utils";
import SubmitButton from "@/components/SubmitButton";

const msg = "submit";

const factory = (propsData) => {
  return mount(SubmitButton, {
    propsData: {
      msg,
      ...propsData,
    },
  });
};

describe("SubmitButton.vue", () => {
  it("displays a non authorized message", () => {
    const wrapper = factory();

    expect(wrapper.find("span").text()).toBe("Not Authorized");
    expect(wrapper.find("button").text()).toBe(msg);
  });

  it("displays a privileges message", () => {
    const wrapper = factory({ isAdmin: true });

    expect(wrapper.find("span").text()).toBe("Admin Privileges");
    expect(wrapper.find("button").text()).toBe(msg);
  });
});
