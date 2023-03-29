export const getRequest = (url, method) =>{
    return fetch(url, {
        method:method
    }).then((response) =>{
        return response.json()
    }).catch((error) => console.log(error))
}