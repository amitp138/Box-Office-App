 const API_BASE_URL="https://api.tvmaze.com"
export async function apiGet(queryString){
  const resultQuery=  fetch(`${API_BASE_URL}${queryString}`)
    .then(response => response.json())
    return resultQuery
}