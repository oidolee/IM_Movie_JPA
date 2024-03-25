import React from 'react';
import CalendarComponent from './CalendarComponent';
import ChartComponent from './ChartComponent';
import { Link } from 'react-router-dom';
const Admin_Contents = () => {
  // 여기에 관리자 메인 화면의 상태나 로직을 추가할 수 있습니다.

  return (

      <div class="container-fluid px-4">
        <h1 class="mt-4">관리자 메인</h1>
     
                
        <div class="row">
          <div class="col-xl-6">
            <div class="card mb-4">
              <div class="card-header">
                회원 등록 현황
              </div>
              <div class="card-body">
              <ChartComponent />
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="card mb-4">
              <div class="card-header">
                현재 상영작 일정
              </div>
              <div class="card-body">
                <CalendarComponent />
              </div>
            </div>
          </div>

        </div>
        
      </div>
  );
};

export default Admin_Contents;