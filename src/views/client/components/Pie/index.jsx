import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';
import './index.scss';
const Index = () => {
  let pie1 = useRef(null);
  let pie2 = useRef(null);
  let pie3 = useRef(null);
  useEffect(() => {
    let myChart1 = echarts.init(pie1.current);
    let myChart2 = echarts.init(pie2.current);
    let myChart3 = echarts.init(pie3.current);

    let option1 = {
      xAxis: {
        type: 'category',
        boundaryGap: false
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '30%']
      },
      visualMap: {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [
          {
            gt: 1,
            lt: 3,
            color: 'rgba(0, 0, 180, 0.4)'
          },
          {
            gt: 5,
            lt: 7,
            color: 'rgba(0, 0, 180, 0.4)'
          }
        ]
      },
      series: [
        {
          type: 'line',
          smooth: 0.6,
          symbol: 'none',
          lineStyle: {
            color: '#5470C6',
            width: 5
          },
          markLine: {
            symbol: ['none', 'none'],
            label: { show: false },
            data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
          },
          areaStyle: {},
          data: [
            ['2019-10-10', 200],
            ['2019-10-11', 560],
            ['2019-10-12', 750],
            ['2019-10-13', 580],
            ['2019-10-14', 250],
            ['2019-10-15', 300],
            ['2019-10-16', 450],
            ['2019-10-17', 300],
            ['2019-10-18', 100]
          ]
        }
      ]
    };
    let option2 = {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      series: [
        {
          name: 'Pressure',
          type: 'gauge',
          progress: {
            show: true
          },
          detail: {
            valueAnimation: true,
            formatter: '{value}'
          },
          data: [
            {
              value: 50,
              name: 'SCORE'
            }
          ]
        }
      ]
    };
    let option3 = {
      title: {
        text: 'Proportion of Browsers',
        subtext: 'Fake Data',
        top: 10,
        left: 10
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        type: 'scroll',
        bottom: 10,
        data: (function () {
          var list = [];
          for (var i = 1; i <= 28; i++) {
            list.push(i + 2000 + '');
          }
          return list;
        })()
      },
      visualMap: {
        top: 'middle',
        right: 10,
        color: ['red', 'yellow'],
        calculable: true
      },
      radar: {
        indicator: [{ name: 'IE8-' }, { name: 'IE9+' }, { name: 'Safari' }, { name: 'Firefox' }, { name: 'Chrome' }]
      },
      series: (function () {
        var series = [];
        for (var i = 1; i <= 28; i++) {
          series.push({
            type: 'radar',
            symbol: 'none',
            lineStyle: {
              width: 1
            },
            emphasis: {
              areaStyle: {
                color: 'rgba(0,250,0,0.3)'
              }
            },
            data: [
              {
                value: [(40 - i) * 10, (38 - i) * 4 + 60, i * 5 + 10, i * 9, (i * i) / 2],
                name: i + 2000 + ''
              }
            ]
          });
        }
        return series;
      })()
    };
    myChart1.setOption(option1);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
  }, []);

  return (
    <div>
      <div className='pie-box'>
        <div ref={pie1} style={{ width: '400px', height: '500px' }}></div>
        <div ref={pie2} style={{ width: '300px', height: '300px' }}></div>
        <div ref={pie3} style={{ width: '500px', height: '500px' }}></div>
      </div>
    </div>
  );
};

export default Index;
