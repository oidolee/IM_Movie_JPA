import React, { useState } from "react";
import ApiService from "../../../ApiService";
import { Typography, Select, MenuItem, TextField, Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import style from "../../../styles/admin/page_6/Admin_coupon_Add.css";


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
    ic_img: "",
    ic_img_detail: "",
    ic_category: "",
    ic_point: "",
    ic_content: "",
    ic_contetn: "",
    ic_startDate: "",
    ic_endDate: "",

  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setCouponInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const fileName = selectedFile ? selectedFile.name : ""; // 파일이 선택되었을 때만 파일 이름 추출
    setCouponInfo(prevState => ({
      ...prevState,
      ic_img: fileName,
      ic_img_detail: fileName
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
    <div className={`Admin_coupon_Add ${style.Admin_coupon_Add}`}>
      <br />
      <br />
      <Typography variant="h5" className="couponAdd">
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
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          style: { marginTop: "20px" } // input 요소의 상단 여백 조정
        }}
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
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          style: { marginTop: "20px" } // input 요소의 상단 여백 조정
        }}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="쿠폰 이미지"
        type="file"
        name="ic_img"
        onChange={handleFileChange}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          style: { marginTop: "20px" } // input 요소의 상단 여백 조정
        }}
      />
      <br />
      <br />

      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="쿠폰 상세설명 이미지"
        type="file"
        name="ic_img_detail"
        onChange={handleFileChange}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          style: { marginTop: "20px" } // input 요소의 상단 여백 조정
        }}
      />
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
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          style: { marginTop: "20px" } // input 요소의 상단 여백 조정
        }}
      />
      <br />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="쿠폰 상세 내용"
        multiline  // 이 부분이 멀티라인을 활성화시킵니다.
        type="text"
        name="ic_content"
        value={couponInfo.ic_content}
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          style: { marginTop: "20px" } // input 요소의 상단 여백 조정
        }}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="쿠폰사용시작 날짜"
        type="date"
        name="ic_startDate"
        value={couponInfo.ic_startDate}
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          style: { marginTop: "20px" } // input 요소의 상단 여백 조정
        }}
      />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="쿠폰사용종료 날짜"
        type="date"
        name="ic_endDate"
        value={couponInfo.ic_endDate}
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          style: { marginTop: "20px" } // input 요소의 상단 여백 조정
        }}
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
