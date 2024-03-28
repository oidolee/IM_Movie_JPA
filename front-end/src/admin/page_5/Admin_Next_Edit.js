import React, { useState, useEffect } from "react";
import ApiService from "../../ApiService";
import { Typography, TextField, Button } from "@mui/material";
import style from "../../styles/admin/page_5/Admin_Next_Edit.css";
import { useParams } from 'react-router-dom';

const Admin_Next_Edit = ({ history }) => {
  const { next_id } = useParams();
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
      next_pd: "",
      next_cast: "",
      next_image2: "",
      next_image3: "",
      next_trailer1: "",
      next_trailer2: "",
      next_category: "",
  });

  useEffect(() => {
    selectLoad(next_id);
  }, [next_id]);

  const selectLoad = (next_id) => {
    ApiService.selectNext(next_id)
      .then((res) => {
        let list = res.data;

        setNextInfo({
          next_id: list.dto.next_id,
          next_image: list.dto.next_image,
          next_title: list.dto.next_title,
          next_date: list.dto.next_date,
          next_time: list.dto.next_time,
          next_age: list.dto.next_age,
          next_visitor: list.dto.next_visitor,
          next_contents: list.dto.next_contents,
          next_con: list.dto.next_con,
          next_pd: list.dto.next_pd,
          next_cast: list.dto.next_cast,
          next_image2: list.dto.next_image2,
          next_image3: list.dto.next_image3,
          next_trailer1: list.dto.next_trailer1,
          next_trailer2: list.dto.next_trailer2,
          next_category: list.dto.next_category,
        });
        console.log("selectByIdUpdate 성공 : ", res.data);
      })
      .catch((err) => {
        console.log("selectByIdUpdate 실패 : ", err);
      });
  };

  const onChange = (e) => {
    setNextInfo({
      ...nextInfo,
      [e.target.name]: e.target.value,
    });
  };

  const editNext = (e) => {
    e.preventDefault();

    ApiService.editNext(nextInfo)
      .then((res) => {
        console.log("editNext 성공 : ", res.data);
        history.push("/admin/page_5/Admin_Next_List");
      })
      .catch((err) => {
        console.log("editNext 실패 : ", err);
      });
  };

  return (
    <div className={`Admin_Next_Edit ${style.Admin_Next_Edit}`}>
      <br />
      <br />
      <Typography variant="h5" className="nextEdit">
      Next_Edit
      </Typography>
      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Id"
        type="text"
        name="next_id"
        value={nextInfo.next_id}
        />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Img"
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
        name="next_time"
        value={nextInfo.next_time}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_age"
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
        label="Movie_Img2"
        type="text"
        name="next_image2"
        value={nextInfo.next_image2}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Img3"
        type="text"
        name="next_image3"
        value={nextInfo.next_image3}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Pd"
        type="text"
        name="next_pd"
        value={nextInfo.next_pd}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Cast"
        type="text"
        name="next_cast"
        value={nextInfo.next_cast}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Trailer1"
        type="text"
        name="next_trailer1"
        value={nextInfo.next_trailer1}
        onChange={onChange}
      />
      <br />

      <TextField
        required
        id="standard-required"
        variant="standard"
        label="Movie_Trailer2"
        type="text"
        name="next_trailer2"
        value={nextInfo.next_trailer2}
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
        className="editBtn"
        variant="contained"
        color="primary"
        onClick={editNext}
      >
        edit_Next
      </Button>
    </div>
  );
};

export default Admin_Next_Edit;
