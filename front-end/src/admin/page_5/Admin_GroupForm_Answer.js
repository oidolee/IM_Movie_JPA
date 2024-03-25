import React, { useState } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button,Select,MenuItem } from "@mui/material";
import style from "../../styles/admin/page_5/Admin_GroupForm_Answer.css";

function Admin_GroupForm_Answer ({ history }) {
  const [answerInfo, setAnswerInfo] = useState({
    group_title: '',
    group_con: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setAnswerInfo({
      ...answerInfo,
      [name]: value,
    });
  };

  const saveUpdate = (e) => {
    e.preventDefault();

    

    ApiService.addanswer(answerInfo)
      .then((res) => {
        console.log("NoticeInsert 성공 : ", res.data);
        history.push("/page_6/myinfo/MyPage_consult_list");
      })
      .catch((err) => {
        console.log(answerInfo);
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
  
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="제목"
        type="text"
        name="notice_title"
        value={answerInfo.notice_title}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="내용"
        type="text"
        name="notice_con"
        value={answerInfo.notice_con}
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

export default Admin_GroupForm_Answer;
