import { PropertySafetyFilled } from "@ant-design/icons/lib/icons";
import { useState } from "react";
import { fetchSearchResult } from "../api/punkbeerApi";
function Search(props) {
  const [val, setSearch] = useState("");
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  function searchBeers() {

  let result = fetchSearchResult(1,val)
  props.editBeerData(result);
  props.updateSearch();
  }
  return (
    <div>
      <input
        value={val}
        onChange={handleSearch}
        placeholder="type here to search beers.."
      ></input>
      <button onClick={searchBeers}>Search</button>
    </div>
  );
}
export default Search;
