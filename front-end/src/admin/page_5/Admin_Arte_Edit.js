import React, { useState, useEffect } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button } from "@mui/material";
import style from "../../styles/admin/page_5/Admin_Arte_Edit.css";

const Admin_Arte_Edit = ({ history }) => {
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

  useEffect(() => {
    selectLoad();
  }, []);

  const selectLoad = () => {
    ApiService.selectArte(window.localStorage.getItem("arte_id"))
      .then((res) => {
        let list = res.data;

        setArteInfo({
          arte_id: list.dto.arte_id,
          arte_image: list.dto.arte_image,
          arte_title: list.dto.arte_title,
          arte_date: list.dto.arte_date,
          arte_time: list.dto.arte_time,
          arte_age: list.dto.arte_age,
          arte_visitor: list.dto.arte_visitor,
          arte_contents: list.dto.arte_contents,
          arte_con: list.dto.arte_con,
          arte_pd: list.dto.arte_pd,
          arte_cast: list.dto.arte_cast,
          arte_image2: list.dto.arte_image2,
          arte_image3: list.dto.arte_image3,
          arte_trailer1: list.dto.arte_trailer1,
          arte_trailer2: list.dto.arte_trailer2,
          arte_category: list.dto.arte_category,
        });
        console.log("selectByIdUpdate 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("selectByIdUpdate 실패 : ", err);
      });
  };

  const onChange = (e) => {
    setArteInfo({
      ...arteInfo,
      [e.target.name]: e.target.value,
    });
  };

  const editArte = (e) => {
    e.preventDefault();

    ApiService.editArte(arteInfo)
      .then((res) => {
        console.log("editArte 성공 : ", res.data);
        history.push("/admin/page_5/Admin_Arte_List");
      })
      .catch((err) => {
        console.log("editArte 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Arte_Edit ${style.Admin_Arte_Edit}`}>
      <br />
      <br />
      <Typography variant="h5" className="arteEdit">
      Arte_Edit
      </Typography>
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Id"
        type="text"
        name="arte_id"
        value={arteInfo.arte_id}
        />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Img"
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
        label="Movie_age"
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
        label="Movie_Img2"
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
        label="Movie_Img3"
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
        className="editBtn"
        variant="contained"
        color="primary"
        onClick={editArte}
      >
        edit_Arte
      </Button>
    </div>
  );
};

export default Admin_Arte_Edit;
