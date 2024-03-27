import React, { useState } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button,Select,MenuItem } from "@mui/material";
import style from "../../styles/admin/page_5/Admin_Notice_Add.css";

function Admin_Notice_Add ({ history }) {
  const [addInfo, setAddInfo] = useState({
    notice_num: '',
    notice_one: "",
    notice_title: "",
    notice_date: new Date().toISOString(),
    notice_cnt: 0,
    notice_con: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setAddInfo({
      ...addInfo,
      [name]: value,
    });
  };

  const saveUpdate = (e) => {
    e.preventDefault();

    

    ApiService.addNotice(addInfo)
      .then((res) => {
        console.log("NoticeInsert 성공 : ", res.data);
        history.push("/admin/page_5/Admin_Notice_List");
      })
      .catch((err) => {
        console.log(addInfo);
        console.log("NoticeInsert 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Notice_Add ${style.Admin_Notice_Add}`}>
      <br />
      <br />
      <Typography variant="h5" className="noticeAdd">
        등록하기
      </Typography>
      <Select
        required
        id="standard-required"
        variant="standard"
        label="구분"
        type="text"
        name="notice_one"
        value={addInfo.notice_one}
        onChange={onChange}>

        <MenuItem value="서울">서울</MenuItem>
        <MenuItem value="경기/인천">경기/인천</MenuItem>
        <MenuItem value="동탄">동탄</MenuItem>
        <MenuItem value="수원(수원역)">수원(수원역)</MenuItem>
        <MenuItem value="부평역">부평역</MenuItem>
        <MenuItem value="영등포">영등포</MenuItem>
        <MenuItem value="홍대입구">홍대입구</MenuItem>
        <MenuItem value="전체">전체</MenuItem>
      </Select>
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="제목"
        type="text"
        name="notice_title"
        value={addInfo.notice_title}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="내용"
        multiline
        type="text"
        name="notice_con"
        value={addInfo.notice_con}
        onChange={onChange}
      />
      <br />
      <br />
      <Button
        className="saveBtn"
        variant="contained"
        color="primary"
        onClick={saveUpdate}
      >
        등록하기
      </Button>
    </div>
  );
};

export default Admin_Notice_Add;
