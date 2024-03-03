import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) =>{
    const{resData} = props;
    const{cloudinaryImageId,cuisines,avgRating,deliveryTime,costForTwo,name} = resData?.data
    return(
        <div className="res-card" style={{ backgroundColor:"#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={
              CDN_URL +
                cloudinaryImageId
            }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo/100}</h4>
            <h4>{deliveryTime} minutes</h4>

        </div>
    )
}

export default RestrauntCard;