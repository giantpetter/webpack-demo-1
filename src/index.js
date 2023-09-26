import axios from "axios";
// import * as vue from "vue";
// import React from "react";
// import ReactDom from "react-dom";
import "./style.css";
import "./reset.css";
import jpg from "./images/1.jpg";
import Print from "./print";

console.log(axios);
console.log(Print);
// console.log(vue);
// console.log(React);
// console.log(ReactDom);

const h1 = document.createElement("h1");
const btn = document.createElement("button");
h1.innerHTML = "hello";

document.body.appendChild(h1);
document.body.appendChild(btn);

btn.innerHTML = "懒加载";
btn.addEventListener("click", () => {
  import("./a.js").then(
    ({ a }) => {
      console.log(a.name);
    },
    () => {}
  );
});
const image = document.createElement("img");
console.log(jpg);
image.src = jpg;
document.body.appendChild(image);
