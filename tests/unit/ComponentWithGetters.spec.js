import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ComponentWithGetters from "@/components/ComponentWithGetters";

const localVue = createLocalVue();

localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    firstName: "Alice",
    lastName: "Doe",
  },
  getters: {
    fullname: (state) => state.firstName + " " + state.lastName,
  },
});

describe("ComponentWithGetters.vue", () => {
  it("renders a username using a real Vuex getter", () => {
    const wrapper = mount(ComponentWithGetters, {
      store,
      localVue,
    });

    expect(wrapper.find(".fullname").text()).toBe("Alice Doe");
  });
});
