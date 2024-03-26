import React from "react";
import { useHistory } from "react-router-dom";

import "./Ticket.css";

const Tickect_1_2_Qe = (props) => {
    const history = useHistory();

    const handleOptionClick = (id) => {
      if (id === 1) {
        history.push("/page_1/Reservation_Movie");
      } else if (id === 2) {
        // handleOptionClick 함수 대신 option.handler를 호출
        props.actionProvider.goHome();
      } else {
        // 다른 경우에 대한 처리
      }
    };

  const options = [
    { text: "영화예매하기", id: 1 },
    { text: "처음으로", 
      id: 2 
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button
      key={option.id}
      onClick={() => handleOptionClick(option.id)}
      className="option-button"
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Tickect_1_2_Qe;
