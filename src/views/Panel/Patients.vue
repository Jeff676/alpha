<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { FilterMatchMode, FilterOperator } from 'primevue/api'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button';


const columns = [
    {
        field: 'id',
        header: 'Cedula'
    },
    {
        field: 'name',
        header: 'Nombre y Apellido'
    },
    {
        field: 'age',
        header: 'Edad'
    },
    {
        field: 'Dx',
        header: 'último Diágnostico'
    },
]

const filters = ref({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
    'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'birthday': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
})

const patients = [
    {
        id: '15258369',
        name: 'Emmet Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '26258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '32258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '44258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '65258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '75258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '82258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '95258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '96258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '14258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '98258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '99258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '14258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '14258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '14258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '14258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '14258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '14258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '14258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '14258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '14258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '14258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '14258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
    {
        id: '14258369',
        name: 'John Smith',
        age: 54,
        Dx: 'Colecistectomia aguda'
    },
]

</script>

<template>
    <div class="flex flex-column">
        <DataTable :value="patients" tableStyle="min-width: 90vw" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]"
            scrollable scrollHeight="70vh" v-model:filters="filters" dataKey="id" filterDisplay="row"
            :globalFilterFields="['id', 'name', 'Dx']"
            class="p-datatable-sm mt-2">

            <template #header>
                <div class="flex justify-content-between align-items-center">
                    <span class="text-2xl">Pacientes</span>
                    <div class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="Buscar Paciente" />
                    </div>
                </div>
            </template>
            <Column header="Image">
                <template #body="slotProps">
                    <img src="https://img.freepik.com/vector-premium/icono-perfil-avatar_188544-4755.jpg?w=2000"
                        class="shadow-4" width="64" />
                </template>
            </Column>
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" sortable></Column>
           
            <Column :exportable="false" style="width: 3rem" header="Historia">
                <template #body="slotProps" class="flex justify-content-center">
                    <Button class="p-button-rounded" @click="medicalRecord(slotProps.data)" v-tooltip="{value: 'Ver Historia'}">
                        <font-awesome-icon icon="clipboard-user" />
                    </Button>
                </template>
            </Column>
        </DataTable>
    </div>
</template>