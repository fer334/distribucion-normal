// Sample dataset. In a real application, you will probably get this data from another source such as AJAX.
// var data = 2;
import { normalGraph } from "./normalGraph.js";
import { myRound } from "./utils.js";

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
const regex = /P\(.((<|>)=?)(-?\d+(\.\d{1,})?)\)/i;
const isNumber = /-?\d+(\.\d{1,})?/i;


const calculateNormal = (ini, fin=4)=>{
  normalGraph({ margin, width, height, ini, fin, mayorQue });
}

const inputChange = (e) => {
  document.getElementById("alert").classList.add("invisible");
  document.getElementById("alert").classList.remove("visible");

  const input = document.getElementById("input").value;
  const k = document.getElementById("k").value;
  const mu = document.getElementById("mu").value;
  const sigma = document.getElementById("sigma").value;
  let sum = 0;
  const inputB=regex.exec(input)
  const x = +inputB[3];

  if( mu=='' || sigma=='')
    sum = x;
  else{
    sum = (x - mu) / sigma
    console.log('x',x,'mu',mu,'sigma',sigma);
  }
  document.getElementById("k").value = myRound(sum,2);
  calculateNormal( myRound(sum,2));

  // const inputA = regex.exec(input);
  // console.log('hola');
  // if (inputA) {
  //   console.log(inputA);
  //   const X = inputA[1];
  //   const condition = inputA[2];
  //   const ini = +inputA[4];
  //   if (condition == ">") mayorQue = true;
  //   else mayorQue = false;

  //   normalGraph({ margin, width, height, ini, fin, mayorQue });
  // } else error("bb");
};
// normalGraph({margin,width,height,ini,fin,mayorQue});

const kChange = () => {
  document.getElementById("alert").classList.add("invisible");
  document.getElementById("alert").classList.remove("visible");

  let mu = document.getElementById("mu").value;
  let sigma = document.getElementById("sigma").value;
  let k = document.getElementById("k").value;

  // Que hago aca???
  mu = +mu ? +mu : 0;
  sigma = +sigma ? +sigma : 1;

  if(k=='')
    return ;
  else{
    const i = document.getElementById("input").value + "";
    console.log(i);
    const x= k*sigma+mu

    const inputB = regex.exec(i);
    console.log('b' + inputB);
    document.getElementById("input").value=i.replace(/(-?\d+(\.\d{1,})?)|NaN/,x)

  }
  calculateNormal(k);
  // console.log(mu, sigma);
  // const i = document.getElementById("k").value + "";
  // console.log(i);

  // const inputB = regex.exec(i);
  // console.log('b' + inputB);
  // if (inputB) {
  //   const x = +inputB[4];
  //   const t = i.replace(isNumber, (x - mu) / sigma);
  //   document.getElementById("input").value = t;
  //   inputChange();
  // } else return error("DFs");

  // let t = "= ";
  // let t2 = "";
  // if (i[3] == ">") {
  //   t += (document.getElementById("input").value + "").replace(
  //     /((<|>)=?)/i,
  //     "≥"
  //   );
  //   t2 += (document.getElementById("k").value + "").replace(
  //     /((<|>)=?)/i,
  //     "≥"
  //   );
  // } else {
  //   t += (document.getElementById("input").value + "").replace(
  //     /((<|>)=?)/i,
  //     "≤"
  //   );
  //   t2 += (document.getElementById("k").value + "").replace(
  //     /((<|>)=?)/i,
  //     "≤"
  //   );
  // }
  // t2 += `; μ:${mu}; σ:${sigma}`;
  // t += `; μ:${0}; σ:${1}`;
  // document.getElementById("res2").innerHTML = t2;
  // document.getElementById("res3").innerHTML = t;
  // document.getElementById("res4").innerHTML =
  //   "= " + document.getElementById("res").innerHTML;
};


const muChange = () =>{
  const updatek = () =>{
    const i = document.getElementById("input").value + ""
    console.log(i)
    const inputB = regex.exec(i);
    console.log('b' + inputB);
    if (inputB) {
      const x = +inputB[3];
      console.log(x)
      let sum = (x - mu) / sigma
      console.log('x',x,'mu',mu,'sigma',sigma,'sum',sum);
      const t = i.replace(isNumber, sum);
      console.log(myRound(sum,2));
      document.getElementById("k").value = myRound(sum,2);
      calculateNormal( myRound(sum,2));
    } else return error("DFs");
  }
  document.getElementById("alert").classList.add("invisible");
  document.getElementById("alert").classList.remove("visible");

  let mu = document.getElementById("mu").value;
  let sigma = document.getElementById("sigma").value;
  let k = document.getElementById("k").value;

  if (!isNumber.test(mu) && mu != "")
    return error(". μ debe ser un numero");

  const otherInputEmpty = sigma!='';
  if(otherInputEmpty)
    updatek();
}


const sigmaChange = () =>{
  const updatesigma = () =>{
    const i = document.getElementById("input").value + ""
    console.log(i)
    const inputB = regex.exec(i);
    console.log('b' + inputB);
    if (inputB) {
      const x = +inputB[3];
      console.log(x)
      let sum = (x - mu) / sigma
      console.log('x',x,'mu',mu,'sigma',sigma,'sum',sum);
      const t = i.replace(isNumber, sum);
      console.log(myRound(sum,2));
      document.getElementById("k").value = myRound(sum,2);
      calculateNormal( myRound(sum,2));
      
    } else return error("DFs");
  }
  document.getElementById("alert").classList.add("invisible");
  document.getElementById("alert").classList.remove("visible");

  let mu = document.getElementById("mu").value;
  let sigma = document.getElementById("sigma").value;
  let k = document.getElementById("k").value;

  if (!isNumber.test(mu) && mu != "")
    return error(". σ debe ser un numero");
  else if (+sigma <= 0 && sigma != "")
    return error(". σ>0; debe ser positivo");

  const otherInputEmpty = mu!='';
  if(otherInputEmpty)
    updatesigma();
}

const resChange = (value) => {
  collapse = document.getElementById("alert").classList.contains("show");
  if (collapse) {
    document.getElementById("res2").value = value;
  }
};

document.getElementById("input").addEventListener("input", inputChange);
document.getElementById("mu").addEventListener("input", muChange);
document.getElementById("sigma").addEventListener("input", sigmaChange);
document.getElementById("k").addEventListener("input", kChange);
document.getElementById("random").addEventListener("click", (e) => {
  document.getElementById("input").value = `P(X${
    Math.random(1) > 0.5 ? ">" : "<"
  }=${Math.round((Math.random() * 8 - 4) * 100) / 100})`;
  inputChange();
});
