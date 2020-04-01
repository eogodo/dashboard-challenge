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
        },
        steps: [
          { range: [0, 1], color: "#F6F7E1" },
          { range: [1, 2], color: "#E9F7D2" },
          { range: [2, 3], color: "#DFF7CD" },
          { range: [3, 4], color: "#D6F7CD" },
          { range: [4, 5], color: "#C8F7CC" },
          { range: [5, 6], color: "#ADF7BF" },
          { range: [6, 7], color: "#9CF7AC" },
          { range: [7, 8], color: "#7CF789" },
          { range: [8, 9], color: "#52DE6B" }
        ]
      }
    }
  ];

  //   var layout = { width: 600, height: 400, margin: { t: 0, b: 0 } };
  Plotly.newPlot("gauge", data);
}
