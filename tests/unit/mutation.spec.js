import mutations from "@/store/mutation";

describe("SET_POST", () => {
  it("adds a post to the state", () => {
    const post = { id: 1, tittle: "Post" };
    const state = {
      postIds: [],
      posts: {},
    };

    mutations.SET_POST(state, { post });

    expect(state).toEqual({
      postIds: [1],
      posts: { 1: post },
    });
  });
});
