var BASE_URL = `https://api.punkapi.com/v2/beers`
async function fetchSearchResult(count,str){
const response = await fetch(`${BASE_URL}?beer_name=${str}?page=${count}&per_page=80`);
const out = await response.json();
return out;

}
async function fetchDefaultResult(count){
    const response = await fetch(`${BASE_URL}?page=${count}&per_page=80`);
    const out = await response.json();
    return out;
}
export {fetchDefaultResult,fetchSearchResult}