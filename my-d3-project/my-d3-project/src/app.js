const data = [30, 86, 168, 281, 303, 365];

const width = 500;
const height = 300;

const svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("width", (d) => d)
  .attr("height", 20)
  .attr("y", (d, i) => i * 25)
  .attr("fill", "teal");