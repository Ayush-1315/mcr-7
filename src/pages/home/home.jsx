import { useNavigate } from "react-router";
import Card from "../../components/card/card";
import { useData } from "../../context/dataContext";
import homeCSS from "./home.module.css";

export const Home = () => {
  const { data } = useData();
  const navigate=useNavigate();
  const onClickFun=(id)=>navigate(`/countries/${id}`);
  return (
    <div className={homeCSS.container}>
      <h1>Welcome to Trip Advisor</h1>
      <h2>Top Continents for your next holiday</h2>
      <div className="cardsContainer">
        {data?.continents.map(({name,id,image}, index) => (
          <Card key={index} data={{name,id,image}} onClick={onClickFun}/>
        ))}
      </div>
    </div>
  );
};
