
function Favourites(){
    const fav_items = JSON.parse(sessionStorage.fav_beer);
    function FavBeerCards(){
        const card_list = fav_items.map((data,index)=>(
            <div key={index} bordered={false} style={{ width: 300 }}>
                <div><b>{data.name}</b></div>
                <div>{data.description}</div>
            </div>
        ))
   return card_list;
    }
return (
<FavBeerCards />
);
}
export default Favourites