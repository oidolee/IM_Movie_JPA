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
import style from "../../styles/admin/page_5/Admin_Next_List.css";
import ApiService from "../../ApiService";
import { Create, Delete } from "@mui/icons-material";

function Admin_Next_List ({ history }) {
  const [lists, setLists] = useState([]);
  
  useEffect(() => {
    NextList();
  }, []);

  // 목록
  const NextList = () => {
    ApiService.listNext()
      .then((res) => {
        setLists(res.data);
      })
      .catch((err) => {
        console.log("listNow Error", err);
      });
  };

  // 등록
  const NextAdd = () => {
    window.localStorage.removeItem("next_id");
    history.push("/admin/page_5/Admin_Next_Add");
  };

  // 수정
  const selectNext = (next_id) => {
    ApiService.selectNext(next_id) 
    .then((res) => {
      console.log("selectUpdate 성공 : ", res.data);
      history.push(`/admin/page_5/Admin_Next_Edit/${next_id}`)
    })
    .catch((err) => {
      console.log("selectUpdate 실패 : ", err);
    });
  };
  

  // 삭제
  const deleteNext = (next_id) => {
    ApiService.deleteNext(next_id)
      .then((res) => {
        setLists(lists.filter((list) => list.next_id !== next_id));
        console.log("deleteNext 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("deleteNext 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Next_List ${style.Admin_Next_List}`}>
      <br />
      <br />
      <Typography variant="h5" className="NextList">
      Next_List
      </Typography>
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        className="Add_btn"
        onClick={NextAdd}
      >
        Next_Add
      </Button>
      <br />
      <br />
      <Table className="Next_List_Content">
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
            <TableCell>Movie_Pd</TableCell>
            <TableCell>Movie_Cast</TableCell>
            <TableCell>Movie_Image2</TableCell>
            <TableCell>Movie_Image3</TableCell>
            <TableCell>Movie_Trailer1</TableCell>
            <TableCell>Movie_Trailer2</TableCell>
            <TableCell>Movie_Category</TableCell>
            
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lists.map((list) => (
            <TableRow key={list.next_id}>
              <TableCell component="th" scope="list">
                {list.next_id}
              </TableCell>
              <TableCell>{list.next_image}</TableCell>
              <TableCell>{list.next_title}</TableCell>
              <TableCell> {new Date(list.next_date).toLocaleDateString()} </TableCell>
              <TableCell>{list.next_time}</TableCell>
              <TableCell>{list.next_age}</TableCell>
              <TableCell>{list.next_visitor}</TableCell>
              <TableCell>{list.next_con}</TableCell>
              <TableCell>{list.next_pd}</TableCell>
              <TableCell>{list.next_cast}</TableCell>
              <TableCell>{list.next_image2}</TableCell>
              <TableCell>{list.next_image3}</TableCell>
              <TableCell>{list.next_trailer1}</TableCell>
              <TableCell>{list.next_trailer2}</TableCell>
              <TableCell>{list.next_category}</TableCell>
              <TableCell
                className="selectBtn"
                onClick={() => selectNext(list.next_id)}
              >
                <Create />
              </TableCell>
              <TableCell
                className="deleteBtn"
                onClick={() => deleteNext(list.next_id)}
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

export default Admin_Next_List;
