import { axiosInstance } from "../Api/axios/axiosHandler";

class ApiFeature {
  constructor(apiInstance) {
    this.api = apiInstance;
  }
  async request(endpoint, payload) {
    const { data, msg, count } = await this.api
      .post(endpoint, payload)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
    return { data, msg, count };
  }
}

const api = new ApiFeature(axiosInstance);

const apiEndpoints = Object.freeze({
  CREATE_CLIENT: "/clients/create",
  GET_ALL_CLIENTS: "/clients/getAll",
  GET_CLIENT_BY_ID: "/clients/getById",
  CREATE_PROJECTS: "/projects/create",
  GET_ALL_PROJECTS: "/projects/getAll",
  GET_PROJECT_BY_ID: "/projects/getById",
  UPDATE_PROJECT: "/projects/update",
});

export { api, apiEndpoints };
