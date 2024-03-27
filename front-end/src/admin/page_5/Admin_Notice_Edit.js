import React, { useState, useEffect } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button,Select,MenuItem } from "@mui/material";
import style from "../../styles/admin/page_5/Admin_Notice_Edit.css";
import { useParams } from 'react-router-dom';

const Admin_Notice_Edit = ({ history }) => {
  
  const { notice_num } = useParams();
  const [editInfo, setEditInfo] = useState({
    notice_num: '',
    notice_one: "",
    notice_title: "",
    notice_date: new Date().toISOString(),
    notice_cnt: 0,
    notice_con: "",
  });


  useEffect(() => {
    selectLoad(notice_num);
  }, [notice_num]);

  const selectLoad = (notice_num) => {
    ApiService.selectNotice(notice_num)
      .then((res) => {
        let list = res.data;
        console.log('res.data : ' + res.data)
        setEditInfo({
          notice_num: list.dto.notice_num,
          notice_one: list.dto.notice_one,
          notice_title: list.dto.notice_title,
          notice_date: list.dto.notice_date,
          notice_cnt: list.dto.notice_cnt,
          notice_con: list.dto.notice_con,
        });
        console.log("selectByIdUpdate 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("selectByIdUpdate 실패 : ", err);
      });
  };

  const onChange = (e) => {
    setEditInfo({
      ...editInfo,
      [e.target.name]: e.target.value,
    });
  };

  const editNotice = (e) => {
    e.preventDefault();

    ApiService.editNotice(editInfo)
      .then((res) => {
        console.log("editNotice 성공 : ", res.data);
        history.push("/admin/page_5/Admin_Notice_List");
      })
      .catch((err) => {
        console.log("editNotice 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Notice_Edit ${style.Admin_Notice_Edit}`}>
      <br />
      <br />
      <Typography variant="h5" className="noticeEdit">
        수정
      </Typography>
      <Select
        required
        id="standard-required"
        variant="standard"
        label="구분"
        type="text"
        name="notice_one"
        value={editInfo.notice_one}
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
        value={editInfo.notice_title}
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
        value={editInfo.notice_con}
        onChange={onChange}
      />
      <br />
      <br />

      <Button
        className="editBtn"
        variant="contained"
        color="primary"
        onClick={editNotice}
      >
        수정
      </Button>
    </div>
  );
};

export default Admin_Notice_Edit;
