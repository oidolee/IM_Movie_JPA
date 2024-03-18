import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "영화예매",
      // handler: props.actionProvider.showTikeckPage,
      id: 1,
      // text: "Javascript",
      handler: props.actionProvider.handlechooseTickeck,
      // id: 1,
    },
    { text: "영화소식", handler: () => {}, id: 2 },
    { text: "스토어", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;