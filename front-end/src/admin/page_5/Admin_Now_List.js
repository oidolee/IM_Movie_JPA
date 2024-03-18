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
import style from "../../styles/admin/page_5/Admin_Now_List.css";
import ApiService from "../../ApiService";
import { Create, Delete } from "@mui/icons-material";

function Admin_Now_List ({ history }) {
  const [lists, setLists] = useState([]);
  
  useEffect(() => {
    NowList();
  }, []);

  // 목록
  const NowList = () => {
    ApiService.listUpdate()
      .then((res) => {
        setLists(res.data);
      })
      .catch((err) => {
        console.log("listUpdate Error", err);
      });
  };

  // 등록
  const NowAdd = () => {
    window.localStorage.removeItem("now_id");
    history.push("/admin/page_5/Admin_Update_Add");
  };

  // 수정
  const selectNow = (now_id) => {
    window.localStorage.setItem("now_id", now_id);
    history.push("/admin/page_5/Admin_Now_Edit");
  };

  // 삭제
  const deleteNow = (now_id) => {
    ApiService.deleteNow(now_id)
      .then((res) => {
        setLists(lists.filter((list) => list.now_id !== now_id));
        console.log("deleteNow 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("deleteNow 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Now_List ${style.Admin_Now_List}`}>
      <br />
      <br />
      <Typography variant="h5" className="NowList">
      Now_List
      </Typography>
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        className="Add_btn"
        onClick={NowAdd}
      >
        Now_Add
      </Button>
      <br />
      <br />
      <Table className="Now_List_Content">
        <TableHead>
          <TableRow>
            <TableCell>Movie_ID</TableCell>
            <TableCell>Movie_Image</TableCell>
            <TableCell>Movie_Title</TableCell>
            <TableCell>Movie_Date</TableCell>
            <TableCell>Movie_Time</TableCell>
            <TableCell>Movie_Age</TableCell>
            <TableCell>Movie_Visitor</TableCell>
            <TableCell>Movie_Contents</TableCell>
            <TableCell>Movie_Con</TableCell>
            <TableCell>Movie_Trailer</TableCell>
            <TableCell>Movie_Category</TableCell>
            
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lists.map((list) => (
            <TableRow key={list.now_id}>
              <TableCell component="th" scope="list">
                {list.now_id}
              </TableCell>
              <TableCell>{list.now_image}</TableCell>
              <TableCell>{list.now_title}</TableCell>
              <TableCell>{list.now_date}</TableCell>
              <TableCell>{list.now_time}</TableCell>
              <TableCell>{list.now_age}</TableCell>
              <TableCell>{list.now_visitor}</TableCell>
              <TableCell>{list.now_contents}</TableCell>
              <TableCell>{list.now_con}</TableCell>
              <TableCell>{list.now_trailer}</TableCell>
              <TableCell>{list.now_category}</TableCell>
              <TableCell
                className="selectBtn"
                onClick={() => selectNow(list.now_id)}
              >
                <Create />
              </TableCell>
              <TableCell
                className="deleteBtn"
                onClick={() => deleteNow(list.now_id)}
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

export default Admin_Now_List;
