import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";

const Body = () =>{
    return(
        <div className="Body">
            <div className="filter">
             <button className="filter-btn" 
             onClick={()=>{
                    resList = resList.filter((res)=>res.data.avgRating > 4
                    );
                    console.log(resList);
             }}>
                Top Rated Restaurants</button>
            </div>
            <div className="res-container">
             {
                resList.map((restraunt)=><RestrauntCard key={restraunt.data.id} resData={restraunt}/>)
             }
                
                
            </div>
        </div>
         
    )
}

export default Body;