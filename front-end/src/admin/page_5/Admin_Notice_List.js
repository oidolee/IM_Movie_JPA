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
import style from "../../styles/admin/page_5/Admin_Notice_List.css";
import ApiService from "../../ApiService";
import { Create, Delete } from "@mui/icons-material";
import { useParams } from 'react-router-dom';

function Admin_Notice_List ({ history }) {
  const [lists, setLists] = useState([]);
  
  useEffect(() => {
    noticeList();
  }, []);

  // 목록
  const noticeList = () => {
    ApiService.noticeList()
      .then((res) => {
        setLists(res.data);
      })
      .catch((err) => {
        console.log("noticeList Error", err);
      });
  };

  // 등록
  const noticeAdd = () => {
    window.localStorage.removeItem("notice_num");
    history.push("/admin/page_5/Admin_Notice_Add");
  };

  // 수정
  const selectNotice = (notice_num) => {
    ApiService.selectNotice(notice_num) 
    .then((res) => {
      console.log("selectNotice 성공 : ", res.data);
      history.push(`/admin/page_5/Admin_Notice_Edit/${notice_num}`)
    })
    .catch((err) => {
      console.log("selectNotice 실패 : ", err);
    });
  };

  // 삭제
  const noticeDelete = (notice_num) => {
    ApiService.noticeDelete(notice_num)
      .then((res) => {
        setLists(lists.filter((list) => list.notice_num !== notice_num));
        console.log("noticeDelete 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("noticeDelete 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Notice_List ${style.Admin_Notice_List}`}>
      <br />
      <br />
      <Typography variant="h5" className="noticeList">
       공지사항
      </Typography>
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        className="Add_btn"
        onClick={noticeAdd}
      >
        등록하기
      </Button>
      <br />
      <br />
      <Table className="Notice_List_Content">
        <TableHead>
          <TableRow>
            <TableCell>구분</TableCell>
            <TableCell>제목</TableCell>
            <TableCell>등록일</TableCell>
            <TableCell>조회수</TableCell>
            <TableCell>내용</TableCell>
            
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lists.map((list) => (
            <TableRow key={list.notice_num}>
              
              <TableCell>{list.notice_one}</TableCell>
              <TableCell>{list.notice_title}</TableCell>
              <TableCell> {new Date(list.notice_date).toLocaleDateString()} </TableCell>
              <TableCell>{list.notice_cnt}</TableCell>
              <TableCell>{list.notice_con}</TableCell>
              <TableCell
                className="selectBtn"
                onClick={() => selectNotice(list.notice_num)}
              >
                <Create />
              </TableCell>
              <TableCell
                className="deleteBtn"
                onClick={() => noticeDelete(list.notice_num)}
              >
                <Delete />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Admin_Notice_List;
