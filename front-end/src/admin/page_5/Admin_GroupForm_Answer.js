import React, { useState, useEffect } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button, Grid, Paper } from "@mui/material";
import { useParams, useHistory } from "react-router-dom";
import style from "../../styles/admin/page_5/Admin_GroupForm_Answer.css";

function Admin_GroupForm_Answer() {
  const { group_id } = useParams();
  const history = useHistory();

  const [answerInfo, setAnswerInfo] = useState({});
  const [reAnswerInfo, setReAnswerInfo] = useState({
    re_title: "",
    re_con: "",
    group_id: "",
    gr_show: "n",
  });

  useEffect(() => {
    reloadGroupAnswerList(group_id);
  }, []);

  const reloadGroupAnswerList = (group_id) => {
    ApiService.groupDetail(group_id)
      .then((res) => {
        console.log("answer", res.data);
        setAnswerInfo(res.data.dto);
      })
      .catch((err) => {
        console.log("reloadGroupAnswerList() Error!!", err);
      });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setReAnswerInfo({
      ...reAnswerInfo,
      group_id: group_id,
      [name]: value,
    });
  };

  const saveUpdate = (e) => {
    e.preventDefault();

    // 필요한 로직 수행
    const requestBody = {
      re_title: reAnswerInfo.re_title,
      re_con: reAnswerInfo.re_con,
      group_id: group_id,
    };

    ApiService.addgroupAnwser(requestBody)
      .then((res) => {
        console.log("입력 성공:", res.data);
        // 필요한 작업 수행
        if (res.data.resultCode == "200") {
          alert("답변 등록 성공");
          ApiService.updategroupData(group_id)
            .then((res) => {
              console.log("상태 업데이트 성공:", res.data);
              // 필요한 작업 수행
              history.push("/admin/page_5/Admin_GroupForm_List");
            })
            .catch((err) => {
              console.error("상태 업데이트 에러:", err);
            });
        } else {
          alert("답변 등록 실패");
          window.location.reload(); // history.push()로 페이지를 이동합니다.
        }
      })
      .catch((err) => {
        console.error("답변 등록 에러:", err);
      });
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Paper
          elevation={3}
          className={`Admin_Notice_Add ${style.Admin_Notice_Add}`}
        >
          <Typography
            variant="h5"
            className="noticeAdd"
            style={{ marginBottom: "20px" }}
          >
            등록하기
          </Typography>
          <Typography variant="subtitle1" style={{ marginBottom: "20px" }}>
            이메일: {answerInfo.c_email}
          </Typography>
          <Typography variant="subtitle1" style={{ marginBottom: "20px" }}>
            영화관위치: {answerInfo.group_loc}
          </Typography>
          <Typography variant="subtitle1" style={{ marginBottom: "20px" }}>
            단체명:{answerInfo.group_name}
          </Typography>
          <Typography variant="subtitle1" style={{ marginBottom: "20px" }}>
            성명: {answerInfo.custo_name}
          </Typography>
          <Typography variant="subtitle1" style={{ marginBottom: "20px" }}>
            문의내용: {answerInfo.group_con}
          </Typography>
          <form onSubmit={saveUpdate}>
            <TextField
              required
              fullWidth
              label="제목"
              type="text"
              name="re_title"
              value={reAnswerInfo.re_title}
              onChange={onChange}
              variant="outlined"
              margin="normal"
              style={{ marginBottom: "20px" }}
            />
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              label="내용"  
              type="text"
              name="re_con"
              value={reAnswerInfo.re_con}
              onChange={onChange}
              variant="outlined"
              margin="normal"
              style={{ marginBottom: "20px" }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              className={style.saveBtn}
            >
              등록하기
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Admin_GroupForm_Answer;
