import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  useEffect(() => {
    // 차트를 그럴 영역을 dom요소로 가져온다.
    var chartArea = document.getElementById('myChart').getContext('2d');
    // 차트를 생성한다. 
    var myChart = new Chart(chartArea, {
      // ①차트의 종류(String)
      type: 'bar',
      // ②차트의 데이터(Object)
      data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [{
          // ⑤dataset의 이름(String)
          label: '# of Votes',
          // ⑥dataset값(Array)
          data: [5, 19, 3, 5, 2, 3],
          // ⑦dataset의 배경색(rgba값을 String으로 표현)
          backgroundColor: 'rgba(28, 92, 80, 0.2)',
          // ⑧dataset의 선 색(rgba값을 String으로 표현)
          borderColor: 'rgba(28, 92, 80, 0.2)',
          // ⑨dataset의 선 두께(Number)
          borderWidth: 1
        }]
      },
      // ⑩차트의 설정(Object)
      options: {
        //가로 세로 값 자동 조정
        responsive: true, // 반응형으로 설정
        // ⑪축에 관한 설정(Object)
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Colors' // x축 레이블
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Votes' // y축 레이블
            }
          }
        }
      }
    });

    // 컴포넌트가 unmount될 때 차트 객체 파기
    return () => {
      myChart.destroy();
    };
  }, []); // useEffect를 빈 의존성 배열로 설정하여 한 번만 실행되도록 합니다.

  return (
    <div className="chartCon">
      {/* 차트를 그릴 영역으로 canvas태그를 사용한다. */}
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default ChartComponent;
