import React, { useState } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button } from "@mui/material";
import style from "../../styles/admin/page_5/Admin_Arte_Add.css";

function Admin_Arte_Add ({ history }) {
  const [arteInfo, setArteInfo] = useState({
    arte_id: "",
    arte_image: "",
    arte_title: "",
    arte_date: "",
    arte_time: "",
    arte_age: "",
    arte_visitor: "",
    arte_contents: "",
    arte_con: "",
    arte_pd: "",
    arte_cast: "",
    arte_image2: "",
    arte_image3: "",
    arte_trailer1: "",
    arte_trailer2: "",
    arte_category: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setArteInfo({
      ...arteInfo,
      [name]: value,
    });
  };

  const saveArte = (e) => {
    e.preventDefault();

    ApiService.addArte(arteInfo)
      .then((res) => {
        console.log("ArteInsert 성공 : ", res.data);
        history.push("/admin/page_5/Admin_Arte_List");
      })
      .catch((err) => {
        console.log("ArteInsert 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Arte_Add ${style.Admin_Arte_Add}`}>
      <br />
      <br />
      <Typography variant="h5" className="ArteAdd">
      Arte_Add
      </Typography>
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Image"
        type="text"
        name="arte_image"
        value={arteInfo.arte_image}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Title"
        type="text"
        name="arte_title"
        value={arteInfo.arte_title}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Date"
        type="text"
        name="arte_date"
        value={arteInfo.arte_date}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Time"
        type="text"
        name="arte_time"
        value={arteInfo.arte_time}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Age"
        type="text"
        name="arte_age"
        value={arteInfo.arte_age}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Visitor"
        type="text"
        name="arte_visitor"
        value={arteInfo.arte_visitor}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Contents"
        type="text"
        name="arte_contents"
        value={arteInfo.arte_contents}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Con"
        type="text"
        name="arte_con"
        value={arteInfo.arte_con}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Pd"
        type="text"
        name="arte_pd"
        value={arteInfo.arte_pd}
        onChange={onChange}
      />
      <br />


      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Cast"
        type="text"
        name="arte_cast"
        value={arteInfo.arte_cast}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Image2"
        type="text"
        name="arte_image2"
        value={arteInfo.arte_image2}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Image3"
        type="text"
        name="arte_image3"
        value={arteInfo.arte_image3}
        onChange={onChange}
      />
      <br />
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Trailer1"
        type="text"
        name="arte_trailer1"
        value={arteInfo.arte_trailer1}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Trailer2"
        type="text"
        name="arte_trailer2"
        value={arteInfo.arte_trailer2}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Category"
        type="text"
        name="arte_category"
        value={arteInfo.arte_category}
        onChange={onChange}
      />
      <br />
      <br />
      <Button
        className="saveBtn"
        variant="contained"
        color="primary"
        onClick={saveArte}
      >
        save_Arte
      </Button>
    </div>
  );
};

export default Admin_Arte_Add;
