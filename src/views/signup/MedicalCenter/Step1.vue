<script setup>
import { reactive } from 'vue'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const emit = defineEmits(['nextPage', 'prevPage', 'finish'])

const medicalCenterData = reactive({})

</script>
<template>
    <h1>Datos Básicos</h1>

        <div class="flex flex-column gap-2">
            <label for="rif" class="font-bold">RIF</label>
            <InputText id="rif" v-model="medicalCenterData.rif" aria-describedby="rif-help" autofocus />
            <small id="rif-help">Registro de Información Fiscal</small>
        </div>

        <div class="flex flex-column gap-2 mt-3">
            <label for="name" class="font-bold">Nombre</label>
            <InputText id="name" v-model="medicalCenterData.name" aria-describedby="username-help" />
            <small id="username-help">Nombre Completo del Centro de Salud</small>
        </div>

        <div class="flex flex-column gap-2 mt-3">
            <label for="address" class="font-bold">Dirección</label>
            <InputText id="address" v-model="medicalCenterData.address" aria-describedby="address-help" />
            <small id="address-help">Dirección Fiscal del Centro de Salud</small>
        </div>

        <div class="flex flex-column gap-2 mt-3">
            <label for="phone" class="font-bold">Teléfono</label>
            <InputText id="phone" v-model="medicalCenterData.phone" aria-describedby="phone-help" />
            <small id="phone-help">Teléfono Principal del Centro de Salud</small>
        </div>

        <!-- *** Steps Control *** -->
        <div class="grid grid-nogutter justify-content-end">
            <Button label="Next" class="mt-5" @click="$emit('nextPage',
                {
                    formData: {
                        rif: medicalCenterData.rif,
                        name: medicalCenterData.name,
                        address: medicalCenterData.address,
                        phone: medicalCenterData.phone
                    },
                    pageIndex: 0
                })">
            </Button>
        </div>
</template>