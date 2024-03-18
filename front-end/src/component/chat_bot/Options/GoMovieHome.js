import React from "react";
import { useHistory } from "react-router-dom";

import "./Options.css";

const GoMovieHome = (props) => {
 const history = useHistory();

  const handleOptionClick = (id) => {
    if (id === 1) {
      history.push("/page_1/Reservation_Movie");
    } else if (id === 2) {
      // 다른 옵션에 대한 처리
    } else if (id === 3) {
      // 다른 옵션에 대한 처리
    }
    // 필요한 만큼 옵션에 대한 처리 추가
  };

  const options = [
    {
      text: "영화홈",
      id: 1,
    },
   
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container"
          onClick={() => handleOptionClick(option.id)}
        >{buttonsMarkup}</div>;
};

export default GoMovieHome;