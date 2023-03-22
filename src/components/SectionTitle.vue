<script setup>

const props = defineProps({
    mainTitle: String,
    sdTitle: String,
    mainNumber: String
})

</script>

<template>
    <div class="col-1 flex align-items-center justify-content-center vertical-title" style="height: 50px;">
        <div class="text-7xl">
            {{ mainNumber }}
        </div>
        <div>
            <div class="capitalize">
                {{ props.sdTitle }}
            </div>
            <div class="text-3xl uppercase">
                {{ props.mainTitle }}
            </div>
        </div>
    </div>

</template>

<style scoped>
.vertical-title {
    transform: translateY(0%) rotate(-90deg) !important;
}
</style>