import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import ComponentWithVueX from "@/components/ComponentWithVueX";
import ComponentWithGetters from "@/components/ComponentWithGetters";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: "alice",
  },
});

const store2 = new Vuex.Store({
  state: {
    firstName: "Alice",
    lastName: "Doe",
  },
  getters: {
    fullname: (state) => state.firstName + " " + state.lastName,
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

  it("renders a username using a real Vuex getter", () => {
    const wrapper = mount(ComponentWithGetters, { store: store2, localVue });

    expect(wrapper.find(".fullname").text()).toBe("Alice Doe");
  });
});
