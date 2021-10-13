import ky from "ky";

const baseUrl = "http://localhost:7979/employee";

const api = {
  index() {
    return ky.get(baseUrl).json();
  },

  update(payload, id) {
    return ky.put(`${baseUrl}/${id}`, { json: payload });
  },
};

export default api;
