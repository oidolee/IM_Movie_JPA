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
    window.localStorage.removeItem("mov_id");
    history.push("/admin/page_5/Admin_Update_Add");
  };

  // 수정
  const selectUpdate = (mov_id) => {
    window.localStorage.setItem("mov_id", mov_id);
    history.push("/admin/page_5/Admin_Update_Edit");
  };

  // 삭제
  const deleteUpdate = (mov_id) => {
    ApiService.deleteUpdate(mov_id)
      .then((res) => {
        setLists(lists.filter((list) => list.mov_id !== mov_id));
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
      <Typography variant="h5" className="UpdateList">
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
            <TableCell>Mov_ID</TableCell>
            <TableCell>Movie_Image</TableCell>
            <TableCell>Movie_Title</TableCell>
            <TableCell>Movie_Date</TableCell>
            <TableCell>Movie_Time</TableCell>
            <TableCell>Movie_Age</TableCell>
            <TableCell>Movie_Visitor</TableCell>
            <TableCell>Movie_Contents</TableCell>
            <TableCell>Movie_Con</TableCell>
            <TableCell>Movie_Trailer</TableCell>
            <TableCell>Mov_Category</TableCell>
            
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lists.map((list) => (
            <TableRow key={list.mov_id}>
              <TableCell component="th" scope="list">
                {list.mov_id}
              </TableCell>
              <TableCell>{list.mov_image}</TableCell>
              <TableCell>{list.mov_title}</TableCell>
              <TableCell>{list.mov_date}</TableCell>
              <TableCell>{list.mov_time}</TableCell>
              <TableCell>{list.mov_age}</TableCell>
              <TableCell>{list.mov_visitor}</TableCell>
              <TableCell>{list.mov_contents}</TableCell>
              <TableCell>{list.mov_con}</TableCell>
              <TableCell>{list.mov_trailer}</TableCell>
              <TableCell>{list.mov_category}</TableCell>
              <TableCell
                className="selectBtn"
                onClick={() => selectUpdate(list.mov_id)}
              >
                <Create />
              </TableCell>
              <TableCell
                className="deleteBtn"
                onClick={() => deleteUpdate(list.mov_id)}
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
