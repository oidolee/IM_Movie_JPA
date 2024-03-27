import React, { useState, useEffect } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button } from "@mui/material";
import style from "../../styles/admin/page_5/Admin_Now_Edit.css";
import { useParams } from "react-router-dom";

const Admin_Now_Edit = ({ history }) => {
  const { now_id } = useParams();
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
    now_pd: "",
    now_cast: "",
    now_image2: "",
    now_image3: "",
    now_trailer1: "",
    now_trailer2: "",
    now_category: "",
  });

  useEffect(() => {
    selectLoad(now_id);
  }, [now_id]);

  const selectLoad = (now_id) => {
    ApiService.selectNow(now_id)
      .then((res) => {
        let list = res.data;

        setNowInfo({
          now_id: list.dto.now_id,
          now_image: list.dto.now_image,
          now_title: list.dto.now_title,
          now_date: list.dto.now_date,
          now_time: list.dto.now_time,
          now_age: list.dto.now_age,
          now_visitor: list.dto.now_visitor,
          now_contents: list.dto.now_contents,
          now_con: list.dto.now_con,
          now_pd: list.dto.now_pd,
          now_cast: list.dto.now_cast,
          now_image2: list.dto.now_image2,
          now_image3: list.dto.now_image3,
          now_trailer1: list.dto.now_trailer1,
          now_trailer2: list.dto.now_trailer2,
          now_category: list.dto.now_category,
        });
        console.log("selectByIdUpdate 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("selectByIdUpdate 실패 : ", err);
      });
  };

  const onChange = (e) => {
    setNowInfo({
      ...nowInfo,
      [e.target.name]: e.target.value,
    });
  };

  const editNow = (e) => {
    e.preventDefault();

    ApiService.editNow(nowInfo)
      .then((res) => {
        console.log("editNow 성공 : ", res.data);
        history.push("/admin/page_5/Admin_Now_List");
      })
      .catch((err) => {
        console.log("editNow 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Now_Edit ${style.Admin_Now_Edit}`}>
      <br />
      <br />
      <Typography variant="h5" className="nowEdit">
        Now_Edit
      </Typography>
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Id"
        type="text"
        name="now_id"
        value={nowInfo.now_id}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Img"
        type="text"
        name="now_image"
        value={nowInfo.now_image}
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
        value={nowInfo.now_title}
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
        value={nowInfo.now_date}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Time"
        type="text"
        name="now_time"
        value={nowInfo.now_time}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_age"
        type="text"
        name="now_age"
        value={nowInfo.now_age}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Visitor"
        type="text"
        name="now_visitor"
        value={nowInfo.now_visitor}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Contents"
        type="text"
        name="now_contents"
        value={nowInfo.now_contents}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Con"
        type="text"
        name="now_con"
        value={nowInfo.now_con}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Pd"
        type="text"
        name="now_pd"
        value={nowInfo.now_pd}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Cast"
        type="text"
        name="now_cast"
        value={nowInfo.now_cast}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Image2"
        type="text"
        name="now_image2"
        value={nowInfo.now_image2}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Image3"
        type="text"
        name="now_image3"
        value={nowInfo.now_image3}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Trailer1"
        type="text"
        name="now_trailer1"
        value={nowInfo.now_trailer1}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Trailer2"
        type="text"
        name="now_trailer2"
        value={nowInfo.now_trailer2}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Category"
        type="text"
        name="now_category"
        value={nowInfo.now_category}
        onChange={onChange}
      />
      <br />
      <br />

      <Button
        className="editBtn"
        variant="contained"
        color="primary"
        onClick={editNow}
      >
        edit_Now
      </Button>
    </div>
  );
};

export default Admin_Now_Edit;
