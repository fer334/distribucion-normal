// Sample dataset. In a real application, you will probably get this data from another source such as AJAX.
// var data = 2;
import { normalGraph } from "./normalGraph.js";

const height = 200;
const width = 500;
const margin = { top: 20, right: 30, bottom: 30, left: 40 };
let ini = 0,
  fin = 4;
let mayorQue = !true;
// const input = document.getElementById('input').value.split('(')
const input = "P(X>=2.1)";
const error = (x) => {
  const d =
    "Expresion invalida, verifique o pulse el boton &#8651; para obtener un ejemplo aleatorio";
  document.getElementById("alert").classList.remove("invisible");
  document.getElementById("alert").classList.add("visible");
  if (x) document.getElementById("alert").innerHTML = d + x;
  else document.getElementById("alert").innerHTML = d;
};

const inputChange = (e) => {
  document.getElementById("alert").classList.add("invisible");
  document.getElementById("alert").classList.remove("visible");

  const isNumber = /-{0,1}[0-9]+\.{0,1}[0-9]*/g;

  let k = document.getElementById("k").value;
  let mu = document.getElementById("mu").value;
  let sigma = document.getElementById("sigma").value;

  if (!isNumber.test(k) && k != "") error(". k debe ser un numero");
  if (!isNumber.test(sigma) && sigma != "") error(". σ debe ser un numero");
  else if (+sigma <= 0 && sigma != "") error(". σ>0");
  if (!isNumber.test(mu) && mu != "") error(". μ debe ser un numero");

  console.log(!isNumber.test(sigma), sigma, +sigma, +sigma <= 0);
  k = +k;
  sigma = +sigma;
  mu = +mu;

  k = k ? k : 1;
  mu = mu ? mu : 0;
  sigma = sigma ? sigma : 1;

  const regex = /P\((.)((<|>)=*)(-{0,1}[0-9]+\.{0,1}[0-9]*)\)/g;
  const input = document.getElementById("input").value;
  const inputA = regex.exec(input);
  if (inputA) {
    const X = inputA[1];
    const condition = inputA[3];
    const ini = +inputA[4];
    if (condition == ">") mayorQue = true;
    else mayorQue = false;

    normalGraph({ margin, width, height, ini, fin, mayorQue });
  } else error();
};
// normalGraph({margin,width,height,ini,fin,mayorQue});

document.getElementById("input").addEventListener("input", inputChange);
document.getElementById("mu").addEventListener("input", inputChange);
document.getElementById("sigma").addEventListener("input", inputChange);
document.getElementById("k").addEventListener("input", inputChange);
