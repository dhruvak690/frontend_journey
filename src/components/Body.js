import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    const [listofRestraunts,setlistofRestraunts] = useState([]);
    const [filteredRestraunt,setfilteredRestraunt] = useState([]);

    const [searchText,setsearchText] = useState("");

    console.log("Body rendered");
    
    useEffect(()=>{
        fetchData();
    },[]);
    //let listofRestraunts = []

    const fetchData = async () =>{
        const data = await fetch
        (
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json1  = await data.json();
        console.log(json1);

        setlistofRestraunts(json1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setfilteredRestraunt(json1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }

   

    return listofRestraunts.length === 0 ?(<Shimmer/>):(
        <div className="Body">
            <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
                }}/>
                <button onClick={()=>{
                    console.log(searchText);
                    const filteredRestraunt = listofRestraunts.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                    setfilteredRestraunt(filteredRestraunt);
                
                }}>Search</button>
            </div>
             <button 
             className="filter-btn" 
             onClick={()=>{
                    const filteredlist = listofRestraunts.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setfilteredRestraunt(filteredlist);
             }}
             >
                Top Rated Restaurants
            </button>
            </div>
            <div className="res-container">
             {
                filteredRestraunt.map((restaurants)=>(<RestrauntCard key={restaurants.info.id} resData={restaurants}/>))
             }
                
                
            </div>
        </div>
         
    )
}

export default Body;