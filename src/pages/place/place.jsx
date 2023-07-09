import { useParams } from "react-router"
import { useData } from "../../context/dataContext";
import placeCSS from "./placeContainer.module.css";
export const PlacePage=()=>{
    const {placeId,continent,country}=useParams();
    const {data}=useData();
    const place=data?.continents?.find(({name})=>name===continent).countries.find(({name})=>name===country).destinations?.find(({id})=>id===Number(placeId))
    return <>
    <h1>{place?.name}</h1>
    <div className={placeCSS?.container}>
        <div>
            <img src={place?.image} alt={place?.name}className={placeCSS.image}/>
        </div>
        <div>
            <p><span>Description: </span>{place?.description}</p>
            <p><span>Ratings: </span>{place?.ratings}</p>
            <p><span>Reviews: </span>{place?.reviews}</p>
            <p><span>Location: </span>{place?.location}</p>
            <p><span>Opening Hours: </span>{place?.openingHours}</p>
            <p><span>Ticket Price: </span>{place?.ticketPrice}</p>
            <a href={place?.website} target="_blank" rel="noreferrer">Website</a>
        </div>
    </div>
    </>
}