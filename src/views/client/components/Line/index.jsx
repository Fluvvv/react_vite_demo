import React, { useEffect, useRef } from 'react';
import './index.scss';
import * as echarts from 'echarts';

export default function Index() {
  let main = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(main.current);
    let option = {
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
      },
      yAxis: {},
      series: [
        {
          data: [10, 22, 28, 23, 19],
          type: 'line',
          smooth: true
        }
      ]
    };
    myChart.setOption(option);
  }, []);

  return (
    <div>
      <div className='line-main-box' ref={main}></div>
    </div>
  );
}
