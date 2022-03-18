import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import ComponentWithVueX from "@/components/ComponentWithVueX";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: "alice",
  },
});

describe("ComponentWithVueX", () => {
  it("renders a username using a real Vuex store", () => {
    const wrapper = mount(ComponentWithVueX, {
      store,
      localVue,
    });

    expect(wrapper.find(".username").text()).toBe("alice");
  });
});
