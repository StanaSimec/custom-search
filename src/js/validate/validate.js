import {ENCODE_MAP} from "../config";

export function validateQuery(input) {
    if (typeof input !== "string") {
        throw "Input must be string";
    }
    if (input.length < 1) {
        throw "Input length must be greater than 1";
    }
    if (input.length > 40) {
        throw "Input length must be shorter than 40";
    }
    const sanitized = removeEncoded(input);
    if (sanitized.length < 1) {
        throw "Input length without special characters must be greater than 1.";
    }
}

function removeEncoded(input) {
    const encoder = {...ENCODE_MAP};
    const inputArray = input.split("");
    const filteredArray = inputArray.map(item => {
        if (!(item in encoder)) {
            return item;
        }
    });
    return filteredArray.join("");
}
