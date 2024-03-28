import React from "react";
import { useHistory } from "react-router-dom";

import "./Options.css";

const GoMovieHome = (props) => {
  const history = useHistory();

  const handleOptionClick = (id) => {
    if (id === 1) {
      history.push("/movieMain");
    } else if (id === 2) {
      props.actionProvider.goHome();
    } else {
      // 다른 경우에 대한 처리
    }
  };

  const options = [
    { text: "영화홈", id: 1 },
    { text: "처음으로", id: 2 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} className="option-button" onClick={() => handleOptionClick(option.id)}>
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default GoMovieHome;
