import React, { Component } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button } from "@mui/material";
import style from "../../styles/admin/page_1/Admin_Discount_Add.css";

class Admin_Discount_Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dc_main_title: "",
      dc_sub_title: "",
      dc_content: "",
      dc_main_img: "",
      dc_show: "y",
      dc_sysdate: new Date().toISOString(),
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveDiscount = (e) => {
    e.preventDefault();

    let inputData = {
      dc_main_title: this.state.dc_main_title,
      dc_sub_title: this.state.dc_sub_title,
      dc_content: this.state.dc_content,
      dc_main_img: this.state.dc_main_img,
      dc_show: this.state.dc_show,
      dc_sysdate: this.state.dc_sysdate,
    };

    ApiService.addDiscount(inputData)
      .then((res) => {
        this.setState({});
        console.log("DiscountInsert 성공 : ", res.data);
        this.props.history.push("/admin/page_1/Admin_Discount_List");
      })
      .catch((err) => {
        console.log("DiscountInsert 실패 : ", err);
      });
  };

  render() {
    return (
      <div className={`Admin_Discount_Add ${style.Admin_Discount_Add}`}>
        <br />
        <br />
        <Typography variant="h5" className="discountAdd">
          등록
        </Typography>
        <TextField
          required
          id="standard-required"
          variant="standard"
          label="Main_Title"
          type="text"
          name="dc_main_title"
          value={this.state.dc_main_title}
          onChange={this.onChange}
        />
        <br />
        <TextField
          required
          id="standard-required"
          variant="standard"
          label="Sub_Title"
          type="text"
          name="dc_sub_title"
          value={this.state.dc_sub_title}
          onChange={this.onChange}
        />
        <br />
        <TextField
          required
          id="standard-required"
          variant="standard"
          label="Content"
          type="text"
          name="dc_content"
          value={this.state.dc_content}
          onChange={this.onChange}
        />
        <br />
        <TextField
          required
          id="standard-required"
          variant="standard"
          label="Main_Img"
          type="text"
          name="dc_main_img"
          value={this.state.dc_main_img}
          onChange={this.onChange}
        />
        <br />
        <br />
        <Button
          className="saveBtn"
          variant="contained"
          color="primary"
          onClick={this.saveDiscount}
        >
          등록 완료
        </Button>
      </div>
    );
  }
}

export default Admin_Discount_Add;
