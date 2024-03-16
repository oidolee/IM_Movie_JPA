import React, { useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';


const koLocale = {
  code: 'ko',
  week: {
    dow: 1, // 월요일부터 시작
    doy: 4, // 1월 1일이 포함된 주가 4일 이상이어야 함
  },
  buttonText: {
    today: '오늘',
    month: '월',
    week: '주',
    day: '일',
    list: '목록',
  },
  weekText: '주',
  allDayText: '하루종일',
  moreLinkText: '개',
  noEventsText: '일정이 없습니다',
};

const CalendarComponent = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    console.log('CalendarComponent rendered');
  
    if (calendarRef.current) {
      const manualEvents = [
        {
          id: '1',
          title: '수동 일정 1',
          start: '2024-03-18',
          end: '2024-03-20',
          backgroundColor: 'blue',
          textColor: 'white'
        },
        {
            id: '12',
            title: '수동 일정 12',
            start: '2024-03-19',
            end: '2024-03-21',
            backgroundColor: 'red',
            textColor: 'white'
          }
      ];
  
      // 캘린더에 이벤트를 추가하기 전에 먼저 모든 이벤트를 제거합니다.
      calendarRef.current.getApi().removeAllEvents();
  
      // 그런 다음 새로운 이벤트를 추가합니다.
      calendarRef.current.getApi().addEventSource(manualEvents);
    }
  }, []); // useEffect를 빈 의존성 배열로 설정하여 한 번만 실행되도록 합니다.
  
  const handleButtonClick = (buttonName) => {
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView(buttonName);
    }
  };

  return (
    <div id="calendar">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        locale={koLocale}
        headerToolbar={{
            start: 'today prev,next',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }}
          
      />
    </div>
  );
};

export default CalendarComponent;
