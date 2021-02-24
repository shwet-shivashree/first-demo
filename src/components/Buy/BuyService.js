import axios from "axios";

const BUY_URL = "http://localhost:8582/api/buyPolicy";

class BuyService {
  buyPolicy(form) {
    return axios.post(BUY_URL, form);
  }
}
export default new BuyService();
