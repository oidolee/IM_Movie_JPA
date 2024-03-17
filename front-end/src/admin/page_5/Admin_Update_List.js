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
import style from "../../styles/admin/page_5/Admin_Update_List.css";
import ApiService from "../../ApiService";
import { Create, Delete } from "@mui/icons-material";

function Admin_Update_List ({ history }) {
  const [lists, setLists] = useState([]);
  
  useEffect(() => {
    UpdateList();
  }, []);

  // 목록
  const UpdateList = () => {
    ApiService.listUpdate()
      .then((res) => {
        setLists(res.data);
      })
      .catch((err) => {
        console.log("listUpdate Error", err);
      });
  };

  // 등록
  const UpdateAdd = () => {
    window.localStorage.removeItem("up_num");
    history.push("/admin/page_5/Admin_Update_Add");
  };

  // 수정
  const selectUpdate = (upnum) => {
    window.localStorage.setItem("up_num", upnum);
    history.push("/admin/page_5/Admin_Update_Edit");
  };

  // 삭제
  const deleteUpdate = (up_num) => {
    ApiService.deleteUpdate(up_num)
      .then((res) => {
        setLists(lists.filter((list) => list.up_num !== up_num));
        console.log("deleteUpdate 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("deleteUpdate 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Update_List ${style.Admin_Update_List}`}>
      <br />
      <br />
      <Typography variant="h5" className="updateList">
       Update_List
      </Typography>
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        className="Add_btn"
        onClick={UpdateAdd}
      >
        Update_Add
      </Button>
      <br />
      <br />
      <Table className="Update_List_Content">
        <TableHead>
          <TableRow>
            <TableCell>Num</TableCell>
            <TableCell>Movie_Img</TableCell>
            <TableCell>Movie_Title</TableCell>
            <TableCell>Movie_Date</TableCell>
            <TableCell>Movie_Time</TableCell>
            <TableCell>Movie_Age</TableCell>
            <TableCell>Movie_Visitor</TableCell>
            <TableCell>Movie_Contents</TableCell>
            <TableCell>Movie_Con</TableCell>
            <TableCell>Movie_Trailer</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lists.map((list) => (
            <TableRow key={list.up_num}>
              <TableCell component="th" scope="list">
                {list.up_Num}
              </TableCell>
              <TableCell>{list.up_movie_img}</TableCell>
              <TableCell>{list.up_movie_title}</TableCell>
              <TableCell>{list.up_movie_date}</TableCell>
              <TableCell>{list.up_movie_time}</TableCell>
              <TableCell>{list.up_movie_age}</TableCell>
              <TableCell>{list.up_movie_visitor}</TableCell>
              <TableCell>{list.up_movie_contents}</TableCell>
              <TableCell>{list.up_movie_con}</TableCell>
              <TableCell>{list.up_movie_trailer}</TableCell>
              <TableCell
                className="selectBtn"
                onClick={() => selectUpdate(list.up_num)}
              >
                <Create />
              </TableCell>
              <TableCell
                className="deleteBtn"
                onClick={() => deleteUpdate(list.up_num)}
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

export default Admin_Update_List;
