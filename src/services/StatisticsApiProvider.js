export default {
    getStatistics () {
        return fetch('./statisticsData.json')
            .then((response) => {
                return response.text()
            })
            .then((data) => {
                return JSON.parse(data);
            });
    }
};






