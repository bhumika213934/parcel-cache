import { imageUrl } from "../CONSTANT.JS";
const ResturantCard = (props) => {
  const { name, cuisines, costForTwo, cloudinaryImageId } = props.data.info;
  console.log(props.data.info);
  console.log(props);
  console.log(typeof props);

  return (
    <div className="card">
      <img src={imageUrl + cloudinaryImageId} alt="" />
      <h1>{name}</h1>
      <div>{cuisines.join(", ")}</div>
      <h2>{costForTwo}</h2>
    </div>
  );
};
export default ResturantCard;
