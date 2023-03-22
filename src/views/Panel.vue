<script setup>
    import Chip from 'primevue/chip'

    const items = [
        {
            icon: 'fa-solid fa-user-injured',
            tooltip: 'Pacientes',
            to: '/patients'
        },
        {
            icon: 'fa-solid fa-user-doctor',
            tooltip: 'Médicos',
            to: '/doctors'
        },
        {
            icon: 'fa-solid fa-user-nurse',
            tooltip: 'Enfermería',
            to: '/nurses'
        },
        {
            icon: 'fa-solid fa-users',
            tooltip: 'Usuarios',
            to: '/users'
        },
        {
            icon: 'fa-regular fa-hospital',
            tooltip: 'Centros Médcios',
            to: '/medicalcenters'
        },
        {
            icon: 'fa-solid fa-chart-pie',
            tooltip: 'Indicadores',
            to: '/kpis'
        },
    ]

</script>


<template>
    <div class="flex align-items-stretch flex-wrap">
        <!-- *** TITLE *** -->
        <div class="title-bar item flex align-items-center justify-content-between font-bold text-white w-full gap-0 border-round-top-xl">
            <img src="@/assets/LOGO_XL.png" class="max-h-3rem ml-5">
            <!-- <Chip label="Amy Elsner" image="/images/avatar/amyelsner.png"/> -->
            <Chip label="Nombre del usuario" icon="pi pi-user" class="m-3"/>
        </div>

        <!-- *** ASIDE PANEL *** -->
        <div class="aside-panel item flex flex-column font-bold text-white" style="min-width: 5%; min-height: 100px">
            <!-- *** OPTIONS *** -->
            <div  v-for="item in items">
                <router-link :to="item.to">
                    <a href="#" class="text-white">
                        <div class="flex justify-content-center py-5 text-xl hover:surface-600" v-tooltip="{ value: item.tooltip}">
                            <font-awesome-icon :icon="item.icon" size="xl"/>
                        </div>
                    </a>
                </router-link>
            </div>
        </div>

        <!-- *** PANEL *** -->
        <div class="panel item flex align-items-start justify-content-center font-bold text-white "
            style="min-width: 95%; min-height: 88vh;">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scope>
.item {
    margin: 0 !important;
}

.title-bar {
    background-color: #3d434f;
}

.aside-panel {
    background-color: #7797b5;
    border-bottom-left-radius: 0.75rem;
}

.panel {
    background-color: #e9ecef;
    border-bottom-right-radius: 0.75rem;
}
</style>