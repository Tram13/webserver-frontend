import getRequestoptions from "../RequestOptions";

function patchSuggestion(suggestion) {
    const data = {
        author: suggestion.author,
        message: suggestion.message
    };
    const requestOptions = getRequestoptions('PATCH', data);
    return fetch(suggestion.url, requestOptions);
}

export default patchSuggestion;