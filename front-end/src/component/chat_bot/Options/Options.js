import React from "react";
import { useHistory } from "react-router-dom"; // React Router의 useHistory 임포트

import "./Options.css";

const Options = (props) => {
  const history = useHistory(); // useHistory 훅을 이용하여 history 객체 생성

  const handleOptionClick = () => {
    history.push("/page3"); // "스토어" 페이지로 이동
  };

  const options = [
    {
      text: "영화예매",
      handler: props.actionProvider.handlechooseTickeck,
      id: 1,
    },
    {
      text: "영화소식",
      handler: props.actionProvider.movieNews,
      id: 2,
    },
    {
      text: "스토어",
      handler: props.actionProvider.handleOptionClick, // 수정된 부분: 스토어 페이지로 이동하는 함수
      id: 3,
    },
  ];


  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={() => {
      if(option.id === 3) {
        handleOptionClick(); // id가 3일 때만 handleOptionClick 함수 호출
      } else {
        option.handler(); // 그 외에는 각 option의 handler 호출
      }
    }} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
