import React, { useState, useEffect } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button, Grid, Paper } from "@mui/material";
import { useParams, useHistory } from "react-router-dom";
import style from "../../styles/admin/page_5/Admin_GroupForm_Answer.css";

function Admin_GroupForm_Answer() {
  const { group_id } = useParams();
  const history = useHistory();

  const [answerInfo, setAnswerInfo] = useState({
    group_title: "",
    group_con: "",
    c_email: "", // 추가: 이메일
    group_name:"",
    custo_name: "" // 추가: 성명
  });

  useEffect(() => {
    reloadGroupAnswerList(group_id);

}, [group_id]);


  const reloadGroupAnswerList = (group_id) => {
    ApiService.GroupAnswer(group_id)
        .then(res => {
            console.log("answer", res.data);
            setAnswerInfo(res.data);

        })
        .catch(err => {
            console.log('reloadGroupAnswerList() Error!!', err);
        });
}

  const onChange = (e) => {
    const { name, value } = e.target;
    setAnswerInfo({
      ...answerInfo,
      [name]: value,
    });
  };

  const saveUpdate = (e) => {
    e.preventDefault();

    // 필요한 로직 수행
    const requestBody = {
      re_con: answerInfo.re_con,
      group_Id: group_id,
      gr_show: 'n'
  };

     ApiService.addgroupAnwser(requestBody)
            .then(res => {
                console.log('입력 성공:', res.data);
                // 필요한 작업 수행
                if (res.data.resultCode == '200') {
                    alert("답변 등록 성공");
                    ApiService.updategroupData(group_id)
                    .then(res => {
                        console.log('상태 업데이트 성공:', res.data);
                        // 필요한 작업 수행
                        window.location.reload(); 
                    })
                    .catch(err => {
                        console.error('상태 업데이트 에러:', err);
                    });
                } else {
                    alert("답변 등록 실패");
                    window.location.reload(); // history.push()로 페이지를 이동합니다.
                }
            })
            .catch(err => {
                console.error('답변 등록 에러:', err);
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
        <Paper elevation={3} className={`Admin_Notice_Add ${style.Admin_Notice_Add}`}>
          <Typography variant="h5" className="noticeAdd" style={{ marginBottom: "20px" }}>
            등록하기
          </Typography>
          <Typography variant="subtitle1" style={{ marginBottom: "20px" }}> 
            이메일: {answerInfo.c_email}
          </Typography>
          <Typography variant="subtitle1" style={{ marginBottom: "20px" }}>
            단체명:{answerInfo.group_name} 
          </Typography>
          <Typography variant="subtitle1" style={{ marginBottom: "20px" }}>
            성명: {answerInfo.custo_name}
          </Typography>
          <form onSubmit={saveUpdate}>
            <TextField
              required
              fullWidth
              label="제목"
              type="text"
              name="group_title"
              value={answerInfo.group_title}
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
              name="group_con"
              value={answerInfo.group_con}
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
