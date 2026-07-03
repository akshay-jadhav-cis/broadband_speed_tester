import api from "./axios";

export const startDownload = () => {

    return api.get("/download",{
        responseType:"stream"
    });

};