<template>
    <div class="inner-page-wrapper">
        <Sidebar />

        <div class="content-page">
            <Header />
            <div class="main-content">

                <form @submit.prevent="createProject">
                    <div class="form-row">
                        <div class="title">Product Title: </div>
                        <input type="text" placeholder="Enter Product Title" v-model="title" v-validate="'required'" name="title">
                        <span class="error-text" v-if="errors.has('title')">{{ errors.first('title') }}</span>
                    </div>
                    <div class="form-row">
                        <div class="title">Product Platforms: </div>

                        <div class="styling-checkbox-block">
                            <span>iOS </span>
                            <input id="ios" v-model="platforms" value="iOS" type="checkbox" />
                            <label for="ios"></label>
                        </div>
                        <div class="styling-checkbox-block">
                            <span>Android </span>
                            <input id="android" v-model="platforms" value="Android" type="checkbox" />
                            <label for="android"></label>
                        </div>

                    </div>
                    <div class="form-row">
                        <div class="title">Product UID: </div>
                        <input type="text" placeholder="Enter Unique Product identifier" v-model="UID" v-validate="'required'" name="UID">
                        <span class="error-text" v-if="errors.has('UID')">{{ errors.first('UID') }}</span>
                    </div>
                    <div class="form-row">
                        <div class="title">1st/3rd party:</div>
                        <div class="styling-checkbox-block">
                            <span>1st Party </span>
                            <input id="ios-radio" v-model="party" value="iOS" type="radio" />
                            <label for="ios-radio"></label>
                        </div>
                        <div class="styling-checkbox-block">
                            <span>3rd Party </span>
                            <input id="android-radio" v-model="party" value="Android" type="radio" />
                            <label for="android-radio"></label>
                        </div>

                    </div>

                    <button class="button blue">Create product</button>
                </form>

            </div>
        </div>

    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import Sidebar from '../components/Sidebar.vue';
    //import ProjectApiProvider from '../services/ProjectApiProvider';

    export default {
        name: 'NewProduct',
        components: {
            Header,
            Sidebar
        },
        data() {
            return {
                title: '',
                UID: '',
                platforms: [],
                party: false
            }

        },
        methods : {
            createProject() {

                this.$validator.validateAll().then((result) => {
                    if (result) {
                        let newProjectData =
                            {
                                "id": 3,
                                "title": this.title,
                                "UID": this.UID,
                                "platforms": this.platforms,
                                "party": this.party
                            };

                        this.$router.replace({ path: '/products-management' });
                        localStorage.newProjectsArray = JSON.stringify(newProjectData);

                    } else {
                        console.log("failure");
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/pages/dashboard.scss';
    @import '../styles/pages/new-product.scss';
</style>