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
  url: `https://open-prox.herokuapp.com/http://209.182.233.89`,
  consumerKey: 'ck_205d47088af185a171f128821d9a19e154fa678e',
  consumerSecret: 'cs_ef4e5c2fe53c83ffaa1930dfe75595ea1113c3c9',
  version: "wc/v3"
});