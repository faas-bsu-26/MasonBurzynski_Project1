<script setup>
    import Button from "primevue/button" 

    import { createApp } from 'vue';
    // import PrimeVue from 'primevue/config';
    import Aura from '@primeuix/themes/aura';

    const app = createApp(App);
    app.component('Button', Button);
    app.use(PrimeVue, {
        theme: {
            preset: Aura
        }
    });

</script>

<template>
    <div>
        <div>
        {{ props.user }}
        </div>
        {{ props.content }}
    </div>
    
</template>

<style scoped>

</style>