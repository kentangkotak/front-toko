import { boot } from "quasar/wrappers";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const SERV = "http://localhost:8080/toko/belakang/public";
const SERVER = SERV + "/api";
const api = axios.create({ baseURL: SERVER });
api.defaults.headers.get.Accepts = "application/json";

const pathImg = SERV + "/storage/";

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$SERVER = SERVER;
  app.config.globalProperties.$SERV = SERV;
  app.config.globalProperties.$pathImg = pathImg;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}
const deleteToken = () => delete api.defaults.headers.common.Authorization

export { api, setToken, deleteToken };
