import { useParams, useNavigate } from "react-router";
import { useData } from "../../context/dataContext";
import touristCSS from "./touristPlaces.module.css";
import Card from "../../components/card/card";
export const TouristPlaces = () => {
  const { countryId,continentId} = useParams();
  const { data } = useData();
  const { continents } = data;
  const navigate = useNavigate();
  const country =continents.find(({name})=>name===(continentId)).countries?.find(({id})=>id===Number(countryId))
  const onClickFun = (id) => navigate(`/place/${continentId}/${country?.name}/${id}`);
  return (
    <div className={touristCSS.container}>
       <h1>Top countries in {country.name} for your next holiday</h1> 
       <div className="cardsContainer">
        {country?.destinations.map(({ name, id, image }, index) => (
          <Card key={index} data={{ name, id, image }} onClick={onClickFun} />
        ))}
      </div>
    </div>
  );
};
