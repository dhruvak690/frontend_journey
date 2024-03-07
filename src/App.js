import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";


//const heading = React.createElement("h1",{id:"heading"},"first step");

//const elem = <h1>react element</h1>

/* const Title =() => (
<h1 className="head" tabIndex="5">
    First Step
</h1>
    
);

const Heading = () =>(
<div id="container">
    {Title()}
 <h1 className="heading">First heading component</h1>
</div>
); */



// const resObj = {
//     info: {
//     id: "39292",
//     name: "KFC",
//     cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
//     locality: "Huda Market",
//     areaName: "Sector 14",
//     costForTwo: "₹450 for two",
//     cuisines: [
//     "Burgers",
//     "Biryani",
//     "American",
//     "Snacks",
//     "FastFood",
//     ],
//     avgRating: 4.1,
//     parentId: "547",
//     avgRatingString: "4.1",
//     totalRatingsString: "10K+",
//     sla: {
//     deliveryTime: 25,
//     lastMileTravel: 3,
//     serviceability: "SERVICEABLE",
//     slaString: "25-30 mins",
//     lastMileTravelString: "3.0 km",
//     iconType: "ICON_TYPE_EMPTY"
//     },
//     availability: {
//     nextCloseTime: "2024-03-03 03:00:00",
//     opened: true
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//     entityBadges: {
//     imageBased: {},
//     textBased: {},
//     textExtendedBadges: {}
//     }
//     },
//     aggregatedDiscountInfoV3: {
//     header: "20% OFF",
//     subHeader: "UPTO ₹50"
//     },
//     differentiatedUi: {
//     displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     differentiatedUiMediaDetails: {
//     mediaType: "ADS_MEDIA_ENUM_IMAGE",
//     lottie: {},
//     video: {}
//     }
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {}
//     },
//     analytics: {},
//     cta: {
//     link: "https://www.swiggy.com/restaurants/kfc-huda-market-sector-14-gurgaon-39292",
//     type: "WEBLINK"
//     },
    
//     }


    
        







const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
        ],
        errorElement:<Error/>,
    },
   
])




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
