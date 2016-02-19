$(function() {
  $('#container').highcharts({
    chart: {
      zoomType: 'xy',
      marginBottom: 100

    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Retirement Planner'
    },
    tooltip: {
      enabled: false
    },
    subtitle: {
      text: 'CONGRATULATIONS! At age 85, you will have a savings of $25,813'
    },
    xAxis: [{
      categories: ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'],

      tickmarkPlacement: 'on',
    }],
    yAxis: [{ // Secondary yAxis
      title: {
        text: 'Thousands',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        format: '${value}',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }],

    legend: {
      layout: 'horizontal',
      align: 'left',
      x: 0,
      verticalAlign: 'bottom',
      y: 0,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [{
      name: 'Savings Disbursements',
      type: 'column',

      marker: {
        enabled: false
      },
      color: '#7cb5ec',
      zIndex: 1,
      data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 78517, 80872, 83298, 85797, 88371, 91022, 93753, 96566, 99463, 102446, 105520, 108685, 111946, 115304, 118764, 122326, 125996, 129776, 133669, 137679]

    }, {
      name: 'Cone of Uncertainty',
      data: [
        [78150, 79350],
        [97253, 100103],
        [117359, 122361],
        [138520, 146231],
        [160792, 171833],
        [184234, 199291],
        [208906, 228740],
        [234874, 260324],
        [262205, 294197],
        [290970, 330526],
        [321246, 369489],
        [353112, 411278],
        [386650, 456095],
        [421949, 504161],
        [459102, 555714],
        [498204, 611002],
        [539360, 670300],
        [582677, 733898],
        [628267, 802105],
        [676251, 875257],
        [726754, 953713],
        [779909, 1037858],
        [835854, 1128102],
        [894736, 1224889],
        [956710, 1328694],
        [928421, 1346508],
        [896291, 1363258],
        [860047, 1378795],
        [819403, 1392961],
        [774050, 1405579],
        [723665, 1416461],
        [667905, 1425402],
        [606404, 1432178],
        [538778, 1436548],
        [464617, 1438251],
        [383490, 1437005],
        [294938, 1432503],
        [198476, 1424413],
        [93591, 1412378],
        [0, 1396012],
        [0, 1374896],
        [0, 1348581],
        [0, 1316576],
        [0, 1278358],
        [0, 1233360]
      ],
      type: 'arearange',
      lineWidth: 1,

      zIndex: 0,
      color: '#F9F0C5',


    }, {
      name: 'Savings Balance - Retirement',
      type: 'spline',
      marker: {
        enabled: false
      },
      color: '#FF0000',
      lineWidth: 2,
      data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1125667, 1117504, 1106476, 1092332, 1074806, 1053610, 1028438, 998963, 964832, 925672, 881080, 830628, 773856, 710276, 639364, 560561, 473270, 376853, 270630, 153875],
      zIndex: 1
    }, {
      name: 'Savings Balance - Working Years',
      type: 'spline',
      marker: {
        enabled: false
      },
      color: '#37B900',
      zIndex: 1,
      lineWidth: 2,
      data: [60000, 78750, 98672, 119839, 142329, 166224, 191613, 218589, 247251, 277704, 310061, 344440, 380967, 419777, 461014, 504827, 551379, 600840, 653392, 709229, 768556, 831591, 898565, 969726, 1045333, 1125667, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    }]
  });
});
