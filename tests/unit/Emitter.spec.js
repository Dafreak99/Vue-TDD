import Emitter from "@/components/Emitter.vue";
import { mount } from "@vue/test-utils";

describe("Emitter.vue", () => {
  it("emits an event with two arguments", () => {
    const wrapper = mount(Emitter);

    // wrapper.vm is the same as "this"
    wrapper.vm.emitEvent(); // call to emitEvent method

    expect(wrapper.emitted().myEvent[0]).toEqual(["name", "password"]);
  });

  it("emits an event without mounting the component", () => {
    const events = {};
    const $emit = (event, ...args) => {
      events[event] = [...args];
    };

    Emitter.methods.emitEvent.call({ $emit });

    expect(events.myEvent).toEqual(["name", "password"]);
  });
});
