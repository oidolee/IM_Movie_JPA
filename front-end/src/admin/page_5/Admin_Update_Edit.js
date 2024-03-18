import React, { useState, useEffect } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button } from "@mui/material";
import style from "../../styles/admin/page_5/Admin_Update_Edit.css";

const Admin_Update_Edit = ({ history }) => {
  const [updateInfo, setUpdateInfo] = useState({
    mov_id: "",
    mov_image: "",
    mov_title: "",
    mov_date: "",
    mov_time: "",
    mov_age: "",
    mov_visitor: "",
    mov_contents: "",
    mov_con: "",
    mov_trailer: "",
    mov_category: "",
  });

  useEffect(() => {
    selectLoad();
  }, []);

  const selectLoad = () => {
    ApiService.selectUpdate(window.localStorage.getItem("mov_id"))
      .then((res) => {
        let list = res.data;

        setUpdateInfo({
          mov_id: list.dto.mov_id,
          mov_image: list.dto.mov_image,
          mov_title: list.dto.mov_title,
          mov_date: list.dto.mov_date,
          mov_time: list.dto.mov_time,
          mov_age: list.dto.mov_age,
          mov_visitor: list.dto.mov_visitor,
          mov_contents: list.dto.mov_contents,
          mov_con: list.dto.mov_con,
          mov_trailer: list.dto.mov_trailer,
          mov_category: list.dto.mov_category,
        });
        console.log("selectByIdUpdate 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("selectByIdUpdate 실패 : ", err);
      });
  };

  const onChange = (e) => {
    setUpdateInfo({
      ...updateInfo,
      [e.target.name]: e.target.value,
    });
  };

  const editUpdate = (e) => {
    e.preventDefault();

    ApiService.editUpdate(updateInfo)
      .then((res) => {
        console.log("editUpdate 성공 : ", res.data);
        history.push("/admin/page_5/Admin_Update_List");
      })
      .catch((err) => {
        console.log("editUpdate 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Update_Edit ${style.Admin_Update_Edit}`}>
      <br />
      <br />
      <Typography variant="h5" className="updateEdit">
        Update_Edit
      </Typography>
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Id"
        type="text"
        name="mov_id"
        value={updateInfo.mov_id}
        />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Img"
        type="text"
        name="mov_image"
        value={updateInfo.mov_image}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Title"
        type="text"
        name="mov_title"
        value={updateInfo.mov_title}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Date"
        type="text"
        name="mov_date"
        value={updateInfo.mov_date}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Time"
        type="text"
        name="mov_time"
        value={updateInfo.mov_time}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_age"
        type="text"
        name="mov_age"
        value={updateInfo.mov_age}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Visitor"
        type="text"
        name="mov_visitor"
        value={updateInfo.mov_visitor}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Contents"
        type="text"
        name="mov_contents"
        value={updateInfo.mov_contents}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Con"
        type="text"
        name="mov_con"
        value={updateInfo.mov_con}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Trailer"
        type="text"
        name=" mov_trailer"
        value={updateInfo.mov_trailer}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Category"
        type="text"
        name="mov_category"
        value={updateInfo.mov_category}
        onChange={onChange}
      />
      <br />
      <br />

      <Button
        className="editBtn"
        variant="contained"
        color="primary"
        onClick={editUpdate}
      >
        edit_Update
      </Button>
    </div>
  );
};

export default Admin_Update_Edit;
