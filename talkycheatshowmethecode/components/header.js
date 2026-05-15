import Logo from "url:./logo.jpeg";
const Title = () => {
  return <img src={Logo} className="imgg" />;
};
const Headercomponent = () => {
  return (
    <div className="header">
      <Title />
      <Navbar />
    </div>
  );
};
export const Navbar = () => {
  return (
    <ul className="nav">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>cart</li>
    </ul>
  );
};
export const Auth = () => {
  return (
    <div>
      <button>login</button>
      <button>Signup</button>
    </div>
  );
};
export default Headercomponent;
