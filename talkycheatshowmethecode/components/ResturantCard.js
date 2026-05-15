const ResturantCard = () => {
  const resturantdata = [
    {
      Name: "Domino",
      image:
        "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      price: "350 for 2",
      cuisine: ["north Indian,south Indian"],
    },
    {
      Name: "Domino",
      image:
        "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
      price: "350 for 2",
      cuisine: ["north Indian,south Indian"],
    },
  ];
  return (
    <div className="card">
      <img src={resturantdata[0].image} alt={resturantdata.Name} />
      <h2>{resturantdata[0].Name}</h2>
      <div>{resturantdata[0].cuisine}</div>
      <h3>{resturantdata[0].price}</h3>
    </div>
  );
};
export default ResturantCard;
