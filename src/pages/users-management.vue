<template>

    <div class="inner-page-wrapper">
        <Sidebar />

        <div class="content-page">
            <Header />
            <div class="main-content">


            </div>
        </div>

    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import Sidebar from '../components/Sidebar.vue';

    export default {
        name: 'UsersManagement',
        components: {
            Header,
            Sidebar
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/pages/dashboard.scss';
    @import '../styles/pages/product-management.scss';
</style>