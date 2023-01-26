export const getRequest = (url) => {
    return fetch(url)
        .then(response => {
            if (response.ok()) {
                return response.json();
            }
            return response.json().then(error =>{
                throw new Error(error.error)
            })
        })
}
  