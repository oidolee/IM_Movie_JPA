import React, { useState } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button } from "@mui/material";
import style from "../../styles/admin/page_5/Admin_Update_Add.css";

function Admin_Update_Add ({ history }) {
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
    mov_pd: "",
    mov_cast: "",
    mov_trailer1: "",
    mov_trailer2: "",
    mov_category: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUpdateInfo({
      ...updateInfo,
      [name]: value,
    });
  };

  const saveUpdate = (e) => {
    e.preventDefault();

    ApiService.addUpdate(updateInfo)
      .then((res) => {
        console.log("UpdateInsert 성공 : ", res.data);
        history.push("/admin/page_5/Admin_Update_List");
      })
      .catch((err) => {
        console.log("UpdateInsert 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Update_Add ${style.Admin_Update_Add}`}>
      <br />
      <br />
      <Typography variant="h5" className="updateAdd">
        Update_Add
      </Typography>
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Image"
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
        label="Movie_Age"
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
        label="Movie_Pd"
        type="text"
        name="mov_pd"
        value={updateInfo.mov_pd}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Cast"
        type="text"
        name="mov_cast"
        value={updateInfo.mov_cast}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Trailer1"
        type="text"
        name="mov_trailer1"
        value={updateInfo.mov_trailer1}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Trailer2"
        type="text"
        name="mov_trailer2"
        value={updateInfo.mov_trailer2}
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
        className="saveBtn"
        variant="contained"
        color="primary"
        onClick={saveUpdate}
      >
        save_Update
      </Button>
    </div>
  );
};

export default Admin_Update_Add;
