<script setup>
import Button from 'primevue/button';
import Card from 'primevue/card'
import Carousel from 'primevue/carousel'
import Rating from 'primevue/rating'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Divider from 'primevue/divider'

import Sectiontitle from '../components/SectionTitle.vue'
import ServiceItem from '../components/ServiceItem.vue'

const items = [
  { label: 'Productos', to: '#products' },
  { label: 'Servicios', to: '#services' },
  { label: 'Historias Medicas', to: '#medicalRecords' },
  { label: 'Planes', to: '#plans' },
  // { label: 'Alianzas', to: '/about' }, 
  { label: 'Contactenos', to: '#contact' },
]

const products = [
    {
        name: 'Nebulizador Portatil',
        price: 50,
        imgName: 'carousel1',
        rating: 5,
        description: 'Equipo compacto para el facil traslado, ideal para utilizar fuera del hogar, alta resistencia y durabilidad'
    },
    {
        name: 'Tensiometro Digital',
        price: 30,
        imgName: 'carousel2',
        rating: 4.5,
        description: 'Ideal para llevar el control de tension, hasta dos personas con registros independientes'
    },
    {
        name: 'Tensiometro de Muñeca',
        price: 40,
        imgName: 'carousel3',
        rating: 5,
        description: 'Pequeño equipo ideal para llevar a donde vallas, liviano y exacto en las mediciones'
    },
    {
        name: 'Glucometro',
        price: 50,
        imgName: 'carousel4',
        rating: 3.5,
        description: 'Equipo portatil y liviano, incluye estuche para que lleves todo lo necesario a donde vallas'
    },
]

const services = [
    {
        title: "Despachos Nacionales",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus reiciendis, nam tempora accusamus facere nostrum id aspernatur asperiores cupiditate, officiis optio? Facilis quae eiusconsectetur ex vel molestias corporis.",
        icon: "fa-solid fa-truck-fast"
    },
    {
        title: "Atencion Personalizada",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus reiciendis, nam tempora accusamus facere nostrum id aspernatur asperiores cupiditate, officiis optio? Facilis quae eiusconsectetur ex vel molestias corporis.",
        icon: "fa-solid fa-people-group"
    },
    {
        title: "Calidad Garantizada",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus reiciendis, nam tempora accusamus facere nostrum id aspernatur asperiores cupiditate, officiis optio? Facilis quae eiusconsectetur ex vel molestias corporis.",
        icon: "fa-solid fa-fire"
    }
]

const planes = [
    {
        title: "Basico",
        cost: "GRATIS"
    }
]

const features = ["Acceso a todas la historias de pacientes hospitalizados", "Acceso a 100 historias en consulta", "Acceso desde cualquier parte, incluso a los pacientes hospitalizados"]
</script>

<template>
     <div class="flex justify-content-center sticky top-0 z-5">

<nav class="navBar p-2 flex align-items-center justify-content-between text-white">
  <div class="flex align-items-center">
    <router-link to="#banner">
      <img alt="logo" src="@/assets/LOGO_XS.svg" height="40" class="mr-2">
    </router-link>
    <router-link v-for="item in items" :to="item.to" class="mx-2 text-white">{{ item.label }}</router-link>
  </div>

  <div>
    <router-link to="/signupoptions">
      <Button label="Registrarse"
        class="mx-1 p-button-outlined text-white hover:border-700 hover:bg-cyan-100 hover:text-700"></Button>
    </router-link>

    <router-link to="/login">
      <Button label="Iniciar Sesion"
        class="mx-1 p-button-outlined text-white hover:border-700 hover:bg-cyan-100 hover:text-700"></Button>
    </router-link>
  </div>
</nav>
</div>
    <div class="m-0 banner flex align-content-center flex-wrap" id="banner">
        <div class="text-center min-w-full">
            <h1 class="pt-5 text-white">BIENVENIDOS</h1>
            <div class="bg-img">
                <img src="@/assets/LOGO_XL.png" class="max-h-8rem">
            </div>
        </div>
        <div class="text-center text-white mt-5 flex justify-content-center">
            <h4 class="w-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus reiciendis, nam
                tempora accusamus facere nostrum id aspernatur asperiores cupiditate, officiis optio? Facilis quae eius
                consectetur ex vel molestias corporis.</h4>
        </div>
        <div class="text-center mt-4 w-full">
            <Button class="p-button-warning" label="Descargar Catalogo de Productos" />
        </div>
    </div>


<!-- PRODUCTS -->
    <div class="grid grid-nogutter align-items-center mt-2" id="products">
        <Sectiontitle main-number="01" main-title="productos" sd-title="nuestros"></Sectiontitle>
        <div class="col flex align-items-center justify-content-evenly py-4 ">

            <!-- <Carousel :value="products" :numVisible="3" :circular="true" :autoplayInterval="5000"> -->
            <Carousel :value="products" :numVisible="4">
                <template #item="slotProps">
                    <div class="flex justify-content-around">
                        <Card class="m-3 w-10 shadow-7 align-content-between flex flex-wrap" style="height: 35rem;">
                            <template #header>
                                <img :src="'imagenes/' + slotProps.data.imgName + '.jpg'" alt="">
                            </template>
                            <template #title class="flex justify-content-center w-full">
                                <span>{{ slotProps.data.name }}</span><br>
                            </template>
                            <template #content>
                                <p class="text-400 text-center mb-4"> {{ slotProps.data.description }} </p>
                                <Rating v-model="slotProps.data.rating" :cancel="false" />
                            </template>
                            <template #footer>
                                <Button label="Ver detalles" class="p-button-primary w-full" />
                            </template>
                        </Card>
                    </div>
                </template>
            </Carousel>
        </div>
    </div>

<!-- SERVICES -->
    <div class="grid grid-nogutter align-items-center" id="services">
        <Sectiontitle main-number="02" main-title="SERVICIOS" sd-title="Nuestros"></Sectiontitle>
        <div class="col grid justify-content-around">
            <ServiceItem v-for="service in services" :title="service.title" :icon="service.icon"
                :content="service.content" />
        </div>
    </div>

<!-- MEDICAL RECORDS -->
    <div class="grid grid-nogutter align-items-center" id="medicalRecords">
        <Sectiontitle main-number="03" main-title="medicas" sd-title="historias"></Sectiontitle>
        <div class="col flex align-items-center justify-content-center" style="height: 350px;">
            <div class="flex-shrink-0 flex justify-content-center mr-4 w-4">
                <img src="../assets/medical-report.jpg" alt="" class=" border-3 border-orange-200 border-round">
            </div>
            <div class="flex-grow-0 mr-4 w-8">
                <span class="text-5xl">Historias Medicas onLine</span><br>
                <span>Nuestros servicio de Historias Medicas Online, te permite tener al alcance de tu celular todo el
                    historial medico de tus pacientes, incluso cuando estan hospitalizados en un centro de salud
                    aliado</span>
                <br><br>
                <Button label="Descubre como" class="p-button-warning" />
            </div>
        </div>
    </div>

<!-- PLANS -->
    <div class="grid grid-nogutter align-items-center" id="plans">
        <Sectiontitle main-number="04" main-title="planes" sd-title="los mejores"></Sectiontitle>
        <!-- <div class="col-3 flex align-items-center justify-content-center" style="height: 350px;"> -->
        <div class="flex flex-wrap justify-content-center col gap-2">
            <Card class="flex align-items-center justify-content-center w-3 border-3 border-solid border-600 shadow-none border-round-md">
                <template #title>
                    <span>Plan</span><br>
                    <span class="text-4xl font-semibold">Basico</span>
                </template>
                <template #subtitle>
                    <span class="text-4xl">GRATIS</span>
                </template>
                <template #content>
                    <Button label="Contratar" class="w-full" />
                </template>
                <template #footer>
                    <span class="text-xl text-gray-900 mb-2">Caracteristicas</span>
                    <ul>
                        <li class="list-none line-height-4" v-for="feature in features">
                            <font-awesome-icon icon="fa-solid fa-fire" class=" mr-2 text-green-400"/>
                            {{feature}}
                        </li>
                    </ul>
                </template>
            </Card>
            <Card class="flex align-items-start justify-content-center w-4 border-3 border-solid border-green-400 shadow-none border-round-md" >
                <template #title>
                    <span>Plan</span><br>
                    <span class="text-4xl font-semibold">Premiun</span>
                </template>
                <template #subtitle>
                    <span class="text-4xl">4$/mes*</span><br>
                </template>
                <template #content>
                    <Button label="Contratar" class="w-full p-button-success" />
                </template>
                <template #footer>
                    <span class="text-xl text-gray-900 mb-2">Caracteristicas</span>
                    <ul>
                        <li class="list-none line-height-4" v-for="feature in features">
                            <font-awesome-icon icon="fa-solid fa-fire" class=" mr-2 text-green-400"/>
                            {{feature}}
                        </li>
                    </ul>
                </template>
            </Card>
            <Card class="flex align-items-center justify-content-center w-3 border-3 border-solid border-600 shadow-none border-round-md">
                <template #title>
                    <span>Plan</span><br>
                    <span class="text-4xl font-semibold">Estandar</span>
                </template>
                <template #subtitle>
                    <span class="text-4xl">5$/mes</span>
                </template>
                <template #content>
                    <Button label="Contratar" class="w-full" />
                </template>
                <template #footer>
                    <span class="text-xl text-gray-900 mb-2">Caracteristicas</span>
                    <ul>
                        <li class="list-none line-height-4" v-for="feature in features">
                            <font-awesome-icon icon="fa-solid fa-fire" class=" mr-2 text-green-400"/>
                            {{feature}}
                        </li>
                    </ul>
                </template>
            </Card>
        </div>
    </div>

<!-- TO DO -->
<!-- ALIANZAS -->

<!-- CONTACT -->
    <div class="grid grid-nogutter align-items-center my-5" id="contact">
        <Sectiontitle main-number="05" main-title="contacto" sd-title="canales de"></Sectiontitle>
        <div class="col flex align-items-center justify-content-center text-white" style="height: 350px;">
            <div class="bg-blue-600 w-4 h-16rem p-4 z-1">
                <span class="text-2xl  font-semibold">Contáctenos</span><br>
                <ul class="list-none">
                    <li class="my-4"><font-awesome-icon icon="fa-solid fa-mobile-screen" class="mr-2"/> +58 416 5017123</li>
                    <li class="my-4"><font-awesome-icon icon="fa-solid fa-mobile-screen" class="mr-2"/> +58 424 5543464</li>
                    <li class="my-4"><font-awesome-icon icon="fa-regular fa-envelope" class="mr-2" /> soporte@alfamedica.com</li>
                     <li class="my-4"><font-awesome-icon icon="fa-brands fa-whatsapp" class="mr-2" /> +58 416 5017123</li>
                </ul>
            </div>
            <div class="w-5 border-3 border-blue-300 py-4 pl-6 pr-4" style="transform: translateX(-1.5rem);">
                <span class="text-primary">Escríbenos</span>
                <div class="p-inputgroup my-2">
                    <span class="p-inputgroup-addon">
                        <font-awesome-icon icon="fa-regular fa-user" />
                    </span>
                    <InputText placeholder="Nombre"/>
                </div>
                <div class="p-inputgroup my-2">
                    <span class="p-inputgroup-addon">
                        <font-awesome-icon icon="fa-regular fa-envelope" />
                    </span>
                    <InputText placeholder="Correo Electrónico"/>
                </div>
                <div class="p-inputgroup my-2">
                    <span class="p-inputgroup-addon">
                        <font-awesome-icon icon="fa-solid fa-mobile-screen" />
                    </span>
                    <InputText placeholder="Telefono"/>
                </div>
                <div class="p-inputgroup my-2">
                    <span class="p-inputgroup-addon">
                        <font-awesome-icon icon="fa-regular fa-keyboard" />
                    </span>
                    <Textarea rows="3" cols="30" placeholder="Mensaje" />
                </div>
                <Button class="w-full">Enviar Mensaje</Button>
            </div>
        </div>
    </div>

<!-- FOOTER -->
    <div class="w-full  bg-primary grid ">
        <div class="flex align-items-center justify-content-center col-12 text-white p-2 mt-4"><img src="../assets/LOGO_XL_text-white.png" class="max-h-3rem"></div>
        <Divider class="mx-4"/>
        <div class="col-12 flex justify-content-center">
            <ul class="list-none">
                <li class="mx-2" style="display: inline-block;">Productos</li>
                <li class="mx-2" style="display: inline-block;">Servicios</li>
                <li class="mx-2" style="display: inline-block;">Historias Medicas</li>
                <li class="mx-2" style="display: inline-block;">Planes</li>
                <!-- <li>Alianzas</li> -->
                <li class="mx-2" style="display: inline-block;">Contacntos</li>
            </ul>
        </div>
        <div class="col-12 flex justify-content-center gap-3 mb-5">
            <Button class="p-button-rounded p-button-outlined text-white">
                <font-awesome-icon icon="fa-brands fa-twitter"/>
            </Button>
            <Button class="p-button-rounded p-button-outlined text-white">
                <font-awesome-icon icon="fa-brands fa-facebook"/>
            </Button>
            <Button class="p-button-rounded p-button-outlined text-white">
                <font-awesome-icon icon="fa-brands fa-instagram"/>
            </Button>
            <Button class="p-button-rounded p-button-outlined text-white">
                <font-awesome-icon icon="fa-brands fa-whatsapp"/>
            </Button>
        </div>
    </div>

</template>

<style scoped>
.banner {
    width: 100%;
    height: 70vh;
    background-image: url(../assets/bg-home.jpg);
    background-size: cover;
    background-position-y: center;
}

.bg-img {
    background-color: rgba(254, 254, 254, 0.75);
    padding: 10px 0;
}
</style>