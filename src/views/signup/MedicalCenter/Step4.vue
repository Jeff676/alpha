<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'

const emit = defineEmits(['nextPage', 'prevPage', 'finish'])

const validateCode = reactive({})
</script>

<template>
    <h1>Validar Usuario Golden</h1>

    <Message severity="warn" :closable="false">Acabamos de Enviar un SMS a su Celular y un Correo Electrónico con los
        códigos que deberá introducir a continuación</Message>

    <div class="flex flex-column gap-2">
        <label for="smsCode" class="font-bold">Código SMS</label>
        <InputText id="smsCode" v-model="validateCode.smsCode" aria-describedby="smsCode-help" autofocus />
    <small id="smsCode-help">Consulte los mensajes de texto de su Teléfono Celular e introduzca el código
        recibido</small>
</div>

<div class="flex flex-column gap-2 mt-3">
        <label for="emailCode" class="font-bold">Código recibido en el Correo Electrónico</label>
        <InputText id="emailCode" v-model="validateCode.emailCode" aria-describedby="emailCode-help" />
        <small id="emailCode-help">Consulte su correo electrónico e introduzca el Código recibido</small>
    </div>

    <!-- <div class="flex flex-column gap-2 mt-3 p-input-icon-right">
            <label for="password" class="font-bold">Contraseña</label>
            <i><a><font-awesome-icon icon="fa-solid fa-fire" class="pi mr-2 text-green-400" /></a></i>
            <InputText id="password" v-model="validateCode.password" aria-describedby="password-help" />
            <small id="password-help">Introduzca una contraseña segura</small>
        </div> -->

    <div class="flex flex-column gap-2 mt-3 p-input-icon-right">
        <label for="password" class="font-bold">Contraseña</label>
        <div class="p-inputgroup flex-1">
            <InputText id="password" v-model="validateCode.password" aria-describedby="password-help" />
            <Button icon="pi pi-eye" severity="warning" />
        </div>
        <small id="password-help">Introduzca una contraseña segura</small>
    </div>



    <div class="grid grid-nogutter justify-content-between">
        <Button label="Prev" class="mt-5" @click="$emit('prevPage', { pageIndex: 3 })">
        </Button>

        <Button label="Next" class="mt-5" @click="$emit('nextPage',
            {
                formData: {
                    smsCode: validateCode.smsCode,
                    emailCode: validateCode.emailCode,
                    password: validateCode.password
                },
                pageIndex: 3
            })">
        </Button>
    </div>
</template>