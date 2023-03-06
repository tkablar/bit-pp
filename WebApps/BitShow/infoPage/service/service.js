export function getBasicInfo(url) {
    return fetch(url).then(response => {
        // console.log(response);
        // console.log(response.json())
        return response.json();
    });
}
