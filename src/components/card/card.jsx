import cardCSS from "./card.module.css";

function Card({ data,onClick}) {
  const spanStyle = {
    margin: "1rem",
  };

  return (
    <div style={{backgroundImage:`url(${data?.image})`}} className={cardCSS.card} onClick={()=>onClick(data?.id)}>
      <span style={spanStyle}>
        <span className="material-symbols-outlined">location_on</span>
        {data?.name}
      </span>
    </div>
  );
}
export default Card;
