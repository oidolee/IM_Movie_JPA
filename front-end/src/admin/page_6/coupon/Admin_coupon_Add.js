import React, { useState } from "react";
import ApiService from "../../../ApiService";
import { Typography, TextField, Button } from "@mui/material";
import style from "../../../styles/admin/page_5/Admin_Arte_Add.css";


function Admin_coupon_Add ({history}) {
  const [couponInfo, setCouponInfo] = useState({
    
    ic_code: "",
    ic_name: "",
    ic_category: "",
    ic_point: "",
    ic_useDate: "",
    
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setCouponInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const saveCoupon = (e) => {
    e.preventDefault();

    ApiService.addCoupon(couponInfo)
      .then((res) => {
        console.log("ArteInsert 성공 : ", res.data);
        history.push("/admin/page_6/coupon/Admin_Coupon_List");
      })
      .catch((err) => {
        console.log("ArteInsert 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Arte_Add ${style.Admin_Arte_Add}`}>
      <br />
      <br />
      <Typography variant="h5" className="ArteAdd">
      쿠폰 추가
      </Typography>
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="ic_code"
        type="text"
        name="ic_code"
        value={couponInfo.ic_code}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="ic_name"
        type="text"
        name="ic_name"
        value={couponInfo.ic_name}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="ic_category"
        type="text"
        name="ic_category"
        value={couponInfo.ic_category}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="ic_point"
        type="text"
        name="ic_point"
        value={couponInfo.ic_point}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="ic_useDate"
        type="text"
        name="ic_useDate"
        value={couponInfo.ic_useDate}
        onChange={onChange}
      />
      <br />
      <br />
      <br />
      <Button
        className="saveBtn"
        variant="contained"
        color="primary"
        onClick={saveCoupon}
      >
        save_Arte
      </Button>
    </div>
  );
};

export default Admin_coupon_Add;
