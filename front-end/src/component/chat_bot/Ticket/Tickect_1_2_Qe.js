import React from "react";
import { useHistory } from "react-router-dom";

import "./Ticket.css";

const Tickect_1_2_Qe = () => {
    const history = useHistory();

    const handleOptionClick = (id) => {
        history.push("/movieMain");
      // 필요한 만큼 옵션에 대한 처리 추가
    };

  const options = [
    { text: "영화예매하기", id: 1 },
    { text: "처음으로", id: 2 },
    { text: "종료", id: 3 },
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
