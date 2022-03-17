<template>
  <div></div>
</template>

<script>
export default {
  name: "Emitter",

  methods: {
    emitEvent() {
      this.$emit("myEvent", "name", "password");
      this.$emit("test", "name");
    },
    test() {
      this.$emit("work", "work");
    },
  },
};
</script>

<style scoped></style>
