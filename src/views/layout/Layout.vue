<template>
  <div class="app-wrapper">
    <sidebar class="side-wrapper"></sidebar>
    <navbar class="nav-wrapper"></navbar>
    <app-main class="main-wrapper"></app-main>
  </div>
</template>

<script>
  import AppMain from './components/AppMain'
  import Navbar from './components/Navbar'
  import Sidebar from './components/Sidebar'

  export default {
    name: 'layout',
    components: {
      Sidebar,
      Navbar,
      AppMain
    }
  }
</script>
