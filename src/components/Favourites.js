import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import Header from "./Header";
import "../css/style.css";

function Favourites() {
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
  const fav_items = JSON.parse(sessionStorage.fav_beer);
  function FavBeerCards() {
    const card_list = fav_items.map((data, index) => (
      <Grid item data xs={12} sm={6} lg={4} xl={4} key={index}>
        <Card style={cardStyle}>
          <div className="left-fav">
            <img src={data.image_url} />
          </div>
          <div className="right-fav">
            <div>
              <b>{data.name}</b>
            </div>

            <div>{getSubData(data.description)}</div>
          </div>
        </Card>
      </Grid>
    ));
    return card_list;
  }
  return (
    <div>
      <Header />
      <Grid style={{ marginLeft: "30px" }} container>
        <FavBeerCards />
      </Grid>
    </div>
  );
}
export default Favourites;
