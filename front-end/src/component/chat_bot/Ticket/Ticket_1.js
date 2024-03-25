import React from "react";

import "./Ticket.css";

const Ticket_1 = (props) => {
  const options = [
    {
      text: "공포",
      // handler: props.actionProvider.showTikeckPage,
      id: 1,
      // text: "Javascript",
      handler: props.actionProvider.tickect_1_answer,
      // id: 1,
    },
    { 
      text: "감동", 
      handler: props.actionProvider.tickect_2_answer,
      id: 2 
    },
    { 
      text: "애니메이션", 
      handler: props.actionProvider.tickect_3_answer,
      id: 3 
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Ticket_1;