<template>
  <div>
    <h3>Parent</h3>
    <ComponentWithAsyncCall />
  </div>
</template>

<script>
import ComponentWithAsyncCall from "./ComponentWithAsyncCall.vue";

export default {
  name: "ParentWithAPICallChild",

  components: {
    ComponentWithAsyncCall,
  },
};
</script>
