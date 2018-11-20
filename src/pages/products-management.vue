<template>

    <div class="inner-page-wrapper">
        <Sidebar />

        <div class="content-page">
            <Header />
            <div class="main-content">
               <div class="filters">
                   <div class="filters__title">Filters</div>
                   <div class="filters__content" v-for="(party, index) in parties">
                       <div class="styling-checkbox-block">
                           <span>{{party}}</span>
                           <input v-bind:id="index" v-model="checkedParties" v-bind:value="party" type="checkbox" />
                           <label v-bind:for="index"></label>
                       </div>
                   </div>
               </div>

                <div class="button blue" v-on:click="goToNewProjet()">Register new product</div>

                <table v-if="projects && projects.length">
                    <tr>
                        <th>ID</th>
                        <th>Product Title</th>
                        <th>Platforms</th>
                        <th>Product UID</th>
                        <th>Actions</th>
                    </tr>
                    <tr v-for="(project, index) in filteredProjects">
                        <td>{{ project.id }}</td>
                        <td>{{ project.title }}</td>
                        <td>
                            <span v-for="platform in project.platforms">{{ platform }}  </span>
                        </td>
                        <td>{{ project.UID }}</td>
                        <td><span v-on:click="showProduct(project.id)" class="show">show</span></td>
                    </tr>
                </table>

            </div>
        </div>

    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import Sidebar from '../components/Sidebar.vue';
    import ProjectApiProvider from '../services/ProjectApiProvider';

    export default {
        name: 'ProductsManagement',
        components: {
            Header,
            Sidebar
        },
        created() {
            ProjectApiProvider.getProjectList()
                .then((response) => {
                    this.projects = response;
                    this.projects.push(JSON.parse(localStorage.newProjectsArray));
                })
                .catch((err) => {
                    console.error('error', err);
                })
        },
        data() {
            return {
                projects: [],
                parties: ['1st Party', '3rd Party'],
                checkedParties: []
            }
        },
        computed:{
            filteredProjects(){
                if (!this.checkedParties.length)
                    return this.projects;
                    return this.projects.filter(p => this.checkedParties.includes(p.party))
            }
        },
        methods: {
            showProduct(index) {
                this.$router.replace({ path: '/product-management/' + index });
            },
            goToNewProjet() {
                this.$router.replace({ path: '/new-product' });
            }
        },
        props: ['newProjectData']
    }
</script>

<style lang="scss" scoped>
    @import '../styles/pages/products-management.scss';
</style>