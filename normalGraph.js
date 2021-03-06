import { setIntegral, myRound } from "./utils.js";

const z = [
  // const data = [
  { x: 0.0, y: 0.0 },
  { x: 0.01, y: 0.004 },
  { x: 0.02, y: 0.008 },
  { x: 0.03, y: 0.012 },
  { x: 0.04, y: 0.016 },
  { x: 0.05, y: 0.0199 },
  { x: 0.06, y: 0.0239 },
  { x: 0.07, y: 0.0279 },
  { x: 0.08, y: 0.0319 },
  { x: 0.09, y: 0.0359 },
  { x: 0.1, y: 0.0398 },
  { x: 0.11, y: 0.0438 },
  { x: 0.12, y: 0.0478 },
  { x: 0.13, y: 0.0517 },
  { x: 0.14, y: 0.0557 },
  { x: 0.15, y: 0.0596 },
  { x: 0.16, y: 0.0636 },
  { x: 0.17, y: 0.0675 },
  { x: 0.18, y: 0.0714 },
  { x: 0.19, y: 0.0753 },
  { x: 0.2, y: 0.0793 },
  { x: 0.21, y: 0.0832 },
  { x: 0.22, y: 0.0871 },
  { x: 0.23, y: 0.091 },
  { x: 0.24, y: 0.0948 },
  { x: 0.25, y: 0.0987 },
  { x: 0.26, y: 0.1026 },
  { x: 0.27, y: 0.1064 },
  { x: 0.28, y: 0.1103 },
  { x: 0.29, y: 0.1141 },
  { x: 0.3, y: 0.1179 },
  { x: 0.31, y: 0.1217 },
  { x: 0.32, y: 0.1255 },
  { x: 0.33, y: 0.1293 },
  { x: 0.34, y: 0.1331 },
  { x: 0.35, y: 0.1368 },
  { x: 0.36, y: 0.1406 },
  { x: 0.37, y: 0.1443 },
  { x: 0.38, y: 0.148 },
  { x: 0.39, y: 0.1517 },
  { x: 0.4, y: 0.1554 },
  { x: 0.41, y: 0.1591 },
  { x: 0.42, y: 0.1628 },
  { x: 0.43, y: 0.1664 },
  { x: 0.44, y: 0.17 },
  { x: 0.45, y: 0.1736 },
  { x: 0.46, y: 0.1772 },
  { x: 0.47, y: 0.1808 },
  { x: 0.48, y: 0.1844 },
  { x: 0.49, y: 0.1879 },
  { x: 0.5, y: 0.1915 },
  { x: 0.51, y: 0.195 },
  { x: 0.52, y: 0.1985 },
  { x: 0.53, y: 0.2019 },
  { x: 0.54, y: 0.2054 },
  { x: 0.55, y: 0.2088 },
  { x: 0.56, y: 0.2123 },
  { x: 0.57, y: 0.2157 },
  { x: 0.58, y: 0.219 },
  { x: 0.59, y: 0.2224 },
  { x: 0.6, y: 0.2257 },
  { x: 0.61, y: 0.2291 },
  { x: 0.62, y: 0.2324 },
  { x: 0.63, y: 0.2357 },
  { x: 0.64, y: 0.2389 },
  { x: 0.65, y: 0.2422 },
  { x: 0.66, y: 0.2454 },
  { x: 0.67, y: 0.2486 },
  { x: 0.68, y: 0.2517 },
  { x: 0.69, y: 0.2549 },
  { x: 0.7, y: 0.258 },
  { x: 0.71, y: 0.2611 },
  { x: 0.72, y: 0.2642 },
  { x: 0.73, y: 0.2673 },
  { x: 0.74, y: 0.2704 },
  { x: 0.75, y: 0.2734 },
  { x: 0.76, y: 0.2764 },
  { x: 0.77, y: 0.2794 },
  { x: 0.78, y: 0.2823 },
  { x: 0.79, y: 0.2852 },
  { x: 0.8, y: 0.2881 },
  { x: 0.81, y: 0.291 },
  { x: 0.82, y: 0.2939 },
  { x: 0.83, y: 0.2967 },
  { x: 0.84, y: 0.2995 },
  { x: 0.85, y: 0.3023 },
  { x: 0.86, y: 0.3051 },
  { x: 0.87, y: 0.3078 },
  { x: 0.88, y: 0.3106 },
  { x: 0.89, y: 0.3133 },
  { x: 0.9, y: 0.3159 },
  { x: 0.91, y: 0.3186 },
  { x: 0.92, y: 0.3212 },
  { x: 0.93, y: 0.3238 },
  { x: 0.94, y: 0.3264 },
  { x: 0.95, y: 0.3289 },
  { x: 0.96, y: 0.3315 },
  { x: 0.97, y: 0.334 },
  { x: 0.98, y: 0.3365 },
  { x: 0.99, y: 0.3389 },
  { x: 1.0, y: 0.3413 },
  { x: 1.01, y: 0.3438 },
  { x: 1.02, y: 0.3461 },
  { x: 1.03, y: 0.3485 },
  { x: 1.04, y: 0.3508 },
  { x: 1.05, y: 0.3531 },
  { x: 1.06, y: 0.3554 },
  { x: 1.07, y: 0.3577 },
  { x: 1.08, y: 0.3599 },
  { x: 1.09, y: 0.3621 },
  { x: 1.1, y: 0.3643 },
  { x: 1.11, y: 0.3665 },
  { x: 1.12, y: 0.3686 },
  { x: 1.13, y: 0.3708 },
  { x: 1.14, y: 0.3729 },
  { x: 1.15, y: 0.3749 },
  { x: 1.16, y: 0.377 },
  { x: 1.17, y: 0.379 },
  { x: 1.18, y: 0.381 },
  { x: 1.19, y: 0.383 },
  { x: 1.2, y: 0.3849 },
  { x: 1.21, y: 0.3869 },
  { x: 1.22, y: 0.3888 },
  { x: 1.23, y: 0.3907 },
  { x: 1.24, y: 0.3925 },
  { x: 1.25, y: 0.3944 },
  { x: 1.26, y: 0.3962 },
  { x: 1.27, y: 0.398 },
  { x: 1.28, y: 0.3997 },
  { x: 1.29, y: 0.4015 },
  { x: 1.3, y: 0.4032 },
  { x: 1.31, y: 0.4049 },
  { x: 1.32, y: 0.4066 },
  { x: 1.33, y: 0.4082 },
  { x: 1.34, y: 0.4099 },
  { x: 1.35, y: 0.4115 },
  { x: 1.36, y: 0.4131 },
  { x: 1.37, y: 0.4147 },
  { x: 1.38, y: 0.4162 },
  { x: 1.39, y: 0.4177 },
  { x: 1.4, y: 0.4192 },
  { x: 1.41, y: 0.4207 },
  { x: 1.42, y: 0.4222 },
  { x: 1.43, y: 0.4236 },
  { x: 1.44, y: 0.4251 },
  { x: 1.45, y: 0.4265 },
  { x: 1.46, y: 0.4279 },
  { x: 1.47, y: 0.4292 },
  { x: 1.48, y: 0.4306 },
  { x: 1.49, y: 0.4319 },
  { x: 1.5, y: 0.4332 },
  { x: 1.51, y: 0.4345 },
  { x: 1.52, y: 0.4357 },
  { x: 1.53, y: 0.437 },
  { x: 1.54, y: 0.4382 },
  { x: 1.55, y: 0.4394 },
  { x: 1.56, y: 0.4406 },
  { x: 1.57, y: 0.4418 },
  { x: 1.58, y: 0.4429 },
  { x: 1.59, y: 0.4441 },
  { x: 1.6, y: 0.4452 },
  { x: 1.61, y: 0.4463 },
  { x: 1.62, y: 0.4474 },
  { x: 1.63, y: 0.4484 },
  { x: 1.64, y: 0.4495 },
  { x: 1.65, y: 0.4505 },
  { x: 1.66, y: 0.4515 },
  { x: 1.67, y: 0.4525 },
  { x: 1.68, y: 0.4535 },
  { x: 1.69, y: 0.4545 },
  { x: 1.7, y: 0.4554 },
  { x: 1.71, y: 0.4564 },
  { x: 1.72, y: 0.4573 },
  { x: 1.73, y: 0.4582 },
  { x: 1.74, y: 0.4591 },
  { x: 1.75, y: 0.4599 },
  { x: 1.76, y: 0.4608 },
  { x: 1.77, y: 0.4616 },
  { x: 1.78, y: 0.4625 },
  { x: 1.79, y: 0.4633 },
  { x: 1.8, y: 0.4641 },
  { x: 1.81, y: 0.4649 },
  { x: 1.82, y: 0.4656 },
  { x: 1.83, y: 0.4664 },
  { x: 1.84, y: 0.4671 },
  { x: 1.85, y: 0.4678 },
  { x: 1.86, y: 0.4686 },
  { x: 1.87, y: 0.4693 },
  { x: 1.88, y: 0.4699 },
  { x: 1.89, y: 0.4706 },
  { x: 1.9, y: 0.4713 },
  { x: 1.91, y: 0.4719 },
  { x: 1.92, y: 0.4726 },
  { x: 1.93, y: 0.4732 },
  { x: 1.94, y: 0.4738 },
  { x: 1.95, y: 0.4744 },
  { x: 1.96, y: 0.475 },
  { x: 1.97, y: 0.4756 },
  { x: 1.98, y: 0.4761 },
  { x: 1.99, y: 0.4767 },
  { x: 2.0, y: 0.4772 },
  { x: 2.01, y: 0.4778 },
  { x: 2.02, y: 0.4783 },
  { x: 2.03, y: 0.4788 },
  { x: 2.04, y: 0.4793 },
  { x: 2.05, y: 0.4798 },
  { x: 2.06, y: 0.4803 },
  { x: 2.07, y: 0.4808 },
  { x: 2.08, y: 0.4812 },
  { x: 2.09, y: 0.4817 },
  { x: 2.1, y: 0.4821 },
  { x: 2.11, y: 0.4826 },
  { x: 2.12, y: 0.483 },
  { x: 2.13, y: 0.4834 },
  { x: 2.14, y: 0.4838 },
  { x: 2.15, y: 0.4842 },
  { x: 2.16, y: 0.4846 },
  { x: 2.17, y: 0.485 },
  { x: 2.18, y: 0.4854 },
  { x: 2.19, y: 0.4857 },
  { x: 2.2, y: 0.4861 },
  { x: 2.21, y: 0.4864 },
  { x: 2.22, y: 0.4868 },
  { x: 2.23, y: 0.4871 },
  { x: 2.24, y: 0.4875 },
  { x: 2.25, y: 0.4878 },
  { x: 2.26, y: 0.4881 },
  { x: 2.27, y: 0.4884 },
  { x: 2.28, y: 0.4887 },
  { x: 2.29, y: 0.489 },
  { x: 2.3, y: 0.4893 },
  { x: 2.31, y: 0.4896 },
  { x: 2.32, y: 0.4898 },
  { x: 2.33, y: 0.4901 },
  { x: 2.34, y: 0.4904 },
  { x: 2.35, y: 0.4906 },
  { x: 2.36, y: 0.4909 },
  { x: 2.37, y: 0.4911 },
  { x: 2.38, y: 0.4913 },
  { x: 2.39, y: 0.4916 },
  { x: 2.4, y: 0.4918 },
  { x: 2.41, y: 0.492 },
  { x: 2.42, y: 0.4922 },
  { x: 2.43, y: 0.4925 },
  { x: 2.44, y: 0.4927 },
  { x: 2.45, y: 0.4929 },
  { x: 2.46, y: 0.4931 },
  { x: 2.47, y: 0.4932 },
  { x: 2.48, y: 0.4934 },
  { x: 2.49, y: 0.4936 },
  { x: 2.5, y: 0.4938 },
  { x: 2.51, y: 0.494 },
  { x: 2.52, y: 0.4941 },
  { x: 2.53, y: 0.4943 },
  { x: 2.54, y: 0.4945 },
  { x: 2.55, y: 0.4946 },
  { x: 2.56, y: 0.4948 },
  { x: 2.57, y: 0.4949 },
  { x: 2.58, y: 0.4951 },
  { x: 2.59, y: 0.4952 },
  { x: 2.6, y: 0.4953 },
  { x: 2.61, y: 0.4955 },
  { x: 2.62, y: 0.4956 },
  { x: 2.63, y: 0.4957 },
  { x: 2.64, y: 0.4959 },
  { x: 2.65, y: 0.496 },
  { x: 2.66, y: 0.4961 },
  { x: 2.67, y: 0.4962 },
  { x: 2.68, y: 0.4963 },
  { x: 2.69, y: 0.4964 },
  { x: 2.7, y: 0.4965 },
  { x: 2.71, y: 0.4966 },
  { x: 2.72, y: 0.4967 },
  { x: 2.73, y: 0.4968 },
  { x: 2.74, y: 0.4969 },
  { x: 2.75, y: 0.497 },
  { x: 2.76, y: 0.4971 },
  { x: 2.77, y: 0.4972 },
  { x: 2.78, y: 0.4973 },
  { x: 2.79, y: 0.4974 },
  { x: 2.8, y: 0.4974 },
  { x: 2.81, y: 0.4975 },
  { x: 2.82, y: 0.4976 },
  { x: 2.83, y: 0.4977 },
  { x: 2.84, y: 0.4977 },
  { x: 2.85, y: 0.4978 },
  { x: 2.86, y: 0.4979 },
  { x: 2.87, y: 0.4979 },
  { x: 2.88, y: 0.498 },
  { x: 2.89, y: 0.4981 },
  { x: 2.9, y: 0.4981 },
  { x: 2.91, y: 0.4982 },
  { x: 2.92, y: 0.4982 },
  { x: 2.93, y: 0.4983 },
  { x: 2.94, y: 0.4984 },
  { x: 2.95, y: 0.4984 },
  { x: 2.96, y: 0.4985 },
  { x: 2.97, y: 0.4985 },
  { x: 2.98, y: 0.4986 },
  { x: 2.99, y: 0.4986 },
  { x: 3.0, y: 0.4987 },
  { x: 3.01, y: 0.4987 },
  { x: 3.02, y: 0.4987 },
  { x: 3.03, y: 0.4988 },
  { x: 3.04, y: 0.4988 },
  { x: 3.05, y: 0.4989 },
  { x: 3.06, y: 0.4989 },
  { x: 3.07, y: 0.4989 },
  { x: 3.08, y: 0.499 },
  { x: 3.09, y: 0.499 },
  { x: 3.1, y: 0.499 },
  { x: 3.11, y: 0.4991 },
  { x: 3.12, y: 0.4991 },
  { x: 3.13, y: 0.4991 },
  { x: 3.14, y: 0.4992 },
  { x: 3.15, y: 0.4992 },
  { x: 3.16, y: 0.4992 },
  { x: 3.17, y: 0.4992 },
  { x: 3.18, y: 0.4993 },
  { x: 3.19, y: 0.4993 },
  { x: 3.2, y: 0.4993 },
  { x: 3.21, y: 0.4993 },
  { x: 3.22, y: 0.4994 },
  { x: 3.23, y: 0.4994 },
  { x: 3.24, y: 0.4994 },
  { x: 3.25, y: 0.4994 },
  { x: 3.26, y: 0.4994 },
  { x: 3.27, y: 0.4995 },
  { x: 3.28, y: 0.4995 },
  { x: 3.29, y: 0.4995 },
  { x: 3.3, y: 0.4995 },
  { x: 3.31, y: 0.4995 },
  { x: 3.32, y: 0.4995 },
  { x: 3.33, y: 0.4996 },
  { x: 3.34, y: 0.4996 },
  { x: 3.35, y: 0.4996 },
  { x: 3.36, y: 0.4996 },
  { x: 3.37, y: 0.4996 },
  { x: 3.38, y: 0.4996 },
  { x: 3.39, y: 0.4997 },
  { x: 3.4, y: 0.4997 },
  { x: 3.41, y: 0.4997 },
  { x: 3.42, y: 0.4997 },
  { x: 3.43, y: 0.4997 },
  { x: 3.44, y: 0.4997 },
  { x: 3.45, y: 0.4997 },
  { x: 3.46, y: 0.4997 },
  { x: 3.47, y: 0.4997 },
  { x: 3.48, y: 0.4997 },
  { x: 3.49, y: 0.4998 },
  { x: 3.5, y: 0.4998 },
  { x: 3.51, y: 0.4998 },
  { x: 3.52, y: 0.4998 },
  { x: 3.53, y: 0.4998 },
  { x: 3.54, y: 0.4998 },
  { x: 3.55, y: 0.4998 },
  { x: 3.56, y: 0.4998 },
  { x: 3.57, y: 0.4998 },
  { x: 3.58, y: 0.4998 },
  { x: 3.59, y: 0.4998 },
];

const normalGraph = (props) => {
  const { margin, width, height, ini, fin, mayorQue } = props;
  console.log(ini);

  d3.selectAll("#my-chart > *").remove();

  let data = [];
  const points = setIntegral(-4, 4, true);

  const convertToRange = (x) =>
    (8 * (((x - margin.left) * 100) / (width - margin.left - margin.right))) /
      100 -
    4;

  const xAxis = (g) =>
    g.attr("transform", `translate(0,${height - margin.bottom})`).call(
      d3
        .axisBottom(x)
        .ticks(width / 80)
        .tickSizeOuter(0)
    );

  const yAxis = (g) =>
    g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .select(".tick:last-of-type text")
          .clone()
          .attr("x", 3)
          .attr("text-anchor", "start")
          .attr("font-weight", "bold")
          .text(data.y)
      );

  const x = d3
    .scaleLinear()
    .domain([-4, 4])
    .nice()
    .range([margin.left, width - margin.right]);

  const y = d3
    .scaleLinear()
    .domain([0, 0.5])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const area = d3
    .area()
    .defined((d) => !isNaN(d.y))
    .x((d) => x(d.x))
    .y0(y(0))
    .y1((d) => y(d.y));

  const curve = d3
    .line()
    .x((d) => x(d.x))
    .y((d) => y(d.y));

  const svg = d3
    .select("#my-chart")
    .append("svg")
    .attr("viewBox", [0, 0, width, height]);

  const integral = svg.append("path").attr("fill", "steelblue");

  const func = svg
    .append("path")
    .datum(points)
    .attr("d", curve)
    .attr("stroke", "black")
    .attr("fill", "none");

  svg.append("g").call(xAxis);

  svg.append("g").call(yAxis);

  const selector = svg
    .append("g")
    .attr(
      "transform",
      `translate(${
        (ini * (width - margin.right)) / 2 / 4 + width / 2 - 5 * (ini - 1)
      },${height / 2})`
    )
    .style("cursor", "crosshair");

  selector
    .append("rect")
    .attr("x", -1)
    .attr("y", -55)
    .attr("width", 3)
    .attr("height", height - margin.bottom - margin.top - 20)
    .attr("fill", "transparent");
  selector
    .append("rect")
    .attr("x", 0)
    .attr("y", -55)
    .attr("width", 1)
    .attr("height", height - margin.bottom - margin.top - 20)
    .attr("fill", "black");

  selector
    .append("text")
    .text("k")
    .attr("transform", "translate(1," + -55 + ")")
    .style("text-anchor", "middle");

  var dragHandler = d3.drag().on("drag", function (event) {
    selector.attr("transform", `translate(${event.x},${height / 2})`);
    const newk = myRound(convertToRange(event.x),2)
    document.getElementById('k').value=newk
    console.log(newk);

    const i = document.getElementById("input").value + "";
    let sigma = document.getElementById("sigma").value + "";
    let mu = document.getElementById("mu").value + "";
    // setear los campos si estan vacios
    mu = +mu ? +mu : 0;
    sigma = +sigma ? +sigma : 1;

    console.log(i);
    const x= newk*sigma+mu

    const inputB = /P\(.((<|>)=?)(-?\d+(\.\d{1,})?)\)/.exec(i);
    console.log('b' + inputB);
    document.getElementById("input").value=i.replace(/(-?\d+(\.\d{1,})?)|NaN/,x)
    //actualizar k
    updateData(newk)
  });

  dragHandler(selector);

  const updateData = (x) => {
    const rounded = myRound(x, 2);
    console.log(rounded);

    integral.datum(setIntegral(x, fin, mayorQue));
    integral.attr("d", area);

    const input = document.getElementById("input");
    const temp = (input.value + "").replace( /-?\d+(\.\d{1,})?/g, rounded);
    // input.value = temp;

    let v;
    if (rounded >= 0) {
      z.push({ x: rounded, y: 0.5 });
      v = z.find((a) => a.x == rounded).y;
      if (mayorQue) v = 0.5 - v;
      else v = 0.5 + v;
    } else {
      z.push({ x: -rounded, y: 0.5 });
      v = z.find((a) => a.x == -rounded).y;
      if (mayorQue) v += 0.5;
      else v = 0.5 - v;
    }
    document.getElementById("res").innerHTML = myRound(v, 4);
  };
  
  console.log(ini);
  if(ini!=null)
    updateData(ini);
};

export { normalGraph };
