import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import ApiService from '../../ApiService';

const ChartComponent = () => {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const fetchCustomerData = () => {
    ApiService.customerList()
      .then((res) => {
        console.log(res.data)
        setCustomerList(res.data);
        renderChart(res.data);
      })
      .catch((err) => {
        console.log('Error fetching customer data:', err);
      });
  };

  const renderChart = (data) => {
 
    const labels = generateLabels(); // x축에 들어갈 날짜 데이터 생성
    const memberCountByDate = calculateMemberCountByDate(data, labels); // 각 날짜별 회원 수 계산
    console.log("memberCountByDate")
    console.log(memberCountByDate)
    const chartArea = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(chartArea, {
      type: 'bar',
      data: {
        labels: labels, // x축에 들어갈 날짜 데이터
        datasets: [{
          label: '회원 수',
          data: memberCountByDate, // y축에 해당하는 회원 수 데이터
          backgroundColor: 'rgba(28, 92, 80, 0.2)',
          borderColor: 'rgba(28, 92, 80, 0.2)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: '날짜'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: '회원 수'
            }
          }
        }
      }
    });

    return myChart;
  };

  const generateLabels = () => {
    const labels = [];
    const today = new Date();

    //5일간에 데이터 
    for (let i = 4; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      labels.push(date.toISOString().slice(0, 10));
    }

    return labels;
  };

  const calculateMemberCountByDate = (data, labels) => {
    const memberCountByDate = [];
  
    labels.forEach((label) => {
      const count = data.filter((item) => {
        if (item.regdate) {
          // Unix timestamp를 JavaScript Date 객체로 변환
          const date = new Date(item.regdate);
          // Date 객체를 날짜 문자열로 변환하여 비교
          return date.toISOString().slice(0, 10) === label;
        }
        return false;
      }).length;
      memberCountByDate.push(count);
    });
  
    return memberCountByDate;
  };
  
  

  return (
    <div className="chartCon">
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default ChartComponent;
