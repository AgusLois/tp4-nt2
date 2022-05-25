<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
  
      <NavbarApp />
      <router-view></router-view>


    </div> 
  </div>
</template>

<script>

import NavbarApp from './componentes/NavbarApp.vue'

export default {
  name: 'App',
  components: {
  NavbarApp,
}
}
</script>
