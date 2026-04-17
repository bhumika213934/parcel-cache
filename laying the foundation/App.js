import React from "react";
import ReactDOM from "react-dom/client";
    const list= React.createElement("ul",{

    },[React.createElement("li",{key:"lo1",className:"BHUMIKA"},"hemloo"),
        React.createElement("li",{key:"lo2",className:"BHUMIKA"},"helloooooooooooooooooooooooooooooooooooo"),
        React.createElement("li",{key:"lo3",className:"BHUMIKA"},"heyiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    ]
);
console.log(list);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(list);
