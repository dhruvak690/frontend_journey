import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    const [listofRestraunts,setlistofRestraunts] = useState([]);
    
    
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
        
    }

   

    return listofRestraunts.length === 0 ?(<Shimmer/>):(
        <div className="Body">
            <div className="filter">
             <button 
             className="filter-btn" 
             onClick={()=>{
                    const filteredlist = listofRestraunts.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setlistofRestraunts(filteredlist);
             }}
             >
                Top Rated Restaurants
            </button>
            </div>
            <div className="res-container">
             {
                listofRestraunts.map((restaurants)=>(<RestrauntCard key={restaurants.info.id} resData={restaurants}/>))
             }
                
                
            </div>
        </div>
         
    )
}

export default Body;