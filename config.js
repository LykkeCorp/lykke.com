const moment = require('moment');
const PRODUCTS = [
  {ticker: 'BTCUSD', name: 'Bitcoin'},
  {ticker: 'ETHUSD', name: 'Ethereum'},
  {ticker: 'LKKUSD', name: 'Lykke'},
  {ticker: 'LTCUSD', name: 'Litecoin'},
  {ticker: 'DASHUSD', name: 'Dash'},
  {ticker: 'ETCUSD', name: 'Ethereum Classic'}
];

const CHART_DATA = (dates, data, color, type) => {
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

const CHART_OPTIONS = (type) => {
    const stepSize = type => {
        if(type === '24h') {
            return 14300
        } else if (type === '5d') {
            return 1
        } else return 3
    }
    return {
        events: [],
        legend: {
            display: false
        },
        bezierCurve : false,
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: type === '24h' ? 'second' : 'day',
                    distribution: 'linear',
                    unitStepSize: stepSize(type),
                    displayFormats: {
                        millisecond: 'LT',
                        second: 'LT',
                        minute: 'LT',
                        hour: 'll',
                        day: 'll',
                        month: 'll',
                        year: 'll'
                    }
                },
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                ticks: {
                    maxTicksLimit: 5,
                },
                gridLines: {
                    display:false,
                }
            }]
        }
    }
};

module.exports = {
  PRODUCTS,
  CHART_DATA,
  CHART_OPTIONS
};
