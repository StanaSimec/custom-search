"use strict";

import {sanitizeInput, sanitizeLink} from "../sanitize/sanitizer";

export function createWebsView(data) {
    const copyData = {...data};
    const items = copyData.items;
    let webs = '';
    for (let index = 0; index < 5; index++) {
        const item = items[index];
        const title = sanitizeInput(item.title);
        const link = sanitizeLink(item.link);
        const snippet = sanitizeInput(item.snippet);
        webs += `<div class="web-item">
            <p class="web-name">${title}</p>
            <a class="web-link" href=${link}>${link}</a>
            <p class="web-description">${snippet}</p>
            </div>`;
    }
    return webs;
}

export function createImagesView(data) {
    const copyData = {...data};
    const items = copyData.items;
    let images = [];
    for (let item of items) {
        const alt = sanitizeInput(item.snippet);
        const link = sanitizeLink(item.link);
        images.push(`<img src=${link} alt=${alt}>`);
    }
    return images;
}
