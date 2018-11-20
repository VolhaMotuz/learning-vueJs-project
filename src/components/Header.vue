<template>
    <header>
        <div class="number">1</div>
        <div class="name">{{username}}</div>
    </header>
</template>

<script>

    export default {
        name: 'Header',
        components: {

        },
        data () {
            return {
                username: localStorage.username
            }
        },
        props: [
        'userName'
        ]


    }
</script>

<style lang="scss">
    @import '../styles/components/header.scss';
</style>