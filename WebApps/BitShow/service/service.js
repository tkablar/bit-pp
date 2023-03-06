export function getData(url) {
    return fetch(url).then(response => {
        // console.log(response);
        // console.log(response.json())
        return response.json();
    })
}

export function getResults(url) {
    return fetch(url).then(response => {
        return response.json();
    })
}