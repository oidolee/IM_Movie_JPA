import React, { useState } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button } from "@mui/material";
import style from "../../styles/admin/page_5/Admin_Update_Add.css";

function Admin_Update_Add ({ history }) {
  const [updateInfo, setUpdateInfo] = useState({
    up_movie_img: "",
    up_movie_title: "",
    up_movie_date: "",
    up_movie_time: "",
    up_movie_age: "",
    up_movie_visitor: "",
    up_movie_contents: "",
    up_movie_con: "",
    up_movie_trailer: "",
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
        label="Movie_Img"
        type="text"
        name="up_movie_img"
        value={updateInfo.up_movie_img}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Title"
        type="text"
        name="up_movie_title"
        value={updateInfo.up_movie_title}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Date"
        type="text"
        name="up_movie_date"
        value={updateInfo.up_movie_date}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Time"
        type="text"
        name="up_movie_time"
        value={updateInfo.up_movie_time}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Age"
        type="text"
        name="up_movie_age"
        value={updateInfo.up_movie_age}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Visitor"
        type="text"
        name="up_movie_visitor"
        value={updateInfo.up_movie_visitor}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Contents"
        type="text"
        name="up_movie_contents"
        value={updateInfo.up_movie_contents}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Con"
        type="text"
        name="up_movie_con"
        value={updateInfo.up_movie_con}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Trailer"
        type="text"
        name="up_movie_trailer"
        value={updateInfo.up_movie_trailer}
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
