export const lineData = (graphLabels, graphData) => {
  return {
    labels: graphLabels,
    datasets: [
      {
        label: 'Total Likes',
        fill: false,
        borderColor: 'blue',
        borderWidth: 2,
        pointRadius: 2,
        data: graphData,
      },
    ],
  };
};

export const options = {
  legend: {
    display: false,
  },
  responsive: true,
  title: {
    display: true,
    text: 'Likes Analytics',
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Likes',
        },
      },
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Days',
        },
      },
    ],
  },
};
