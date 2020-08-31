import React, { useState, useEffect } from "react";
import { Line as LineChart } from "react-chartjs-2";
import dayjs from "dayjs";

const chartOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
    callbacks: {
      label: tooltipItem => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
      title: () => null,
    }
  },
};

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function parseDataForChart(data) {
  const labels = Object.keys(data).map(key => dayjs(key, 'YYYYMMDD').format('DD MM YYYY'))
  const colors = Object.values(data).map(key => randomColor());

  return {
    labels: labels,
    values: Object.values(data),
    colors: colors
  };
}

function Chart({ url = null, title = null }) {
  const [ data, setData ] = useState({});

  const exh = (canvas) => {
    const ctx = canvas.getContext("2d")
    const gradientStroke = ctx.createLinearGradient(1500, 0, 100, 0);

    gradientStroke.addColorStop(0, "#DC232B");
    gradientStroke.addColorStop(1, "#f49080");

    return {
      labels: data.labels,
      datasets: [{
        label: title,
        data: data.values,
        fill: false,
        backgroundColor: gradientStroke,
        borderColor: gradientStroke,
        borderWidth: .5
      }]
    };
  }

  useEffect(() => {
    if (url) {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          if (res.status.code === 200)
            return setData(parseDataForChart(res.payload.data))

          return setData([])
        })
        .catch(() => setData([]))
    }
  },[url])

  if (!Object.keys(data).length) {
    return (
      <div />
    )
  }

  return (
    <div className="chart">
      {
        title && (
          <div className="chart__title">
            {title}
          </div>
        )
      }

      <article className="chart__graphic">
        <LineChart data={exh} options={chartOptions} />
      </article>
    </div>
  )
}

export default Chart;