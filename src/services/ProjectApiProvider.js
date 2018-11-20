export default {
    getProjectList() {
        return fetch('./data.json')
            .then((response) => {
                return response.text()
            })
            .then((data) => {
                return JSON.parse(data);
            });
    },
    getProject(projectId) {
        return fetch('./data.json')
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                return JSON.parse(data);
            })
            .then((response) => {

                for(let item of response) {
                    //console.log(item);
                    if (projectId == item.id) {
                        return item;
                    }
                }

                throw new Error('Project not found');
        });
    }

};






