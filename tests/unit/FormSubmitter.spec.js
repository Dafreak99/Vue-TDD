import flushPromises from "flush-promises";
import { mount } from "@vue/test-utils";
import FormSubmitter from "@/components/FormSubmitter";

let url = "";
let data = "";

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url;
      data = _data;
      resolve();
    });
  },
};

describe("FormSubmitter.vue", () => {
  it("reveals a notification when submitted", async () => {
    const wrapper = mount(FormSubmitter, {
      mocks: {
        $http: mockHttp,
      },
    });

    // trigger also works with other Key, Mouse and other DOM events

    await wrapper.find("[data-username]").setValue("alice");
    await wrapper.find("form").trigger("submit.prevent");
    await flushPromises(); // Resolve all pending promises

    expect(wrapper.find(".message").text()).toBe(
      "Thank you for your submission, alice."
    );
    expect(url).toBe("/api/v1/register");
    expect(data).toEqual({ username: "alice" });
  });
});
