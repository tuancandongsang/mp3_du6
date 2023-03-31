import { request } from "./apiCore.js";

export const getListSong = (params) => {
    return request({
        url: "api/songs/getSongList",
        method: "POST",
        data: { ...params }
    });
};
export const getSongByAlbumId = (params) => {
    return request({
        url: "/api/songs/getSongByAlbumId",
        method: "POST",
        data: { ...params }
    });
};
export const getSongBySingerId = (params) => {
    return request({
        url: "/api/songs/getSongBySingerId",
        method: "POST",
        data: { ...params }
    });
};
export const getSongById = (params) => {
    return request({
        url: "api/songs/getSongById",
        method: "POST",
        data: { ...params }
    });
};
export const addSong = (params) => {
    return request({
        url: "api/songs/addSong",
        method: "POST",
        data: { ...params }
    });
};

