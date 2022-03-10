import { api } from "../axios/api";

class ApiService {
  static getCategory() {
    return api.get("/list.php?c=list");
  }
  static allDrinksByCategory(category: string) {
    return api.get(`/filter.php?c=${category}`);
  }
  static findByDrink(id?: string) {
    return api.get(`/lookup.php?i=${id}`);
  }
}

export default ApiService;
