import { api } from "../axios/api";

class ApiService {
  static getCategory() {
    return api.get("?c=list");
  }
}

export default ApiService;
