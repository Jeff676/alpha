<script setup>
    import { ref } from 'vue'
    import Card from 'primevue/card'
    import InputText from 'primevue/inputtext'
    import Password from 'primevue/password';
    import Button from 'primevue/button'
    
    const props = defineProps({
        title: String,
        action: String
    })

    const user = ref('')
    const password = ref('')

    const login = ()=> {
        console.log(`El usuario ${user.value} ha iniciado sesión`)
    }

    const signup = ()=> {
        console.log(`El usuario ${user.value} se ha registrado`)
    }

</script>

<template>
    <div class="flex justify-content-center">

        <Card class="col-4 mt-5 h-24rem">
            <template #title>
                {{ title }}
            </template>
            <template #content>

                <span class="p-float-label mt-5">
                    <InputText id="username" type="text" v-model="user" class="w-full" />
                    <label for="username">Nombre de Usuario</label>
                </span>

                <span class="p-float-label mt-5">
                    <Password v-model="password" toggleMask inputId="pwd1" inputClass="w-full" />
                    <label for="pwd1">Contraseña</label>
                </span>

            </template>
            <template #footer>
                <div class="grid">
                    <Button icon="pi pi-check" label="Iniciar Sesión" class="col" @click="login" v-if="props.action=='login'"/>
                    <Button icon="pi pi-check" label="Registrarse" class="col" @click="signup" v-if="props.action=='signup'"/>
                    <Button icon="pi pi-times" label="Cancelar" class="col p-button-danger" style="margin-left: .5em" />
                </div>
            </template>
        </Card>

    </div>
</template>