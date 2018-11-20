<template>
    <div class="content-wrapper">
        <Header />
        <div class="main-content">
            main dashboard
        </div>
    </div>
</template>

<script>

    import Header from './Header.vue';

    export default {
        name: 'Dashboard',
        components: {
            Header
        }
    }
</script>

<style>

</style>