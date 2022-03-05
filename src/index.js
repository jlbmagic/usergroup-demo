//Here we're importing items we'll need. You can add other imports here.
import c3 from "c3";
import { sampleData } from "./sampleData";
console.log(sampleData);

window.loadChart = function (array) {
  const columns = JSON.parse(array);
  console.log(columns);
  var chart = c3.generate({
    bindto: "#chart",
    data: {
      type: "line",
      columns: columns,
    },
  });
};
