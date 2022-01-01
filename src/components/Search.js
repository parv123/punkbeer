import { PropertySafetyFilled } from "@ant-design/icons/lib/icons";
import { useState } from "react";
function Search(props) {
  const [search, setSearch] = useState("");
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  function searchBeers() {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${search}`)
    .then(response => response.json())
    .then(out=>{
        props.setBeersData(out);
    })
  }
  return (
    <div>
      <input
        value={search}
        onChange={handleSearch}
        placeholder="type here to search beers.."
      ></input>
      <button onClick={searchBeers}>Search</button>
    </div>
  );
}
export default Search;
