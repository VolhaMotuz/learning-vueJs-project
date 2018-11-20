<template>

    <div class="inner-page-wrapper">
        <Sidebar />

        <div class="content-page">
            <Header />
            <div class="main-content" v-if="loaded">
                <div class="main-content__title">{{ project.title }} Dashboard</div>
                <div class="data-box">
                    <div class="data-box__left">
                        <div class="info">
                            <span class="info__title">Product Title: </span> {{ project.title }}
                        </div>
                        <div class="info">
                            <span class="info__title">Product Platforms: </span>
                            <div v-for="(platform, index) in project.platforms">
                                {{ platform }}
                            </div>
                        </div>
                        <div class="info">
                            <span class="info__title">Product UID: </span> {{ project.UID }}
                        </div>
                    </div>
                    <div class="data-box__right">
                        <div class="card">
                            <div class="card__wrapper">
                                <div class="card__title">General Stats</div>
                                <div class="card__content">
                                    <p>Total users: {{ project.totalUsers }}</p>
                                    <p>Unique Devices: {{ project.uniqueDevices }}</p>
                                    <p>Current Version: {{ project.currentVersion }}</p>
                                    <p>In-App Purchase Packages: {{ project.purchasePackages }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card__wrapper">
                                <div class="card__title">MAU by platform</div>
                                <div class="card__content">
                                    <p>iOS: {{ project.platformsStatistics.iosMau }} ({{ project.platformsStatistics.iosDiffMAU }}%)</p>
                                    <p>Android: {{ project.platformsStatistics.androidMAU }} ({{ project.platformsStatistics.androidDiffMAU }}%)</p>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card__wrapper">
                                <div class="card__title">DAU by platform</div>
                                <div class="card__content">
                                    <p>iOS: {{ project.platformsStatistics.iosDau }} ({{ project.platformsStatistics.iosDiffDAU }}%)</p>
                                    <p>Android: {{ project.platformsStatistics.androidDAU }} ({{ project.platformsStatistics.androidDiffDAU }}%)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import Sidebar from '../components/Sidebar.vue';
    import ProjectApiProvider from '../services/ProjectApiProvider';

    export default {
        name: 'ProductManagement',
        components: {
            Header,
            Sidebar
        },
        created() {
            ProjectApiProvider.getProject(this.productId)
                .then((response) => {
                    this.project = response;
                    console.log(response);
                    this.loaded = true;
                })
                .catch((err) => {
                    this.loaded = false;
                    console.error('error', err);
                })
        },
        data() {
            return {
                project: [],
                productId: this.$route.params.id,
                loaded: false

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/pages/dashboard.scss';
    @import '../styles/pages/product-management.scss';
</style>