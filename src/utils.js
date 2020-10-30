import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const getAuthHeaders = async () => {
    const userInfo = localStorage.getItem('_cap_LOGGED_USER')
    return {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Content-Type': 'application/json'
      }
    }
}

export const api = new WooCommerceRestApi({
  url: `https://open-prox.herokuapp.com/http://209.182.233.89/`,
  consumerKey: "ck_7090ca50db0fe58aea5b9e85aa0559303d96865d",
  consumerSecret: "cs_7f3df8c86d65e0c6e6c589b063f69b09d43b19ef",
  version: "wc/v3"
});