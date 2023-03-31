import { request } from "./apiCore.js";

export const getSinger = (params) => {
  return request({
    url: "/api/singers/getSingerList",
    method: "POST",
    data: {...params}
  });
};
