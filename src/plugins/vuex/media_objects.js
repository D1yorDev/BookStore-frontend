import axios from "./axios";

export default {
    actions: {
        deleteFile(context, fileId) {
            return new Promise((resolve, reject) => {
                axios
                    .delete(
                        "/media_objects/" +
                        fileId.replace("/api/media_objects/", "")
                    )
                    .then(() => {
                        resolve();
                    })
                    .catch(() => {
                        console.log("delete file failed");
                        reject();
                    });
            });
        },
        pushFile(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("http://localhost:8888/api/media_objects", data, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then((response) => {
                        context.commit("updateMedia", response.data);

                        resolve();
                    })
                    .catch(() => {
                        console.log("create  media object failed");
                        reject();
                    })
            });
        },
    },
    mutations: {
        updateMedia(state, media) {
            state.media.id = media["@id"];
        },
    },
    state: {
        media: {
            id: "",
        },
    },
    getters: {
        getMedia(state) {
            return state.media.id;
        },
    },
};
