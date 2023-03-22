<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const emit = defineEmits(['nextPage', 'prevPage', 'finish'])

const contactData = reactive({})
</script>

<template>
    <h1>Datos de Contácto</h1>

    <div class="flex flex-column gap-2">
        <label for="phone2" class="font-bold">Telefono Ingresos / Pacientes</label>
        <InputText id="phone2" v-model="contactData.phone2" aria-describedby="phone2-help" autofocus />
        <small id="phone2-help">Teléfono de Contacto para Pacientes</small>
    </div>

    <div class="flex flex-column gap-2 mt-3">
        <label for="phone3" class="font-bold">Telefono Almacén / Compras</label>
        <InputText id="phone3" v-model="contactData.phone3" aria-describedby="phone3-help"/>
        <small id="phone3-help">Teléfono de Contacto para Proveedores</small>
    </div>

    <div class="flex flex-column gap-2 mt-3">
        <label for="phone4" class="font-bold">Telefono Médicos</label>
        <InputText id="phone4" v-model="contactData.phone4" aria-describedby="phone4-help"/>
        <small id="phone4-help">Teléfono de Contacto para Médicos</small>
    </div>

    <div class="flex flex-column gap-2 mt-3">
        <label for="email" class="font-bold">Correo Electrónico Principal</label>
        <InputText id="email" v-model="contactData.email" aria-describedby="email-help"/>
        <small id="email-help">Correo Electrónico Principal</small>
    </div>

    <div class="flex flex-column gap-2 mt-3">
        <label for="email2" class="font-bold">Correo Electrónico Compras</label>
        <InputText id="email2" v-model="contactData.emailSuppliers" aria-describedby="email2-help"/>
        <small id="email2-help">Correo Electrónico para Proveedores</small>
    </div>

    <div class="flex flex-column gap-2 mt-3">
        <label for="instagram" class="font-bold">Instagram</label>
        <InputText id="instagram" v-model="contactData.instagramUser" aria-describedby="instagram-help"/>
        <small id="instagram-help">Usuario de Instagram</small>
    </div>

    


    <div class="grid grid-nogutter justify-content-between">
        <Button label="Prev" class="mt-5"
            @click="$emit('prevPage', { pageIndex: 1 })">
        </Button>

        <Button label="Next" class="mt-5"
            @click="$emit('nextPage',
            {
                formData: {
                    phone2: contactData.phone2,
                    phone3: contactData.phone3,
                    phone4: contactData.phone4,
                    email: contactData.email,
                    emailSuppliers: contactData.emailSuppliers,
                    instagram: contactData.instagramUser
                },
                pageIndex: 1
            })">
        </Button>
    </div>
</template>