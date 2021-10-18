import ky from 'ky';

const baseUrl = 'http://localhost:7979/employee';

const api = {
    update(payload, id) {
        return ky.put(`${baseUrl}/${id}`, { json: payload });
    },
}

export default api;