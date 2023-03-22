<script setup>
import { reactive, onMounted } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'

const emit = defineEmits(['nextPage', 'prevPage', 'finish'])

onMounted(()=> {
    console.log('onMouted works!')
})

</script>

<template>
    <h1>BIENVENIDOS!</h1>

    <Message severity="success" :closable="false">Su registro principal está a punto de finalizar, le invitamos a que verifique la información que acaba de suministrarnos y si requiere corregir algo puede regresar. Si todo está correcto puede presionar el boton FINALIZAR para continuar</Message>

    <div class="grid grid-nogutter justify-content-end">
        <Button label="Finalizar" class="mt-5"
            @click="$emit('finish')">
        </Button>
    </div>
</template>