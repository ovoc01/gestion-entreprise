import axios from 'axios';



export async function getServices() {
    try {
        const response = await axios.get('http://localhost:4089/api/services');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getContrats() {
    try {
        const response = await axios.get('http://localhost:4089/api/contrats');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function addAnnonce(formData) {
    try {
        console.log(formData)
        const response = await axios.post('http://localhost:4089/api/annonces', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: [(data, headers) => {
                const formData = new FormData();
                for (const key in data) {
                    formData.append(key, data[key]);
                }
                return formData;
            }]
        });
        
        return response;
    } catch (error) {
        console.log(error);
        return error.response;
    }
}
