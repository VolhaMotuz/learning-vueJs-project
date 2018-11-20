<template>
    <div class="login-page-wrapper">
        <div class="login-wrapper">
            <div class="logo"><img src="../assets/logo.png" alt=""></div>
            <div class="title">Enter login ang password to continue</div>
            <form @submit.prevent="doLogin">
                <div class="form-row">
                    <input type="text" placeholder="Login" v-model="username" v-validate="'required'" name="username">
                    <span class="error-text" v-if="errors.has('username')">{{ errors.first('username') }}</span>
                </div>
                <div class="form-row">
                    <input type="password" placeholder="Password" v-model="password" v-validate="'required'" name="password">
                    <span class="error-text" v-if="errors.has('password')">{{ errors.first('password') }}</span>
                </div>

                <button class="button blue">Login!</button>

                <div v-if="!this.$parent.registered" class="regiser-message">Check your login and password. Are you registered?</div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods : {
            doLogin() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        if (this.username == this.$parent.account.username && this.password == this.$parent.account.password) {
                            this.$emit('username', this.username);
                            this.$emit("authenticated", true);
                            this.$router.replace({ name: "dashboard" });
                            this.$parent.registered = true;
                        } else {
                            this.$parent.registered = false;
                            //console.log("Username or password is incorrect");
                        }

                        //console.log(this.username);
                    } else {
                        //console.log("Successful login");
                    }
                })
            }

        },

        mounted() {
            if (localStorage.username) {
                this.username = localStorage.username;
            }
        },

        watch: {
            username(newUsername) {
                localStorage.username = newUsername;
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import '../styles/pages/login.scss';
</style>