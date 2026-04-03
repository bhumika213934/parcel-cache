
    const heading = document.createElement('h1');
 heading.innerHTML = "hello world";

const heading1 = React.createElement("h1",null,"hello world");
console.log(heading1);

const heading2 = React.createElement("h2",{},"hello1");
const heading3 = React.createElement("h3",{},"hello2");
const wrapper = React.createElement("div",{},[heading1,heading2,heading3]);
 const root = ReactDOM.createRoot(document.getElementById("root"))
 root.render(wrapper);
const heading = React.createElement("h1",{
    id: "heading1" ,
    className: "hola" ,
    style:{
        color: 'white',backgroundColor:"blueviolet"
    }
}, "hello" );
 const root2 = ReactDOM.createRoot(document.getElementById("root"))
 root.render(heading1);
const heading4 = React.createElement("h1",{
    id: "heading1" ,})
    console.log(heading1);