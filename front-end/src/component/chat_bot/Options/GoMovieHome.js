import React from "react";
import { useHistory } from "react-router-dom";

import "./Options.css";

const GoMovieHome = (props) => {
 const history = useHistory();

  const handleOptionClick = () => {
      history.push("/movieMain");
  };

  const options = [
    {
      text: "영화홈",
      id: 1,
    },
   
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container"
          onClick={() => handleOptionClick()}
        >{buttonsMarkup}</div>;
};

export default GoMovieHome;