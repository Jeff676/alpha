<script setup>
import Steps from 'primevue/steps'
import Card from 'primevue/card'
import { reactive } from 'vue'
import router from '../../router'
import { collection, addDoc } from "firebase/firestore"
import { db } from '../../firebase/firebase-init'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const items = [
    {
        label: 'Datos Basicos',
        to: '/basic'
    },
    {
        label: 'Datos de Contacto',
        to: '/contact'
    },
    {
        label: 'Usuario Golden',
        to: '/golden'
    },
    {
        label: 'Validar Usuario',
        to: '/validate'
    },
    {
        label: 'Finalmente',
        to: '/finish'
    },

]

defineProps({
    formData: Object
})


let formObject = reactive({})

const nextPage = (event) => {
    for (let field in event.formData) {
        formObject[field] = event.formData[field];
    }
    router.push(items[event.pageIndex + 1].to);
}

const prevPage = (event) => {
    router.push(items[event.pageIndex - 1].to);
}

const finish = async (event) => {
    console.log(formObject)

    try {
        const docRef = await addDoc(collection(db, "medicalCenters"), {
            rif: formObject.rif,
            name: formObject.name,
            address: formObject.address,
            phone: formObject.phone,
            patientsPhone: formObject.phone2,
            suppliersPhone: formObject.phone3,
            doctorsPhone: formObject.phone4,
            email: formObject.email,
            emailSuppliers: formObject.emailSuppliers,
            socialMedia: {
                instagram: formObject.instagram
            },
            goldenUser: formObject.goldenUser,
            // goldenUserPassword: formObject.password
        });
        console.log("Document written with ID: ", docRef.id);

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, formObject.goldenUser.email, formObject.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(`goldenuser ${user.uid}`)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

</script>

<template>
    <!-- <Toast /> -->

    <Card class="m-5">
        <template #content>
            <h1 class="mb-3">Registrar Centro Medico</h1>
            <Steps :model="items" :readonly="false" aria-label="Form Steps"></Steps>
        </template>
    </Card>
    <Card class="m-5 p-5">
        <template #content>
            <router-view v-slot="{ Component }" @prevPage="prevPage($event)" @nextPage="nextPage($event)"
                @finish="$event => finish($event)">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
                {{ formObject }}
            </router-view>
        </template>
    </Card>
</template>

<style>
.p-steps .p-steps-item.p-highlight .p-steps-number {
    background-color: blue;
    color: #fff;
}
</style>