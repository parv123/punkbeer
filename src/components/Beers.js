import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import "../css/style.css";
import {
  StarFilled,
  StarOutlined,
  DeleteFilled,
  EditFilled,
} from "@ant-design/icons/lib/icons";
import { fetchDefaultResult, fetchSearchResult } from "../api/punkbeerApi";
export default function Beers(props) {
  var count = 1;
  const cardStyle = {
    margin: "20px",
    width: "350px",
    dispaly: "flex",
    height: "250px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
  function editDesciption(i) {
    let newD = [...props.beers];
    let newDesc = prompt("Edit the Beer Description:", newD[i].description);
    newD[i].description = newDesc;
    props.editBeersData(newD);
  }
  function BeerCards() {
    const card_list = props.beers.map((data, index) => (
      <Grid item data xs={12} sm={6} lg={4} xl={4} key={index}>
        <Card style={cardStyle}>
          {data.isFav ? (
            <StarFilled
            className="starIcon"
              style={{ color: "yellow", fontSize: "20px" }}
              onClick={(e) => setfilled(index)}
            />
          ) : (
            <StarOutlined
              className="starIcon"
              style={{ fontSize: "20px" }}
              onClick={(e) => setfilled(index)}
            />
          )}
          <div className="left">
            <img src={data.image_url} />
          </div>
          <div className="right">
            <div>
              <b>{data.name}</b>
              <EditFilled
                style={{ color: "blue", margin: "5px" }}
                onClick={(e) => editTitle(index)}
              />
            </div>

            <div>
              {getSubData(data.description)}
              <EditFilled
                style={{ color: "green", margin: "5px" }}
                onClick={(e) => editDesciption(index)}
              />
            </div>
          </div>
          <DeleteFilled
            style={{
              color: "red",
              fontSize: "20px",
              position: "relative",
              marginLeft: "90%",
              marginTop: "80px",
            }}
            onClick={(e) => deleteItem(index)}
          />
        </Card>
      </Grid>
    ));
    return card_list;
  }
  useEffect(async () => {
    let result = await fetchDefaultResult(count);
    await props.setBeersData(result);
  }, []);
  async function defaultBeers(count) {
    let result = await fetchDefaultResult(count);
    await props.setBeersData(result);
  }
  function setMore() {
    if (!props.search) {
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
      <Grid style={{ marginLeft: "30px" }} container>
        <BeerCards />
      </Grid>
    </InfiniteScroll>
  );
}
