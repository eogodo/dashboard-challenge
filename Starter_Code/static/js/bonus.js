function gaugeGraph(wfreq) {
  var data = [
    {
      //   domain: { x: [0, 1], y: [0, 1] },
      value: wfreq,
      title: {
        text: `Belly Button Washing Frequency <br> Scrubs per Week`
      },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: {
          visible: true,
          range: [null, 9],
          tickwidth: 1,
          tickmode: "linear"
        }
      },
      steps: [
        { range: [0, 1], color: "#dbde6d" },
        { range: [1, 2], color: "#e8c55e" },
        { range: [2, 3], color: "#f0ab5a" },
        { range: [3, 4], color: "#f0925e" },
        { range: [4, 5], color: "#ea7b67" },
        { range: [5, 6], color: "#dd6773" },
        { range: [6, 7], color: "#c8597e" },
        { range: [7, 8], color: "#ad4f87" },
        { range: [8, 9], color: "#8b4a8c" }
      ]
    }
  ];

  //   var layout = { width: 600, height: 400, margin: { t: 0, b: 0 } };
  Plotly.newPlot("gauge", data);
}
