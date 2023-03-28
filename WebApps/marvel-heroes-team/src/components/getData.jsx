export const getData = async url=> {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    // console.log(jsonResponse);
    return jsonResponse;
}