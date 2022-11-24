const url = 'http://localhost:8080'

export async function getAll(resource) {
    return  fetch(url + '/'+ resource)
        .then(response => response.json())
}