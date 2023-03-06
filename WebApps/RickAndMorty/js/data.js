

export function getData(url) {
    return fetch(url).then(response => {
        // console.log(response);
        // console.log(response.json())
        return response.json();
    }).catch(error => {
        console.log(error);
    });
}