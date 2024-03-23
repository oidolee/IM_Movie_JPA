import React, { useState } from "react";
import ApiService from "../../../ApiService";
import { Typography, Select, MenuItem, TextField, Button } from "@mui/material";
import style from "../../../styles/admin/page_5/Admin_Arte_Add.css";


function Admin_coupon_Add({ history }) {

  // 중복되지 않는 랜덤 코드 생성 함수
  const generateUniqueRandomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const existingCodes = new Set(); // 중복 코드를 추적하기 위한 Set

    do {
      result = '';
      for (let i = 0; i < 8; i++) { // 코드 길이는 8로 가정
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
    } while (existingCodes.has(result)); // 생성된 코드가 중복될 경우 다시 생성

    existingCodes.add(result); // 생성된 코드를 Set에 추가하여 중복을 피함
    return result;
  };


  const [couponInfo, setCouponInfo] = useState({

    ic_code: generateUniqueRandomCode(),
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
        console.log("addCoupon 성공 : ", res.data);
        history.push("/admin/page_6/coupon/Admin_Coupon_List");
      })
      .catch((err) => {
        console.log("addCoupon 실패 : ", err);
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
        label="쿠폰코드"
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
        label="쿠폰 이름"
        type="text"
        name="ic_name"
        value={couponInfo.ic_name}
        onChange={onChange}
      />
      <br />
      {/* <TextField
        required
        id="standard-required"
        variant="standard"
        label="ic_category"
        type="text"
        name="ic_category"
        value={couponInfo.ic_category}
        onChange={onChange}
      /> */}
      <br />
      <br />
      <Select
        required
        id="standard-required"
        variant="standard"
        label="ic_category"
        name="ic_category"
        value={couponInfo.ic_category}
        onChange={onChange}
        style={{width :'700px'}}
      >
        <MenuItem value={'#'}>카테고리를 정해주세요</MenuItem >
        <MenuItem value={'영화'}>영화관</MenuItem >
        <MenuItem value={'스토어'}>스토어</MenuItem >
      </Select>

      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="포인트"
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
        label="사용기한"
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
        저장
      </Button>
    </div>
  );
};

export default Admin_coupon_Add;
