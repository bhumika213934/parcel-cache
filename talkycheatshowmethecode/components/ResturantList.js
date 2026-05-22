import ResturantCard from "./ResturantCard";
import { restaurantData } from "../CONSTANT.JS";
const ResturantList = () => {
  return (
    <div className="resturantlist">
      <h1 className="text-9xl">restaurantlist</h1>
      {restaurantData.map((el, index) => {
        console.log(el);
        return <ResturantCard data={el} key={el.info.id} />;
      })}
      {/* <ResturantCard data={restaurantData[0]} />
      <ResturantCard data={restaurantData[1]} />
      <ResturantCard data={restaurantData[2]} />
      <ResturantCard data={restaurantData[3]} />
      <ResturantCard data={restaurantData[4]} />
      <ResturantCard data={restaurantData[5]} />
      <ResturantCard abc="abc" data={restaurantData[6]} /> */}
    </div>
  );
};
export default ResturantList;
