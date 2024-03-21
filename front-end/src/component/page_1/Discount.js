import React, { Component } from "react";
import style from "../../styles/page_1/Discount.css";
import Res_img12 from "../../assets/page_1/12.jpg";
import Card from "../../assets/page_1/card.jpg";
import ApiService from "../../ApiService";

class Reservation_Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discounts: []
    };
  }

  componentDidMount() {
    this.loadDiscount();
  }

  loadDiscount = () => {
    ApiService.listDiscount()
      .then((res) => {
        const discounts = res.data.map((discount) => {
          return {
            dc_num: discount.dc_num,
            dc_main_title: discount.dc_main_title,
            dc_sub_title: discount.dc_sub_title,
            dc_content: discount.dc_content.split("/"),
            dc_main_img: discount.dc_main_img,
            dc_show: discount.dc_show,
            dc_sysdate: discount.dc_sysdate
          };
        })
        .filter((discount) => discount.dc_show === 'y');
  
        this.setState({
          discounts: discounts
        });
        console.log("loadDiscount 가져오기 성공 : ", discounts);
      })
      .catch((err) => {
        console.log("loadDiscount 가져오기 실패 : ", err);
      });
  };

  render() {
    return (
      <div className={`Discount ${style.Discount}`}>
        <div className="Discount_content">
          <div className="Discount_main">
            <br />
            <h4>할인안내</h4>
            <div className="Discount_sub">
              <ul className="Discount_list">
              {this.state.discounts.map((discount, index) => (
                <li key={index}>
                  <div className="Discount_img">
                    <img
                      src="http://cf.lottecinema.co.kr//Media/WebAdmin/37d3662be10842099ec113e57dd6c1d5.png"
                      alt="Discount_img"
                      className="Discount_image"
                    />
                    <div className="Discount_overlay">
                      <div className="Discount_ex">
                        <br />
                        {discount.dc_content.map((item, idx) => (
                          <React.Fragment key={idx}>
                            {item}
                            <br />
                          </React.Fragment>
                        ))}
                        <br />
                      </div>
                    </div>
                  </div>
                  <span className="Discount_ex_content">
                    <br />
                    <strong>{discount.dc_main_title}</strong>
                    <br />
                    {discount.dc_sub_title}
                    <br />
                  </span>
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation_Movie;
