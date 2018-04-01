<template>
  <div>
    <h1>{{user_name}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  ...mapGetters(['user_name'])
}
</script>
