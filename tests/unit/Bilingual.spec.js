import { mount, config } from "@vue/test-utils";
import Bilingual from "@/components/Bilingual";
import translations from "../../src/translations";

const locale = "ja";

config.mocks["$t"] = (msg) => translations[locale][msg];

describe("Bilingual.vue", () => {
  it("renders successfully", () => {
    const wrapper = mount(Bilingual);

    expect(wrapper.text()).toEqual("こんにちは、世界！");
  });
});
