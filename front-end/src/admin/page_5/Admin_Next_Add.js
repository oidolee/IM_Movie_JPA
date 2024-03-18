import React, { useState } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button } from "@mui/material";
import style from "../../styles/admin/page_5/Admin_Next_Add.css";

function Admin_Next_Add ({ history }) {
  const [nextInfo, setNextInfo] = useState({
    next_id: "",
    next_image: "",
    next_title: "",
    next_date: "",
    next_time: "",
    next_age: "",
    next_visitor: "",
    next_contents: "",
    next_con: "",
    next_trailer: "",
    next_category: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setNextInfo({
      ...nextInfo,
      [name]: value,
    });
  };

  const saveNext = (e) => {
    e.preventDefault();

    ApiService.addNext(nextInfo)
      .then((res) => {
        console.log("NextInsert 성공 : ", res.data);
        history.push("/admin/page_5/Admin_Next_List");
      })
      .catch((err) => {
        console.log("NextInsert 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Next_Add ${style.Admin_Next_Add}`}>
      <br />
      <br />
      <Typography variant="h5" className="NextAdd">
      Next_Add
      </Typography>
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Image"
        type="text"
        name="next_image"
        value={nextInfo.next_image}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Title"
        type="text"
        name="next_title"
        value={nextInfo.next_title}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Date"
        type="text"
        name="next_date"
        value={nextInfo.next_date}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Time"
        type="text"
        name=" next_time"
        value={nextInfo.next_time}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Age"
        type="text"
        name="next_age"
        value={nextInfo.next_age}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Visitor"
        type="text"
        name="next_visitor"
        value={nextInfo.next_visitor}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Contents"
        type="text"
        name="next_contents"
        value={nextInfo.next_contents}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Con"
        type="text"
        name="next_con"
        value={nextInfo.next_con}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Trailer"
        type="text"
        name="next_trailer"
        value={nextInfo.next_trailer}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Category"
        type="text"
        name="next_category"
        value={nextInfo.next_category}
        onChange={onChange}
      />
      <br />
      <br />
      <Button
        className="saveBtn"
        variant="contained"
        color="primary"
        onClick={saveNext}
      >
        save_Next
      </Button>
    </div>
  );
};

export default Admin_Next_Add;
