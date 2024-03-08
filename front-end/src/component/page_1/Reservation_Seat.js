import React, { Component } from "react";
import moment from "moment";
import style from "../../styles/page_1/Reservation_Seat.css";
import Res_movie from "../../assets/page_1/movie.jpg";
import Res_img15 from "../../assets/page_1/15.jpg";
import Res_img12 from "../../assets/page_1/12.jpg";
import Res_imgAll from "../../assets/page_1/all.jpg";

class QuantityCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  handleDecrement = () => {
    if (this.state.quantity > 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.quantity}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

class SingleSquare1 extends Component {
  render() {
    return <div className="single-square1" />;
  }
}

class SingleSquare2 extends Component {
  render() {
    return <div className="single-square2" />;
  }
}

class SingleSquare3 extends Component {
  render() {
    return <div className="single-square3" />;
  }
}

class SingleSquare4 extends Component {
  render() {
    return <div className="single-square4" />;
  }
}

class SeatMap extends Component {
  render() {
    const { rows, columns } = this.props;
    const seats = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        seats.push(<Square key={`${i}-${j}`} row={i} column={j} />);
      }
      seats.push(<br key={`br-${i}`} />);
    }

    return <div className="MovieSeats">{seats}</div>;
  }
}

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  handleChange = () => {
    if (this.isDisabled()) {
      return;
    }

    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
  };

  isDisabled = () => {
    const { row, column } = this.props;
    return column === 2 || column === 11;
  };

  render() {
    const { checked } = this.state;
    const { row, column } = this.props;
    const squareClass = checked ? "square checked" : "square";

    const backgroundColor = column === 2 || column === 11 ? "#000" : "";

    return (
      <div
        className={squareClass}
        onClick={this.handleChange}
        style={{ backgroundColor }}
      >
        {checked && <div className="checked-square" />}
      </div>
    );
  }
}

class Reservation_Movie extends Component {
  render() {
    const sysdate = moment().format("YYYY-MM-DD");

    return (
      <div className={`Res_seat ${style.Res_seat}`}>
        <div className="Res_seat1">
          <ul>
            <li className="step" id="step2">
              <a href="#Res_step01">
                <strong>
                  <span>
                    01
                    <br />
                    상영시간
                  </span>
                </strong>
                <div className="step_content">
                  <dl>
                    <dt>선택한 영화 제목</dt>
                    <dd></dd>
                    <dt>선택한 상영관</dt>
                    <dd></dd>
                    <dt>선택한 상영 날짜</dt>
                    <dd></dd>
                    <dt>선택한 상영 시간</dt>
                    <dd></dd>
                  </dl>
                </div>
              </a>
            </li>
            <li className="step" id="step1">
              <a href="#Res_step02">
                <strong>
                  <span>
                    02
                    <br />
                    인원/좌석
                  </span>
                </strong>
                <div className="step_content">
                  <dl>
                    <dt>인원</dt>
                    <dd></dd>
                    <dt>좌석</dt>
                    <dd></dd>
                  </dl>
                </div>
              </a>
            </li>
            <li className="step">
              <a href="#Res_step03">
                <strong>
                  <span>
                    03
                    <br />
                    결제
                  </span>
                </strong>
                <div className="step_content">
                  <dl>
                    <dt>티켓금액</dt>
                    <dd></dd>
                    <dt>할인금액</dt>
                    <dd></dd>
                    <dt>총합계</dt>
                    <dd></dd>
                  </dl>
                </div>
              </a>
            </li>
            <li className="step">
              <a href="#Res_step04">
                <strong>
                  <span>
                    04
                    <br />
                    결제완료
                  </span>
                </strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="Res_seat2">
          <ul className="Res_left">
            <li className="Res_tit">
              인원/좌석 선택 <p>인원은 최대 8명까지 가능합니다.</p>
            </li>
            <div className="Res_seat2_header">
              <ul className="Res_movie">
                <li>
                  <img src={Res_movie} className="movie_img" />
                </li>
                <ul className="Res_movie_content">
                  <li>
                    <img src={Res_img15} className="age_img" />
                    <strong className="movie_name">파묘</strong> | 24.03.10(일)
                    | 20:30 ~ 22:54 | 영등포 1관
                  </li>
                  <li>
                    <div>
                      <ul className="Res_cnt">
                        <li>
                          성인
                          <QuantityCounter />
                        </li>
                        <li>
                          청소년
                          <QuantityCounter />
                        </li>
                        <li>
                          경로
                          <QuantityCounter />
                        </li>
                        <li>
                          장애인
                          <QuantityCounter />
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </ul>
            </div>
          </ul>

          <div className="Res_seat2_main">
            <span className="Res_screen">SCREEN</span>
            <div className="seatOutput">
              <SeatMap rows={8} columns={14} />
            </div>
            <div className="Res_seat2_bottom">
              <SingleSquare1 /> 선택좌석
              <SingleSquare2 /> 선택가능
              <SingleSquare3 /> 예매완료
              <SingleSquare4 /> 선택불가
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation_Movie;
