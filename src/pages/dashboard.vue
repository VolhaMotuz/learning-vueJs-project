<template>

    <div class="inner-page-wrapper">
        <Sidebar />

        <div class="content-page">
            <Header />
            <div class="main-content" v-if="loaded">
                <div class="card">
                    <div class="card__wrapper">
                        <div class="card__title">General Stats</div>
                        <div class="card__content">
                            <p>1st party: {{ staticsData.generalStates.firstParty }}</p>
                            <p>3rd party: {{ staticsData.generalStates.thirdParty }}</p>
                            <p>Total users: {{ staticsData.generalStates.totalUsers }}</p>
                            <p>Unique Devices: {{ staticsData.generalStates.uniqueDevices }}</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__wrapper">
                        <div class="card__title">DAU by platform</div>
                        <div class="card__content">
                            <p>iOS: {{ staticsData.platformDAU.ios }} (+5%)</p>
                            <p>Android: {{ staticsData.platformDAU.android }} (-20%)</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__wrapper">
                        <div class="card__title">MAU by platform</div>
                        <div class="card__content">
                            <p>iOS: {{ staticsData.platformMAU.ios }} (+5%)</p>
                            <p>Android: {{ staticsData.platformMAU.android }} (-20%)</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__wrapper">
                        <div class="card__title">In-App Purchases Performance</div>
                        <div class="card__content">
                            <div class="card__subtitle">Daily Revenue IAP</div>
                            <p>iOS: {{ staticsData.dailyRevenueIAP.ios }}$ (1,5$ avg. per unit) (+2%)</p>
                            <p>Android: {{ staticsData.dailyRevenueIAP.android }}$ (1,5$ avg. per unit) (-5%)</p>
                            <div class="card__subtitle">Monthly Revenue IAP</div>
                            <p>iOS: {{ staticsData.monthlyRevenueIAP.ios }}$ (1,5$ avg. per unit) (+2%)</p>
                            <p>Android: {{ staticsData.monthlyRevenueIAP.android }}$ (1,5$ avg. per unit) (-5%)</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__wrapper">
                        <div class="card__title">Advertising Performance</div>
                        <div class="card__content">
                            <div class="card__subtitle">Daily Impressions</div>
                            <p>iOS: {{ staticsData.dailyImpressions.ios }} (15 avg. per user) (+2%)</p>
                            <p>Android: {{ staticsData.dailyImpressions.android }} (10 avg. per user) (-5%)</p>
                            <div class="card__subtitle">Monthly Impressions</div>
                            <p>iOS: {{ staticsData.monthlyImpressions.ios }} (15 avg. per user) (+2%)</p>
                            <p>Android: {{ staticsData.monthlyImpressions.android }} (10 avg. per user) (-5%)</p>
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
    import StatisticsApiProvider from '../services/StatisticsApiProvider';

    export default {
        components: {
            Header,
            Sidebar
        },

        created() {
            StatisticsApiProvider.getStatistics()
                .then((response) => {
                    this.staticsData = response[0];
                    this.loaded = true;
                    console.log('this.staticsData');
                    console.log(this.staticsData);
                })
                .catch((err) => {
                    this.loaded = false;
                    console.error('error', err);
                })
        },
        data() {
            return {
                staticsData: [],
                loaded: false
            }
        }


    }
</script>

<style lang="scss" scoped>
    @import '../styles/pages/dashboard.scss';
</style>