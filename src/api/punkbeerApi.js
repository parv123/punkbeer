var BASE_URL = `https://api.punkapi.com/v2/beers`
async function fetchSearchResult(count,str){
const response = await fetch(`${BASE_URL}?beer_name=${str}?page=${count}&per_page=80`);

}
async function fetchDefaultResult(count){

}