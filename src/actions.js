import axios from "./axios";

export async function getImages(images) {
    console.log("images in getIMages actions", images);
    return {
        type: "GET_IMAGES",
        images,
    };
}
