import ky from 'ky';

const baseUrl = 'http://localhost:7979/employee';

const api = {
    index() {
        return ky.get(baseUrl).json();
    }
}

export default api;