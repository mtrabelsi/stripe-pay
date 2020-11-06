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
  url: `https://open-prox.herokuapp.com/https://meat2door.co.uk`,
  consumerKey: "ck_bd578813ea5024895fc5e7cfe66d8c76d9702d21",
  consumerSecret: "cs_02ccea1bc420f798a461f40a6a98a7ba0972fa83",
  version: "wc/v3"
});