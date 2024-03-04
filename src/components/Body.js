import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () =>{
    const [listofRestraunts,setlistofRestraunts] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[]);
    //let listofRestraunts = []

    const fetchData = async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json  = await data.json();
        console.log(json);
        //setlistofRestraunts(json?.data?.cards[2]?.data?.data?.cards)
        
    }

    return(
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
                listofRestraunts.map((restraunt)=>(<RestrauntCard key={restraunt.data.id} resData={restraunt}/>))
             }
                
                
            </div>
        </div>
         
    )
}

export default Body;