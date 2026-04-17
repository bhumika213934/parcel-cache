let name = ['Bhumika','Raj','riya','swarup'];
console.log(name);
let a = name.pop();
console.log(a);
let b = name.shift();
console.log(b);
let c = name.unshift("alex");
console.log(c);
// 2
const email = " BhumikaMishra1122@gmail.com ";
const newemail = email.trim().toLowerCase();
console.log(newemail);
// 3
let D = "BHUMIKA";
let splitD = D.split("").reverse("");
console.log(splitD);
// 4
let grocery = ["biscuit","milk","water","shampoo"];
if(grocery.includes("milk")) {
    console.log("dont forget the milk !");
    
} else {
    console.log("all clear");
    
};
// 5
let array = ["mango","pineapple",
    "banana",
    "stwarberry",
    "orange",
    "peach"
]
let minilist = array.slice (1,3);
console.log(minilist);
// 6
let blog = "Hello Blog World"
let r = blog.toLowerCase().replaceAll(" ","-")
console.log(r);

// 7
let namee = ['Bhumika','Raj','riya','swarup'];
if (namee.includes("jake"),namee.push("jake")) {
    console.log("welcome");
    
} else {
    console.log("already inside");
    
} ;

// 8
let newarray = ["water","pink","blue"];
newarray[1]=100;
console.log(newarray);


// 9
let g = "BHMUKA MISHRA";
let y = g.split (' ');
console.log(y);
let k = y[0].charAt(0)
console.log(k

);
let u = y[1].charAt(0);
console.log(u);
let o = k+u;
console.log(o);

