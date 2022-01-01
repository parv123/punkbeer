import { PropertySafetyFilled } from "@ant-design/icons/lib/icons";
import { useState } from "react";
import { fetchSearchResult } from "../api/punkbeerApi";
import "../css/style.css";
function Search(props) {
  async function searchBeers() {
    if (props.value) {
      props.resetCount();
      let result = await fetchSearchResult(props.value);
      await props.editBeersData(result);
      await props.updateSearch(true);
    } else props.updateSearch(false);
  }
  return (
    <div>
      <input
        value={props.value}
        onChange={(e) => props.setSearchValue(e.target.value)}
        placeholder="search for beer.."
      ></input>
      <button onClick={searchBeers}>Search</button>
    </div>
  );
}
export default Search;
