<script setup>
import Card from 'primevue/card'
</script>

<template>
    <div class="flex justify-content-evenly">
        <router-link to="/signup/doctors">
            <Card>
                <template #header>
                    Profesional de la salud
                </template>
            </Card>
        </router-link>

        <router-link to="/basic">
            <Card>
                <template #header>
                    Centro de Salud
                </template>
            </Card>
        </router-link>

        <router-link to="/signup/profesionals">
            <Card>
                <template #header>
                    Soy Medico
                </template>
            </Card>
        </router-link>
    </div>
</template>