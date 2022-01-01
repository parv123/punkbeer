import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Beers from "./components/Beers";
import Favourites from "./components/Favourites";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const [beers, setBeers] = useState([]);
  const [fav, setFavs] = useState([]);
  const [count, setCount] = useState(1);
  const [search, setSearch] = useState(false);
  const [val, setVal] = useState("");
  function setSearchValue(value) {
    setVal(value);
  }
  function updateSearch(bool) {
    setSearch(bool);
  }
  function updateCount() {
    let k = count + 1;
    setCount(k);
  }
  function resetCount(){
    setCount(1)
  }
  function addToFavs(val) {
    setFavs([...fav, val]);
    sessionStorage.setItem("fav_beer", JSON.stringify(fav));
  }
  function editBeersData(data) {
    setBeers(data);
  }
  function setBeersData(data) {
    let newD = beers;
    newD = [...newD, ...data];
    setBeers(newD);
  }
  useEffect(() => {
    sessionStorage.clear();
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Search
                setBeersData={setBeersData}
                updateSearch={updateSearch}
                editBeersData={editBeersData}
                value={val}
                setSearchValue={setSearchValue}
                resetCount={resetCount}
              />
              <Beers
                beers={beers}
                setBeersData={setBeersData}
                addToFavs={addToFavs}
                updateCount={updateCount}
                editBeersData={editBeersData}
                updateSearch={updateSearch}
                search={search}
                count={count}
                value={val}
              />
            </div>
          }
        ></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
