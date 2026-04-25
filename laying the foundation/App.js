import React from "react";
import ReactDOM from "react-dom/client";
//     const list= React.createElement("ul",{

//     },[React.createElement("li",{
//         className:"BHUMIKA"},"hemloo"),
//         React.createElement("li",{key:"lo2",className:"BHUMIKA"},"helloooooooooooooooooooooooooooooooooooo"),
//         React.createElement("li",{key:"lo3",className:"BHUMIKA"},"heyiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
//     ]
// );
// console.log(list);

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(list);
// const heading = <h1>hello world</h1>;
// const heading2 = (
//   <div id="hey" className="bhumi" key="h1">
//     hola
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const Headercomponent = () => {
  return (
    <div>
      <h1>logo</h1>
      <Logo />
    </div>
  );
};
const Logo = () => {
  return <h1>Bhumika</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headercomponent />);
