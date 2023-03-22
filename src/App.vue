<script setup>
import Button from 'primevue/button'
import ScrollTop from 'primevue/scrolltop'

const items = [
  { label: 'Productos', to: '#products' },
  { label: 'Servicios', to: '#services' },
  { label: 'Historias Medicas', to: '#medicalRecords' },
  { label: 'Planes', to: '#plans' },
  // { label: 'Alianzas', to: '/about' }, 
  { label: 'Contactenos', to: '#contact' },
]
</script>

<template>
  <ScrollTop />
  <!-- <div class="flex justify-content-center sticky top-0 z-5">

    <nav class="navBar p-2 flex align-items-center justify-content-between text-white">
      <div class="flex align-items-center">
        <router-link to="#banner">
          <img alt="logo" src="../src/assets/LOGO_XS.svg" height="40" class="mr-2">
        </router-link>
        <router-link v-for="item in items" :to="item.to" class="mx-2 text-white">{{ item.label }}</router-link>
      </div>

      <div>
        <router-link to="/signup">
          <Button label="Registrarse"
            class="mx-1 p-button-outlined text-white hover:border-700 hover:bg-cyan-100 hover:text-700"></Button>
        </router-link>

        <router-link to="/login">
          <Button label="Iniciar Sesion"
            class="mx-1 p-button-outlined text-white hover:border-700 hover:bg-cyan-100 hover:text-700"></Button>
        </router-link>
      </div>
    </nav>
  </div> -->


  <RouterView></RouterView>
</template>

<style>
.navBar {
  border-radius: 5px;
  margin: 5px;
  width: 100vw;
  background-color: #3399cc !important;
}

.p-menubar {
  background-color: #3399cc !important;

}

.p-menuitem-content:hover {
  background-color: #495555 !important;
}

.p-menuitem-text {
  color: white !important;
}

a {
  text-decoration: none;
}
</style>
