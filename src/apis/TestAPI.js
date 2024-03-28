import axios from "axios";

const BASE_URL = "http://localhost:8080/";

const TestAPI = {
    test: () => axios.get(BASE_URL)
        .then(response => response.data)
};

export default TestAPI;