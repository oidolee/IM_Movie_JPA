import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
} from "@mui/material";
import style from "../../styles/admin/page_5/Admin_GroupForm_List.css";
import ApiService from "../../ApiService";
import { Create, Delete } from "@mui/icons-material";
import { useParams, useHistory } from 'react-router-dom';


function Admin_GroupForm_List () {
  const [lists, setLists] = useState([]);
  const history = useHistory();
  
 useEffect(() => {
  groupList();
}, []);
  

// 목록
  const groupList = () => {
    ApiService.groupList()
      .then((res) => {
        setLists(res.data);
      })
      .catch((err) => {
        console.log("groupList Error", err);
      });
  };


 // 등록
const groupAdd = (group_id) => {
  history.push(`/admin/page_5/Admin_GroupForm_Answer/${group_id}`);
};

//   // 수정
//   const selectGroup = (group_id) => {
//     ApiService.selectGroup(group_id) 
//     .then((res) => {
//       console.log("selectGroup 성공 : ", res.data);
//       history.push(`/admin/page_5/Admin_Notice_Edit/${group_id}`)
//     })
//     .catch((err) => {
//       console.log("selectGroup 실패 : ", err);
//     });
//   };

  // // 삭제
  // const groupDelete = (group_id) => {
  //   ApiService.groupDelete(group_id)
  //     .then((res) => {
  //       setLists(lists.filter((list) => list.group_id !== group_id));
  //       console.log("groupDelete 성공 : ", res.data);
  //     })
  //     .catch((err) => {
  //       console.log("groupDelete 실패 : ", err);
  //     });
  // };

  return (
    <div className={`Admin_GroupForm_List ${style.Admin_GroupForm_List}`}>
      <br />
      <br />
      <Typography variant="h5" className="noticeList">
       고객문의
      </Typography>
      <br />
      <br />
      
      <Table className="GroupForm_List_Content">
        <TableHead>
          <TableRow>
            <TableCell>아이디</TableCell>
            <TableCell>영화관위치</TableCell>
            <TableCell>분류</TableCell>
            <TableCell>예상인원</TableCell>
            <TableCell>희망일</TableCell>
            <TableCell>희망시간1</TableCell>
            <TableCell>희망시간2</TableCell>
            <TableCell>영화제목</TableCell>
            <TableCell>제목</TableCell>
            <TableCell>내용</TableCell>
            <TableCell>단체명</TableCell>
            <TableCell>신청고객명</TableCell>
            <TableCell>연락처1</TableCell>
            <TableCell>연락처2</TableCell>
            <TableCell>연락처3</TableCell>
            <TableCell>답변상태</TableCell>
            
            <TableCell>답변</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lists.map((list) => (
            <TableRow key={list.group_id} onClick={() => groupAdd(list.group_id)}>
              <TableCell>{list.c_email}</TableCell>
              <TableCell>{list.group_loc}</TableCell>
              <TableCell>{list.group_type}</TableCell>
              <TableCell>{list.group_expeople}</TableCell>
              <TableCell> {new Date(list.group_date).toLocaleDateString()} </TableCell>
              <TableCell>{list.group_time1}</TableCell>
              <TableCell>{list.group_time2}</TableCell>
              <TableCell>{list.group_movtitle}</TableCell>
              <TableCell>{list.group_title}</TableCell>
              <TableCell>{list.group_con}</TableCell>
              <TableCell>{list.group_name}</TableCell>
              <TableCell>{list.custo_name}</TableCell>
              <TableCell>{list.custo_phone1}</TableCell>
              <TableCell>{list.custo_phone2}</TableCell>
              <TableCell>{list.custo_phone3}</TableCell>
              <TableCell>{list.gr_show === 'y' ? '답변대기 중' : '답변 완료'}</TableCell>
              <TableCell
              className="selectBtn"
              onClick={() => groupAdd(list.group_id)}
            >
              <Create />
            </TableCell>
            {/* <TableCell
                className="deleteBtn"
                onClick={() => groupDelete(list.group_id)}
              >
                <Delete />
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Admin_GroupForm_List;
