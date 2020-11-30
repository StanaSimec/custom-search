export function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.status);
    }
    return response;
}

export function parseErrorStatus(status) {
    switch (status) {
        case "400":
            return "Expired api key or engine id."
        case "403":
            return "Request was forbidden. Try it later or contact administrator."
        case "429":
            return "Too many requests. Wait a moment please."
        case "500":
            return "Internal server error, try it later or contact administrator."
        default:
            return `There was an internal error, try it later or contact administrator. Status: ${status}`;
    }
}
