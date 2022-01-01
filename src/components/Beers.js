import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  StarFilled,
  StarOutlined,
  DeleteFilled,
  EditFilled,
} from "@ant-design/icons/lib/icons";
import { fetchDefaultResult } from "../api/punkbeerApi";
export default function Beers(props) {
  var count = 1;
  const cardStyle = {
    margin: "10px",
    width: "300px",
    dispaly: "flex",
    height: "250px",
  };
  function getSubData(data) {
    let sub = "";
    if (data.length > 200) {
      sub = data.substring(0, 99) + "...";
    } else sub = data;
    return sub;
  }
  function setfilled(i) {
    let newD = [...props.beers];
    newD[i].isFav = !newD[i].isFav;
    props.editBeersData(newD);
    props.addToFavs(newD[i]);
  }
  function deleteItem(i) {
    let newD = [...props.beers];
    newD.splice(i, 1);
    props.editBeersData(newD);
  }
  function editTitle(i) {
    let newD = [...props.beers];
    let newTite = prompt("Edit the Beer Title:", newD[i].name);
    newD[i].name = newTite;
    props.editBeersData(newD);
  }
  function editDesciption(i){
    let newD = [...props.beers];
    let newDesc = prompt("Edit the Beer Title:", newD[i].description);
    newD[i].description = newDesc;
    props.editBeersData(newD);
  }
  function BeerCards() {
    const card_list = props.beers.map((data, index) => (
      <Grid item data xs={12} sm={6} lg={3} xl={4} key={index}>
        <Card style={cardStyle}>
          <div>
            <b>{data.name}</b>
            <EditFilled
              style={{ color: "blue", margin: "5px" }}
              onClick={(e) => editTitle(index)}
            />
          </div>
          <div>{getSubData(data.description)}
          <EditFilled
              style={{ color: "green", margin: "5px" }}
              onClick={(e) => editDesciption(index)}
            /></div>
          {data.isFav ? (
            <StarFilled
              style={{ color: "yellow", fontSize: "20px" }}
              onClick={(e) => setfilled(index)}
            />
          ) : (
            <StarOutlined
              style={{ fontSize: "20px" }}
              onClick={(e) => setfilled(index)}
            />
          )}
          <DeleteFilled onClick={(e) => deleteItem(index)} />
        </Card>
      </Grid>
    ));
    return card_list;
  }
  useEffect(async () => {
    let result = await fetchDefaultResult(count)
     result.then( props.setBeersData(result))
   
  }, []);
  function searchBeers(count) {
    let result = fetchDefaultResult(count,)
     
    result.then( props.setBeersData(result))
  }
  function defaultBeers(count) {
      let result = fetchDefaultResult(count)
     
      result.then( props.setBeersData(result))
      
  }
  function setMore() {
      if(props.search){
        props.updateCount();
        console.log(props.count);
        searchBeers(props.count);
      }else{
        props.updateCount();
        console.log(props.count);
        defaultBeers(props.count); 
      }
   
  }
  return (
    <InfiniteScroll
      dataLength={props.beers.length} //This is important field to render the next data
      next={setMore}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <Grid container>
        <BeerCards />
      </Grid>
    </InfiniteScroll>
  );
}
