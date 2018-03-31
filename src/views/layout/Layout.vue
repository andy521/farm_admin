<template>
  <div class="app-wrapper">
      <sidebar class="side-wrapper"></sidebar>
      <app-main class="main-wrapper"></app-main>
  </div>
</template>

<script>
import { Sidebar, AppMain } from "./components"

export default {
  name: "layout",
  components: {
    Sidebar,
    AppMain
  }
}
</script>
