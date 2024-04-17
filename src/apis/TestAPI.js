import axios from "axios";

const BASE_URL = `http://${process.env.REACT_APP_MUSIXTREAM_BACKEND_SERVICE}/`;

const TestAPI = {
    test: () => axios.get(BASE_URL)
        .then(response => response.data),
    log: () => console.log(`Base URL is ${BASE_URL}`)
};

export default TestAPI;