import React, { Component } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button } from "@mui/material";

class Admin_Discount_Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dc_main_title: "",
      dc_sub_title: "",
      dc_main_img: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveDiscount = (e) => {
    e.preventDefault();

    let iputDate = {
      main: this.state.dc_main_title,
      sub: this.state.dc_sub_title,
      img: this.state.dc_main_img,
    };

    ApiService.addDiscount(iputDate)
      .then(res => {
        this.setState({})
        console.log("DiscountInsert 성공 : ", res.data);
        this.props.history.push("/admin/page_1/Admin_Discount_List");
      })
      .catch(err => {
        console.log("DiscountInsert 실패 : ", err);
      });
  };

  render() {
    return (
      <div align="center">
        <br />
        <br />
        <Typography variant="h5">Discount_Add</Typography>
        <TextField
          required
          id="standard-required"
          variant="standard"
          label="Main_Title"
          type="text"
          name="dc_main_title"
          value={this.state.main}
          placeholder="Input Main_Title"
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
          value={this.state.sub}
          placeholder="Input Sub_Title"
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
          value={this.state.img}
          placeholder="Input Main_Img"
          onChange={this.onChange}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={this.saveDiscount}>
          saveDiscount
        </Button>
      </div>
    );
  }
}

export default Admin_Discount_Add;
