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
// const regex = /P\((.)((<|>)=*)(-{0,1}[0-9]+\.{0,1}[0-9]*)\)/g;
const regex = /P\((.)((<|>)=?)(\-?[0-9]+\.?[0-9]*)\)/i;

const inputChange = (e) => {
  document.getElementById("alert").classList.add("invisible");
  document.getElementById("alert").classList.remove("visible");

  const input = document.getElementById("input").value;
  const inputA = regex.exec(input);
  if (inputA) {
    const X = inputA[1];
    const condition = inputA[3];
    const ini = +inputA[4];
    if (condition == ">") mayorQue = true;
    else mayorQue = false;

    normalGraph({ margin, width, height, ini, fin, mayorQue });
  } else error("bb");
};
// normalGraph({margin,width,height,ini,fin,mayorQue});

const inputChange2 = () => {
  document.getElementById("alert").classList.add("invisible");
  document.getElementById("alert").classList.remove("visible");

  const isNumber = /-?[0-9]+\.?[0-9]*/i;

  let mu = document.getElementById("mu").value;
  let sigma = document.getElementById("sigma").value;

  if (!isNumber.test(sigma) && sigma != "")
    return error(". σ debe ser un numero");
  else if (+sigma <= 0 && sigma != "") return error(". σ>0");
  if (!isNumber.test(mu) && mu != "") return error(". μ debe ser un numero");

  mu = +mu ? +mu : 0;
  sigma = +sigma ? +sigma : 1;

  console.log(mu, sigma);
  const i = document.getElementById("input2").value + "";
  console.log(i);

  const inputB = regex.exec(i);
  console.log(inputB);
  if (inputB) {
    const x = +inputB[4];
    const t = i.replace(isNumber, (x - mu) / sigma);
    document.getElementById("input").value = t;
    inputChange();
  } else return error("DFs");

  let t = "= ";
  let t2 = "";
  if (i[3] == ">") {
    t += (document.getElementById("input").value + "").replace(
      /((<|>)=?)/i,
      "≥"
    );
    t2 += (document.getElementById("input2").value + "").replace(
      /((<|>)=?)/i,
      "≥"
    );
  } else {
    t += (document.getElementById("input").value + "").replace(
      /((<|>)=?)/i,
      "≤"
    );
    t2 += (document.getElementById("input2").value + "").replace(
      /((<|>)=?)/i,
      "≤"
    );
  }
  t2 += `; μ:${mu}; σ:${sigma}`;
  t += `; μ:${0}; σ:${1}`;
  document.getElementById("res2").innerHTML = t2;
  document.getElementById("res3").innerHTML = t;
  document.getElementById("res4").innerHTML =
    "= " + document.getElementById("res").innerHTML;
};

const resChange = (value) => {
  collapse = document.getElementById("alert").classList.contains("show");
  if (collapse) {
    document.getElementById("res2").value = value;
  }
};

document.getElementById("input").addEventListener("input", inputChange);
document.getElementById("mu").addEventListener("input", inputChange2);
document.getElementById("sigma").addEventListener("input", inputChange2);
document.getElementById("input2").addEventListener("input", inputChange2);
document.getElementById("random").addEventListener("click", (e) => {
  document.getElementById("input").value = `P(X${
    Math.random(1) > 0.5 ? ">" : "<"
  }=${Math.round((Math.random() * 8 - 4) * 100) / 100})`;
  inputChange();
});
