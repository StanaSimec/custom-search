"use strict";

import {API_KEY} from "../config/index";
import {CX_KEY} from "../config/index";
import {handleErrors} from "../error/errrorHandler";

export function getWebs(query) {
    const WEB_URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX_KEY}&q=${query}`;
    return fetch(WEB_URL)
        .then(handleErrors)
        .then(response => response.json())
}

export function getImages(query) {
    const IMG_URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX_KEY}&q=${query}&searchType=image&imgSize=medium`;
    return fetch(IMG_URL)
        .then(handleErrors)
        .then(response => response.json());
}
