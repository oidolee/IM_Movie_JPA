import React, { useState } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button } from "@mui/material";
import style from "../../styles/admin/page_5/Admin_Now_Add.css";

function Admin_Now_Add ({ history }) {
  const [nowInfo, setNowInfo] = useState({
    now_id: "",
    now_image: "",
    now_title: "",
    now_date: "",
    now_time: "",
    now_age: "",
    now_visitor: "",
    now_contents: "",
    now_con: "",
    now_trailer: "",
    now_category: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setNowInfo({
      ...nowInfo,
      [name]: value,
    });
  };

  const saveNow = (e) => {
    e.preventDefault();

    ApiService.addUpdate(nowInfo)
      .then((res) => {
        console.log("NowInsert 성공 : ", res.data);
        history.push("/admin/page_5/Admin_Update_List");
      })
      .catch((err) => {
        console.log("NowInsert 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Now_Add ${style.Admin_Now_Add}`}>
      <br />
      <br />
      <Typography variant="h5" className="NowAdd">
        Now_Add
      </Typography>
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Image"
        type="text"
        name=" now_image"
        value={nowInfo.mov_image}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Title"
        type="text"
        name="now_title"
        value={nowInfo.mov_title}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Date"
        type="text"
        name="now_date"
        value={nowInfo.mov_date}
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
        value={nowInfo.mov_time}
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
        value={nowInfo.mov_age}
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
        value={nowInfo.mov_visitor}
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
        value={nowInfo.mov_contents}
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
        value={nowInfo.mov_con}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Trailer"
        type="text"
        name="mov_trailer"
        value={nowInfo.mov_trailer}
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
        value={nowInfo.mov_category}
        onChange={onChange}
      />
      <br />
      <br />
      <Button
        className="saveBtn"
        variant="contained"
        color="primary"
        onClick={saveNow}
      >
        save_Now
      </Button>
    </div>
  );
};

export default Admin_Now_Add;
