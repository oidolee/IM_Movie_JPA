import React, { useState, useEffect } from "react";
import { Typography, Select, MenuItem, TextField, Button } from "@mui/material";
import { useHistory } from 'react-router-dom';
import style from "../../../styles/admin/page_6/Admin_coupon_Edit.css";
import ApiService from "../../../ApiService";
import { useParams } from 'react-router-dom';

function Admin_Update_Edit() {
  const history = useHistory();
  const { ic_num } = useParams();
  const [updateInfo, setUpdateInfo] = useState({
    ic_num: ic_num,
    ic_code: "",
    ic_name: "",
    ic_img: "",
    ic_category: "",
    ic_point: "",
    ic_startDate: "",
    ic_endDate: "",
  });

  useEffect(() => {
    selectLoad(ic_num);
  }, []);

  // 한건조회
  const selectLoad = (ic_num) => {
    ApiService.couponDetailList(ic_num)
      .then(res => {
        let list = res.data;
        console.log('ic_num : ' + ic_num)
        console.log('data,', res.data);
        setUpdateInfo({
          ic_num: list.cpdto.ic_num,
          ic_code: list.cpdto.ic_code,
          ic_name: list.cpdto.ic_name,
          ic_img: list.cpdto.ic_img,
          ic_img_detail: list.cpdto.ic_img_detail,
          ic_category: list.cpdto.ic_category,
          ic_content: list.cpdto.ic_content,
          ic_point: list.cpdto.ic_point,
          ic_startDate: list.cpdto.ic_startDate,
          ic_endDate: list.cpdto.ic_endDate,
        });
        console.log("updateCoupon 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("updateCoupon 실패 : ", err);
      });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setUpdateInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const fileName = selectedFile ? selectedFile.name : ""; // 파일이 선택되었을 때만 파일 이름 추출
    setUpdateInfo(prevState => ({
      ...prevState,
      ic_img: fileName,
      ic_img_detail: fileName,
    }));
  };

  const handleImgDetailChange = (event) => {
    const selectedFile = event.target.files[0];
    const fileName = selectedFile ? selectedFile.name : ""; 
    setUpdateInfo(prevState => ({
      ...prevState,
      ic_img_detail: fileName,
    }));
  };

  const editUpdate = (e) => {
    e.preventDefault();

    ApiService.updateCoupon(updateInfo)
      .then((res) => {
        console.log("updateCoupon 성공 : ", res.data);
        history.push("/admin/page_6/coupon/Admin_coupon_List");
      })
      .catch((err) => {
        console.log("updateCoupon 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Update_Edit ${style.Admin_coupon_Edit}`}>
      <br />
      <br />
      <Typography variant="h5" className="couponEdit">
        쿠폰 수정
      </Typography>
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="ic_num"
        type="text"
        name="ic_num"
        value={updateInfo.ic_num}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="ic_code"
        type="text"
        name="ic_code"
        value={updateInfo.ic_code}
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
        label="ic_name"
        type="text"
        name="ic_name"
        value={updateInfo.ic_name}
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
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="쿠폰 이미지"
        type="file"
        name="ic_img_detail"
        onChange={handleImgDetailChange}
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
        value={updateInfo.ic_category}
        onChange={onChange}
        style={{ width: '700px' }}
      >
        <MenuItem value={'#'}>카테고리를 정해주세요</MenuItem >
        <MenuItem value={'영화'}>영화관</MenuItem >
        <MenuItem value={'스토어'}>스토어</MenuItem >
      </Select>

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="ic_point"
        type="text"
        name="ic_point"
        value={updateInfo.ic_point}
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
        value={updateInfo.ic_content}
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
        label="ic_startDate"
        type="date"
        name="ic_startDate"
        value={updateInfo.ic_startDate}
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
        label="ic_useDate"
        type="date"
        name="ic_endDate"
        value={updateInfo.ic_endDate}
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

      <Button
        className="editBtn"
        variant="contained"
        color="primary"
        onClick={editUpdate}
      >
        쿠폰 수정하기
      </Button>
    </div>
  );

}
export default Admin_Update_Edit;
