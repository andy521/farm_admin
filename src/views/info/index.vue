<template>
  <div>
    <h1>{{userName}}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  ...mapGetters(["userName"])
};
</script>
