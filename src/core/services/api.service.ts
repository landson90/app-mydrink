import { api } from "../axios/api";

class ApiService {
  static getCategory() {
    return api.get("/list.php?c=list");
  }
  static allDrinksByCategory(category: string) {
    return api.get(`/filter.php?c=Ordinary_Drink`);
    // return api.get(`?c=${catagory}`)
  }
}

export default ApiService;
