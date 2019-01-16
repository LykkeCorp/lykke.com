const PRODUCTS = [
  {ticker: 'BTCUSD', name: 'Bitcoin'},
  {ticker: 'ETHUSD', name: 'Ethereum'},
  {ticker: 'LKKUSD', name: 'Lykke'},
  {ticker: 'LTCUSD', name: 'Litecoin'},
  {ticker: 'DASHUSD', name: 'Dash'},
  {ticker: 'ETCUSD', name: 'Ethereum Classic'}
];

const CHART_DATA = (dates, data, color) => {
  return {
      labels: dates,
      datasets: [{
          fill: false,
          showTooltips: false,
          borderColor: color,
          data: data,
          cubicInterpolationMode: 'monotone',
          pointRadius: 0,
      }]
  }
};

const CHART_OPTIONS = {
    events: [],
    legend: {
        display: false
    },
    bezierCurve : false,
    scales: {
        xAxes: [{
            gridLines: {
                display:false
            },
            ticks: {
                autoSkip: true,
                maxTicksLimit: 5
            }
        }],
        yAxes: [{
            ticks: {
              stepSize: 30
            },
            gridLines: {
                display:false,
            }
        }]
    }
};

module.exports = {
  PRODUCTS,
  CHART_DATA,
  CHART_OPTIONS
};
