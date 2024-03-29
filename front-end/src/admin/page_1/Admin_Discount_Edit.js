import React, { Component } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button, Select, MenuItem } from "@mui/material";
import style from "../../styles/admin/page_1/Admin_Discount_Edit.css";

class Admin_Discount_Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dc_num: "",
      dc_main_title: "",
      dc_sub_title: "",
      dc_content: "",
      dc_main_img: "",
      dc_show: "",
      dc_sysdate: "",
    };
  }

  componentDidMount() {
    this.selectLoad();
  }

  selectLoad = () => {
    ApiService.selectDiscount(window.localStorage.getItem("dc_num"))
      .then((res) => {
        let list = res.data;

        this.setState({
          dc_num: list.dto.dc_num,
          dc_main_title: list.dto.dc_main_title,
          dc_sub_title: list.dto.dc_sub_title,
          dc_content: list.dto.dc_content,
          dc_main_img: list.dto.dc_main_img,
          dc_show: list.dto.dc_show,
          dc_sysdate: list.dto.dc_sysdate,
        });
        console.log("selectByIdDiscount 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("selectByIdDiscount 실패 : ", err);
      });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  editDiscount = (e) => {
    e.preventDefault();

    let inputData = {
      dc_num: this.state.dc_num,
      dc_main_title: this.state.dc_main_title,
      dc_sub_title: this.state.dc_sub_title,
      dc_content: this.state.dc_content,
      dc_main_img: this.state.dc_main_img,
      dc_show: this.state.dc_show,
      dc_sysdate: this.state.dc_sysdate,
    };

    ApiService.editDiscount(inputData)
      .then((res) => {
        this.setState({});
        console.log("editDiscount 성공 : ", res.data);
        this.props.history.push("/admin/page_1/Admin_Discount_List");
      })
      .catch((err) => {
        console.log("editDiscount 실패 : ", err);
      });
  };

  render() {
    return (
      <div className={`Admin_Discount_Edit ${style.Admin_Discount_Edit}`}>
        <br />
        <br />
        <Typography variant="h5" className="discountEdit">
          수정
        </Typography>
        <TextField
          required
          id="standard-required"
          variant="standard"
          label="Dc_Num"
          type="text"
          name="dc_num"
          value={this.state.dc_num}
        />
        <br />

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

        <Select
          required
          id="standard-required"
          variant="standard"
          label="Dc_Show"
          type="text"
          name="dc_show"
          value={this.state.dc_show}
          onChange={this.onChange}
        >
          <MenuItem value="n">n</MenuItem>
          <MenuItem value="y">y</MenuItem>
        </Select>
        <br />

        <TextField
          required
          id="standard-required"
          variant="standard"
          label="Dc_Sysdate"
          type="text"
          name="dc_sysdate"
          value={this.state.dc_sysdate}
        />
        <br />
        <br />

        <Button className="editBtn" variant="contained" color="primary" onClick={this.editDiscount}>
          수정완료
        </Button>
      </div>
    );
  }
}

export default Admin_Discount_Edit;
