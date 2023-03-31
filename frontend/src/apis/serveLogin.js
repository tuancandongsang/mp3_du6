import { request } from "./apiCore.js";

export const setLogin = (params) => {
  return request({
    url: "/authentication/login",
    method: "POST",
    data: {...params}
  });
};
