import { mount } from "@vue/test-utils";
import SubmitButton from "@/components/SubmitButton";

// const factory = (propsData) => {
//   return mount(SubmitButton, {
//     propsData: {
//       msg,
//       ...propsData,
//     },
//   });
// };

const msg = "submit";

describe("SubmitButton.vue", () => {
  it("displays a non authorized message", () => {
    const wrapper = mount(SubmitButton, {
      propsData: {
        msg,
      },
    });

    expect(wrapper.find("span").text()).toBe("Not Authorized");
    expect(wrapper.find("button").text()).toBe(msg);
  });

  it("displays a privileges message", () => {
    const wrapper = mount(SubmitButton, {
      propsData: {
        msg,
        isAdmin: true,
      },
    });

    expect(wrapper.find("span").text()).toBe("Admin Privileges");
    expect(wrapper.find("button").text()).toBe(msg);
  });
});

// yarn test tests/unit/SubmitButton.spec.js
