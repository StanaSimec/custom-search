import {ENCODE_MAP} from "../config";

export function sanitizeInput(word) {
    const encoder = {...ENCODE_MAP};
    const inputArray = word.split("");
    const filteredArray = inputArray.map(item => {
        if (item in encoder) {
            return encoder[item];
        }
        return item;
    });
    return filteredArray.join("");
}

export function sanitizeLink(link) {
    return typeof link === "string" ? link : 'https://cdn.pixabay.com/photo/2016/02/06/09/38/hazard-1182704_1280.jpg';
}
