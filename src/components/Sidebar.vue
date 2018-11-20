<template>
    <div class="sidebar-box">
        <div class="title">Management Console</div>
       <!-- <ul>
            <li class="active"><a href="/">Dashboard</a></li>
            <li><a href="/">Products Management</a></li>
            <li><a href="/">User Management</a></li>
        </ul>-->
        <ul>
            <li><router-link to="/dashboard">Dashboard</router-link></li>
            <!--<li><router-link to="/product-management">Product Management</router-link></li>-->
            <li><router-link to="/products-management">Products Management</router-link></li>
            <li><router-link to="/users-management">Users Management</router-link></li>
            <li><router-link to="/login">Logout</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        components: {
        }
    }
</script>

<style lang="scss">
    @import '../styles/components/sidebar.scss';
</style>