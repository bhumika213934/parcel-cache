const Logo = () => {
  return <h1>Wiggy</h1>;
};
const Headercomponent = () => {
  return (
    <>
      <Logo />
      <Navbar />
      <Auth />
    </>
  );
};
export const Navbar = () => {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
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
