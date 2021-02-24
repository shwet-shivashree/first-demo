import axios from "axios";

const PREMIUM_URL = "http://localhost:8582/api/premium/calculatePremium";

class PolicyServices {
  calculatePremium(form) {
    return axios.post(PREMIUM_URL, form);
  }
}
export default new PolicyServices();
