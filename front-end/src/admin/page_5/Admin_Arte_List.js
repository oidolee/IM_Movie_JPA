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
import style from "../../styles/admin/page_5/Admin_Arte_List.css";
import ApiService from "../../ApiService";
import { Create, Delete } from "@mui/icons-material";

function Admin_Arte_List ({ history }) {
  const [lists, setLists] = useState([]);
  
  useEffect(() => {
    ArteList();
  }, []);

  // 목록
  const ArteList = () => {
    ApiService.listArte()
      .then((res) => {
        setLists(res.data);
      })
      .catch((err) => {
        console.log("listArte Error", err);
      });
  };

  // 등록
  const ArteAdd = () => {
    window.localStorage.removeItem("arte_id");
    history.push("/admin/page_5/Admin_Arte_Add");
  };

  // 수정
  const selectArte = (arte_id) => {
    window.localStorage.setItem("arte_id", arte_id);
    history.push("/admin/page_5/Admin_Arte_Edit");
  };

  // 삭제
  const deleteArte = (arte_id) => {
    ApiService.deleteArte(arte_id)
      .then((res) => {
        setLists(lists.filter((list) => list.arte_id !== arte_id));
        console.log("deleteArte 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("deleteArte 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Arte_List ${style.Admin_Arte_List}`}>
      <br />
      <br />
      <Typography variant="h5" className="ArteList">
      Arte_List
      </Typography>
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        className="Add_btn"
        onClick={ArteAdd}
      >
        Arte_Add
      </Button>
      <br />
      <br />
      <Table className="Arte_List_Content">
        <TableHead>
          <TableRow>
            <TableCell>Movie_ID</TableCell>
            <TableCell>Movie_Image</TableCell>
            <TableCell>Movie_Title</TableCell>
            <TableCell>Movie_Date</TableCell>
            <TableCell>Movie_Time</TableCell>
            <TableCell>Movie_Age</TableCell>
            <TableCell>Movie_Visitor</TableCell>
            <TableCell>Movie_Con</TableCell>
            <TableCell>Movie_Trailer</TableCell>
            <TableCell>Movie_Category</TableCell>
            
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lists.map((list) => (
            <TableRow key={list.arte_id}>
              <TableCell component="th" scope="list">
                {list.arte_id}
              </TableCell>
              <TableCell>{list.arte_image}</TableCell>
              <TableCell>{list.arte_title}</TableCell>
              <TableCell> {new Date(list.arte_date).toLocaleDateString()} </TableCell>
              <TableCell>{list.arte_time}</TableCell>
              <TableCell>{list.arte_age}</TableCell>
              <TableCell>{list.arte_visitor}</TableCell>
              <TableCell>{list.arte_con}</TableCell>
              <TableCell>{list.arte_trailer}</TableCell>
              <TableCell>{list.arte_category}</TableCell>
              <TableCell
                className="selectBtn"
                onClick={() => selectArte(list.arte_id)}
              >
                <Create />
              </TableCell>
              <TableCell
                className="deleteBtn"
                onClick={() => deleteArte(list.arte_id)}
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

export default Admin_Arte_List;
