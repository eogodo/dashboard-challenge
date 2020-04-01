//file path
file = "./samples.json";

var data = [];

//Bar graph function
function barGraph(name, x, y, hovertext) {
  var trace = {
    x: x,
    y: y.map(item => "OTU " + item),
    type: "bar",
    orientation: "h",
    text: hovertext,
    width: y.length * 0.09
  };

  var data = [trace];

  var layout = {
    title: `Bar Chart: Top 10 OTUs - Sample ${name}`,
    xaxis: { title: "# of Bacteria" },
    yaxis: { title: "OTU ID", autorange: "reversed" }
  };

  Plotly.newPlot("bar", data, layout);
}

//Bubble graph function
function bubbleGraph(name, x, y, labels) {
  var trace = {
    x: x,
    y: y,
    mode: "markers",
    marker: {
      color: x,
      size: y
    },
    text: labels
  };

  var data = [trace];

  var layout = {
    title: `Bubble Chart: Top 10 OTUs - Sample ${name}`,
    xaxis: { title: "OTU ID" },
    yaxis: { title: "# of Bacteria" }
  };

  Plotly.newPlot("bubble", data, layout);
}

//Demographics function
function demographics(demo) {
  d3.select("#sample-metadata").html("");
  var demoDiv = d3
    .select("#sample-metadata")
    .append("ul")
    .style("list-style-type", "none")
    .style("padding-left", "0");

  Object.entries(demo).forEach(([key, value]) => {
    demoDiv.append("li").text(`${key}: ${value}`);
  });
}

//Dropdown option selection
function optionChanged(index) {
  var selectedSample = data.samples[index];
  var sampleValues = selectedSample.sample_values.slice(0, 10);
  var otuIds = selectedSample.otu_ids.slice(0, 10);
  var otuLabels = selectedSample.otu_labels.slice(0, 10);
  var id = selectedSample.id;

  barGraph(id, sampleValues, otuIds, otuLabels);
  bubbleGraph(id, otuIds, sampleValues, otuLabels);
  demographics(data.metadata[index]);
  gaugeGraph(data.metadata[index].wfreq);
}

//Load data
d3.json(file).then(inputData => {
  console.log(inputData);
  data = inputData;

  //Dropdown option selection
  data.names.forEach((sample, index) => {
    d3.select("#selDataset")
      .append("option")
      .attr("value", index)
      .text(sample);
  });

  //Initialize graphs
  optionChanged(0);
});
