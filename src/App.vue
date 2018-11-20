<template>
  <div id="app">
    <!--<div v-if="authenticated">bla-bla</div>-->
    <router-view @authenticated="setAuthenticated"/>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                registered: true,
                account: {
                    username: "user1",
                    password: "123123"
                },
            }
        },

        methods: {
            mounted() {
                if(!this.authenticated) {
                    this.$router.replace({ name: "login" });
                }
            },
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
  body {
    margin: 0;
    font-family: "Arial";
  }
</style>

<style lang="scss">
  @import 'styles/style.scss';
</style>
