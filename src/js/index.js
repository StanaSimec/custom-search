"use strict";

import {getImages, getWebs} from "./service/service";
import {createImagesView, createWebsView} from "./view/view";
import {COLUMNS_IN_IMAGES, IMAGES_PER_COLUMN} from "./config/index";
import {parseErrorStatus} from "./error/errrorHandler";
import {sanitizeInput} from "./sanitize/sanitizer";
import {validateQuery} from "./validate/validate";

document.querySelector('.search-form')
    .addEventListener("submit", event => {
            event.preventDefault();
            const input = document.getElementById('searchInput').value;
            try {
                validateQuery(input);
                const query = sanitizeInput(input);
                updateImages(query);
                updateWebs(query);
            } catch (error) {
                document.querySelector('.errors').innerHTML = error;
            }
        }
    );


function updateWebs(query) {
    getWebs(query)
        .then(response => setWebResults(response))
        .catch(error => displayError(error.message));
}

function updateImages(query) {
    getImages(query)
        .then(response => setImageResults(response))
        .catch(error => displayError(error.message));
}

function setWebResults(webs) {
    document.querySelector('.webs').innerHTML = createWebsView(webs);
}

function setImageResults(images) {
    const imagesView = createImagesView(images);
    for (let column = 0; column < COLUMNS_IN_IMAGES; column++) {
        const start = column * IMAGES_PER_COLUMN;
        const end = start + IMAGES_PER_COLUMN;
        document.getElementsByClassName('image-column')[column].innerHTML = imagesView.slice(start, end).join("");
    }
}

export function displayError(error) {
    document.querySelector('.errors').innerHTML = parseErrorStatus(error)
}

