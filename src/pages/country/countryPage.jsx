import { useParams,useNavigate } from "react-router";
import { useData } from "../../context/dataContext";
import countryCSS from "./country.module.css";
import Card from "../../components/card/card";
export const Countries = () => {
  const { continentId } = useParams();
  const { data } = useData();
  const showCountries = data.continents.find(
    ({ id }) => id === Number(continentId)
  );
  const navigate=useNavigate();
  const onClickFun=(id)=>navigate(`/places/${showCountries.name}/${id}`);
  return (
    <div className={countryCSS.container}>
      <h1>Top countries in {showCountries.name} for your next holiday</h1>
      <div className="cardsContainer">
        {showCountries?.countries.map(({ name, id, image }, index) => (
          <Card key={index} data={{ name, id, image }} onClick={onClickFun} />
        ))}
      </div>
    </div>
  );
};
