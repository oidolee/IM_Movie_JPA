import React, { useState, useEffect } from "react";
import ApiService from "../../ApiService";
import { TextField, Button } from "@mui/material"; // 필요한 컴포넌트를 불러옵니다.
import style from "../../styles/admin/page_5/Admin_GroupForm_Answer.css"; // CSS 파일을 불러옵니다.
import { useParams } from 'react-router-dom';

function Admin_GroupForm_Answer ({ history }) {
  const { group_id } = useParams();
  console.log("group_id:", group_id); // group_id 값 콘솔에 출력
  const [groupData, setGroupData] = useState({
    // 상태를 정의합니다.
    group_id: '',
    re_title: '',
    re_content: '',
    re_date: '',
    gr_show: ''
  });

  const [answerInfo, setAnswerInfo] = useState({
    // 답변을 저장할 상태를 정의합니다.
    re_title: '',
    re_content: ''
  });

  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 실행될 코드를 작성합니다.
    reloadGroupDetail(group_id); // 그룹의 상세 정보를 불러옵니다.
  }, [group_id]);

  const reloadGroupDetail = (group_id) => {
    ApiService.GroupDetail(group_id)
      .then(res => {
        const group = res.data.dto; // 받아온 데이터에서 그룹 정보를 추출합니다.
        setGroupData(group); // 상태를 업데이트합니다.
      })
      .catch(err => {
        console.log('reloadGroupDetail() Error!!', err);
      });
  }

  const onChange = (e) => {
    // 입력 값이 변경될 때마다 호출되는 함수입니다.
    const { name, value } = e.target;
    setAnswerInfo(answerInfo => ({
      ...answerInfo,
      [name]: value
    }));
  }

  const saveUpdate = (e) => {
    // 답변을 저장하는 함수입니다.
    e.preventDefault();

    const requestBody = {
      // 답변 데이터를 서버에 전송할 형식으로 구성합니다.
      re_title:answerInfo.re_title,
      re_content: answerInfo.re_content,
      group_id: group_id,
      gr_show: 'n',
      re_date:new Date()
    };

    ApiService.addanswer(requestBody)
    .then(res => {
      console.log('입력 성공:', res.data);
      if (res.data.resultCode === '200') {
        alert("답변 등록 성공");
        ApiService.updateGroupData(group_id)
          .then(res => {
            console.log('상태 업데이트 성공:', res.data);
            // 페이지를 이동합니다.
            history.push("/admin/page_5/Admin_GroupForm_List");
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
}

  return (
    <div className={`Admin_GroupForm_Answer ${style.Admin_GroupForm_Answer}`}>
      <h2>문의 상세 정보</h2>
      <p>문의 ID: {groupData.group_id}</p>
      <p>문의자: {groupData.custo_name}</p>
      {/* 상세 정보를 보여주는 부분을 원하는 대로 추가합니다. */}
      
      <h2>답변 작성</h2>
      <TextField
        required
        id="re_title"
        label="답변 제목"
        name="re_title"
        value={answerInfo.re_title}
        onChange={onChange}
      />
      <TextField
        required
        id="re_content"
        label="답변 내용"
        name="re_content"
        multiline
        rows={4}
        value={answerInfo.re_content}
        onChange={onChange}
      />
      <Button variant="contained" color="primary" onClick={saveUpdate}>
        등록
      </Button>
    </div>
  );
}

export default Admin_GroupForm_Answer;
