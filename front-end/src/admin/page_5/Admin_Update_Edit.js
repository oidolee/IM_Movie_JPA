import React, { useState, useEffect } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button, Select, MenuItem } from "@mui/material";
import style from "../../styles/admin/page_5/Admin_Update_Edit.css";

const Admin_Discount_Edit = ({ history }) => {
  const [discountInfo, setDiscountInfo] = useState({
    up_Num: "",
    up_Movie_Img: "",
    up_Movie_Title: "",
    up_Movie_Date: "",
    up_Movie_Time: "",
    up_Movie_Age: "",
    up_Movie_Visitor: "",
    up_Movie_Contents: "",
    up_Movie_Con: "",
    up_Movie_Trailer: "",
  });

  useEffect(() => {
    selectLoad();
  }, []);

  const selectLoad = () => {
    ApiService.selectUpdate(window.localStorage.getItem("up_Num"))
      .then((res) => {
        let list = res.data;

        setDiscountInfo({
          up_Num: list.dto.dc_num,
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

  const onChange = (e) => {
    setDiscountInfo({
      ...discountInfo,
      [e.target.name]: e.target.value,
    });
  };

  const editDiscount = (e) => {
    e.preventDefault();

    ApiService.editDiscount(discountInfo)
      .then((res) => {
        console.log("editDiscount 성공 : ", res.data);
        history.push("/admin/page_1/Admin_Discount_List");
      })
      .catch((err) => {
        console.log("editDiscount 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Discount_Edit ${style.Admin_Discount_Edit}`}>
      <br />
      <br />
      <Typography variant="h5" className="discountEdit">
        Discount_Edit
      </Typography>
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Dc_Num"
        type="text"
        name="dc_num"
        value={discountInfo.dc_num}
        InputProps={{
          readOnly: true,
        }}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Main_Title"
        type="text"
        name="dc_main_title"
        value={discountInfo.dc_main_title}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Sub_Title"
        type="text"
        name="dc_sub_title"
        value={discountInfo.dc_sub_title}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Content"
        type="text"
        name="dc_content"
        value={discountInfo.dc_content}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Main_Img"
        type="text"
        name="dc_main_img"
        value={discountInfo.dc_main_img}
        onChange={onChange}
      />
      <br />

      <Select
        required
        id="standard-required"
        variant="standard"
        label="Dc_Show"
        name="dc_show"
        value={discountInfo.dc_show}
        onChange={onChange}
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
        value={discountInfo.dc_sysdate}
        InputProps={{
          readOnly: true,
        }}
      />
      <br />
      <br />

      <Button
        className="editBtn"
        variant="contained"
        color="primary"
        onClick={editDiscount}
      >
        edit_Discount
      </Button>
    </div>
  );
};

export default Admin_Discount_Edit;
