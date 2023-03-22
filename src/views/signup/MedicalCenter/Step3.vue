<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'

const emit = defineEmits(['nextPage', 'prevPage', 'finish'])

const goldenUser = reactive({})
</script>

<template>
    <h1>Usuario Golden</h1>

    <Message severity="warn" :closable="false">El <span class="font-bold">Usuario Golden</span> es el usuario principal, con el cual tendrás acceso a todas las funciones y opciones administradtivas del sistema, por lo tanto le recomendamos resguarde muy bien estas credenciales</Message>
    
    <div class="flex flex-column gap-2">
        <label for="username" class="font-bold">Nombre de Usuario</label>
        <InputText id="username" v-model="goldenUser.username" aria-describedby="username-help" autofocus />
        <small id="username-help">Nombre de Usuario que lo identificara como Usuario Golden</small>
    </div>

    <div class="flex flex-column gap-2 mt-3">
        <label for="name" class="font-bold">Nombre y Apellido</label>
        <InputText id="name" v-model="goldenUser.name" aria-describedby="name-help"/>
        <small id="name-help">Nombre y Apellido de la Persona Asignada al Usuario Golden</small>
    </div>

    <div class="flex flex-column gap-2 mt-3">
        <label for="phone" class="font-bold">Teléefono Celular</label>
        <InputText id="phone" v-model="goldenUser.phone" aria-describedby="phone-help"/>
        <small id="phone-help">Utilizaremos este número celular para comunicarnos y/o validar el Usuario Golden</small>
    </div>

    <div class="flex flex-column gap-2 mt-3">
        <label for="email" class="font-bold">Correo Electrónico</label>
        <InputText id="email" v-model="goldenUser.email" aria-describedby="email-help"/>
        <small id="email-help">Utilizaremos este email para validar y/o comunicarnos con el Usuario Golden</small>
    </div>

    <div class="grid grid-nogutter justify-content-between">
        <Button label="Prev" class="mt-5"
            @click="$emit('prevPage', { pageIndex: 2 })">
        </Button>

        <Button label="Next" class="mt-5"
            @click="$emit('nextPage',{
                formData: {
                    goldenUser: {
                        username: goldenUser.username,
                        name: goldenUser.name,
                        phone: goldenUser.phone,
                        email: goldenUser.email
                    }

                },
                pageIndex: 2
            })">
        </Button>
    </div>
</template>