<script setup>
    import Card from 'primevue/card'

    const props = defineProps({
        icon: String,
        title: String,
        content: String
    })

</script>


<template>
    <div class=" col-3 flex align-items-center justify-content-center" style="height: 350px;">
        <Card style="background-color: transparent;" class="shadow-none">
            <template #content>
                <div class="text-center">
                    <font-awesome-icon :icon="`${props.icon}`" size="4x" class="text-500"/>
                    <br>
                    <h3 class="m-5">{{ props.title }}</h3>
                    <p class="mt-5">
                        {{ props.content }}
                    </p>
                </div>
            </template>
        </Card>
    </div>
</template>